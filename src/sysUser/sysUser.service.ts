import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { SysUserEntity } from './sysUser.entity';
import { sysusersRO } from './sysUser.interface';

@Injectable()
export class SysUserService {
  constructor(
    @InjectRepository(SysUserEntity)
    private readonly tagRepository: Repository<SysUserEntity>
  ) {}

  async findAll(query): Promise<sysusersRO> {
    const qb = await getRepository(SysUserEntity)
    .createQueryBuilder('sysuser')

     qb.where("1 = 1");

    const list = await qb.getMany();
    const articlesCount = await qb.getCount();
    const sysusersRO = {
      list,
      pagination: {
        total: articlesCount,
        pageSize: +query.pageSize || 10,
        current: +query.currentPage || 1,
      }
    }
    return sysusersRO;
  }

}
