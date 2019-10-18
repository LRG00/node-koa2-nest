import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { musicEntity } from './music.entity';
import { musicsRO } from './music.interface';

@Injectable()
export class musicService {
  constructor(
    @InjectRepository(musicEntity)
    private readonly musicRepository: Repository<musicEntity>
  ) {}

  async findAll(query): Promise<musicsRO> {
    const qb = await getRepository(musicEntity)
    .createQueryBuilder('music')

     qb.where("1 = 1");

    const list = await qb.getMany();
    const articlesCount = await qb.getCount();
    const musicsRO = {
      list,
      pagination: {
        total: articlesCount,
        pageSize: +query.pageSize || 10,
        current: +query.currentPage || 1,
      }
    }
    return musicsRO;
  }

  async create(musicData) {
    let music = new musicEntity();
    music.fieldname = musicData.fieldname;
    music.name = musicData.originalname;
    music.encoding = musicData.encoding;
    music.mimetype = musicData.mimetype;
    music.filename = musicData.filename;
    music.url = musicData.filename;
    music.path = musicData.path;
    music.size = musicData.size;
    const newmusic = await this.musicRepository.save(music);
    return newmusic;

  }

  async update(musicData: musicEntity) {
    let toUpdate = await this.musicRepository.findOne({ musicId: musicData.musicId });
    let updated = Object.assign(toUpdate, musicData);
    const music = await this.musicRepository.save(updated);
    return { music };
  }

  async delete(musicId: number) {
    return await this.musicRepository.delete({ musicId });
  }

}
