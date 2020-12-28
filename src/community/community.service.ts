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
      const one = await qb.where("community.name = :name", { name: query.name }).getOne()
      list = one ? [one] : [];
    }
    
    const communityCount = await qb.getCount();
    return {data: list, count: communityCount, code: 0};
  }
  async create(data: any) {
    let community = new CommunityEntity();
    community.name = data.name;
    community.type = data.type;
    community.addr = data.addr;
    community.remark = data.remark;
    const newcommunity = await this.communityRepository.save(community);
    return newcommunity;

  }
  async update(body): Promise<any> {
    let toUpdate = await this.communityRepository.findOne({ id: body.id });
    let updated = Object.assign(toUpdate, body);
    const article = await this.communityRepository.save(updated);
    return {article};
  }
  async delete(body): Promise<any> {
    await this.communityRepository.delete(body.id);

  }
}
