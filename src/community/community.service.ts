import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { CommunityEntity } from './community.entity';

@Injectable()
export class CommunityService {
  constructor(
    @InjectRepository(CommunityEntity)
    private readonly communityRepository: Repository<CommunityEntity>
  ) {}

  async findAll(query): Promise<any> {
    const qb = await getRepository(CommunityEntity).createQueryBuilder('community');
    let list = await this.communityRepository.find();
    
    if ('name' in query) {
      if (query.name) {
        const one = await qb.where("community.name = :name", { name: query.name }).getOne()
        list = one ? [one] : [];
      }
    }
    
    const communityCount = await qb.getCount();
    let createTime: any = ''
    let communityTypeName: any = ''
    var obj = {
      1: '未拿钥匙的小区',
      2: '即将拿钥匙的小区',
      3: '正在装修的小区',
      4: '装修接近尾声的小区',
      5: '装修结束的小区',
      6: '旧房改造的小区',
      7: '其他',
    }
    list = list.map(item => {
      if (item.created) {
        createTime = new Date(+new Date(new Date(item.created).toJSON()) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
      }
      if (item.communityType) {
        communityTypeName = obj[item.communityType]
      }
      return {...item, createTime, communityTypeName}
    })
    return {data: list, count: communityCount, code: 0};
  }
  async create(data: any) {
    let community = new CommunityEntity();
    community.name = data.name;
    community.communityType = data.communityType;
    community.tel = data.tel;
    community.communityAddr = data.communityAddr;
    community.remark = data.remark;
    const newcommunity = await this.communityRepository.save(community);
    return newcommunity;

  }
  async update(body): Promise<any> {
    body.id = +body.id
    let toUpdate = await this.communityRepository.findOne({ id: body.id });
    let updated = Object.assign(toUpdate, body);
    const article = await this.communityRepository.save(updated);
    return {article};
  }
  async delete(body): Promise<any> {
    await this.communityRepository.delete(body.id);

  }
}
