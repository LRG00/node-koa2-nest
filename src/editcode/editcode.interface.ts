import { editcodeEntity } from './editcode.entity';

export interface pagination {
  total: number;
  pageSize: number;
  current: number;
}


export interface editcodesRO {
  list: editcodeEntity[];
  pagination: pagination
}