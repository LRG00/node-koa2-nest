import { RoleEntity } from './role.entity';

export interface pagination {
  total: number;
  pageSize: number;
  current: number;
}


export interface rolesRO {
  list: RoleEntity[];
  pagination: pagination
}