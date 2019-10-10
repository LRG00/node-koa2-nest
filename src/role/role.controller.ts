/*
 * @Author: liruigang
 * @Date: 2019-09-27 21:04:36
 * @LastEditors: liruigang
 * @LastEditTime: 2019-09-27 22:15:44
 * @UI: 
 */
import {Get, Controller, Query } from '@nestjs/common';

// import {RoleEntity } from './role.entity';
import { RoleService } from './role.service';

import {
  ApiUseTags,
  ApiBearerAuth,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiUseTags('role')
@Controller('role')
export class RoleController {

  constructor(private readonly roleService: RoleService) {}

  @Get()
  async findAll(@Query() query) {
    return await this.roleService.findAll(query)
  }

}