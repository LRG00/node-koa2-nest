import { menuEntity } from './menu.entity';

export interface pagination {
  total: number;
  pageSize: number;
  current: number;
}


export interface menusRO {
  list: menuEntity[];
  pagination: pagination
}