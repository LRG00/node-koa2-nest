import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { menuEntity } from './menu.entity';
import { menusRO } from './menu.interface';

@Injectable()
export class menuService {
  constructor(
    @InjectRepository(menuEntity)
    private readonly menuRepository: Repository<menuEntity>
  ) {}

  async findAll(query): Promise<menusRO> {
    const qb = await getRepository(menuEntity)
    .createQueryBuilder('menu')

     qb.where("1 = 1");

    const list = await qb.getMany();
    const articlesCount = await qb.getCount();
    const menusRO = {
      list,
      pagination: {
        total: articlesCount,
        pageSize: +query.pageSize || 10,
        current: +query.currentPage || 1,
      }
    }
    return menusRO;
  }

  async create(menuData) {
    let menu = new menuEntity();
    menu.menuId = menuData.menuId;
    menu.name = menuData.name;
    menu.parentId = menuData.parentId;
    const qb = await  this.menuRepository.createQueryBuilder('menu')
    const list = await qb.getMany();
    const filterList = list.filter(item => {
      return menuData.parentId === item.menuId
    })
    menu.parentName = filterList.length ? filterList[0].name : '';
    menu.icon = menuData.icon;
    menu.type = menuData.type;
    menu.orderNum = menuData.orderNum;
    menu.path = menuData.path;
    menu.perms = menuData.perms;
    const newMenu = await this.menuRepository.save(menu);
    return newMenu;

  }

  async update(menuData: menuEntity) {
    let toUpdate = await this.menuRepository.findOne({ menuId: menuData.menuId });
    let updated = Object.assign(toUpdate, menuData);
    const menu = await this.menuRepository.save(updated);
    return { menu };
  }

  async delete(menuId: number) {
    return await this.menuRepository.delete({ menuId });
  }

}
