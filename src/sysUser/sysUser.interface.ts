import { SysUserEntity } from './sysUser.entity';

export interface pagination {
  total: number;
  pageSize: number;
  current: number;
}


export interface sysusersRO {
  list: SysUserEntity[];
  pagination: pagination
}