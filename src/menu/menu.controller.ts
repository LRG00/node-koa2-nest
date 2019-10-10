/*
 * @Author: liruigang
 * @Date: 2019-09-27 21:04:36
 * @LastEditors: liruigang
 * @LastEditTime: 2019-09-27 22:15:44
 * @UI: 
 */
import {Get, Controller, Query } from '@nestjs/common';
import { menuService } from './menu.service';

import {
  ApiUseTags,
  ApiBearerAuth,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiUseTags('menu')
@Controller('menu')
export class menuController {

  constructor(private readonly menuService: menuService) {}

  @Get()
  async findAll(@Query() query) {
    return await this.menuService.findAll(query);
  }

}