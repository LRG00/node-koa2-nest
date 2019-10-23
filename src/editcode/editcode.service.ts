/*
 * @Author: liruigang
 * @Date: 2019-10-18 17:03:13
 * @LastEditors: liruigang
 * @LastEditTime: 2019-10-18 21:33:06
 * @UI: 
 */
import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { editcodeEntity } from './editcode.entity';
import { editcodesRO } from './editcode.interface';

@Injectable()
export class editcodeService {
  constructor(
    @InjectRepository(editcodeEntity)
    private readonly editcodeRepository: Repository<editcodeEntity>
  ) {}

  async findAll(query): Promise<editcodesRO> {
    const qb = await getRepository(editcodeEntity)
    .createQueryBuilder('editcode')

     qb.where("1 = 1");

    const list = await qb.getMany();
    const articlesCount = await qb.getCount();
    const editcodesRO = {
      list,
      pagination: {
        total: articlesCount,
        pageSize: +query.pageSize || 10,
        current: +query.currentPage || 1,
      }
    }
    return editcodesRO;
  }

  async create(editcodeData) {
    let editcode = new editcodeEntity();
    editcode.title = editcodeData.title;
    editcode.cssCode = editcodeData.cssCode;
    editcode.htmlCode = editcodeData.htmlCode;
    editcode.jsCode = editcodeData.jsCode;
    const neweditcode = await this.editcodeRepository.save(editcode);
    return neweditcode;

  }

  async update(editcodeData: editcodeEntity) {
    let toUpdate = await this.editcodeRepository.findOne({ editcodeId: editcodeData.editcodeId });
    let updated = Object.assign(toUpdate, editcodeData);
    const editcode = await this.editcodeRepository.save(updated);
    return { editcode };
  }

  async delete(editcodeId: number) {
    return await this.editcodeRepository.delete({ editcodeId });
  }

}
