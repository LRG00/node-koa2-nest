import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { RoleEntity } from './role.entity';
import { rolesRO } from './role.interface';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly tagRepository: Repository<RoleEntity>
  ) {}

  async findAll(query): Promise<rolesRO> {
    const qb = await getRepository(RoleEntity)
    .createQueryBuilder('role')

     qb.where("1 = 1");

    const list = await qb.getMany();
    const articlesCount = await qb.getCount();
    const rolesRO = {
      list,
      pagination: {
        total: articlesCount,
        pageSize: +query.pageSize || 10,
        current: +query.currentPage || 1,
      }
    }
    return rolesRO;
  }

}
