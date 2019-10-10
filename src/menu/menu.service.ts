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

}
