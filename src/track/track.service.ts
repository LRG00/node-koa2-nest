import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { TrackEntity } from './track.entity';

@Injectable()
export class TrackService {
  constructor(
    @InjectRepository(TrackEntity)
    private readonly trackRepository: Repository<TrackEntity>
  ) {}

  async findAll(query): Promise<any> {
    const qb = await getRepository(TrackEntity).createQueryBuilder('track');
    let list = await this.trackRepository.find();
    
    if ('name' in query) {
      if (query.name) {
        const one = await qb.where("track.name = :name", { name: query.name }).getOne()
        list = one ? [one] : [];
      }
    }
    
    const trackCount = await qb.getCount();
    return {data: list, count: trackCount, code: 0};
  }
  async create(data: any) {
    let track = new TrackEntity();
    track.name = data.name;
    track.trackType = data.trackType;
    track.trackAddr = data.trackAddr;
    track.num = data.num;
    track.remark = data.remark;
    const newtrack = await this.trackRepository.save(track);
    return newtrack;

  }
  async update(body): Promise<any> {
    body.id = +body.id
    let toUpdate = await this.trackRepository.findOne({ id: body.id });
    let updated = Object.assign(toUpdate, body);
    const article = await this.trackRepository.save(updated);
    return {article};
  }
  async delete(body): Promise<any> {
    await this.trackRepository.delete(body.id);

  }

}
