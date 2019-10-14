import { musicEntity } from './music.entity';

export interface pagination {
  total: number;
  pageSize: number;
  current: number;
}


export interface musicsRO {
  list: musicEntity[];
  pagination: pagination
}