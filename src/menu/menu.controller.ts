/*
 * @Author: liruigang
 * @Date: 2019-09-27 21:04:36
 * @LastEditors: liruigang
 * @LastEditTime: 2019-10-18 20:57:37
 * @UI: 
 */
import {Get, Controller, Query, Post, Body, Put, Delete } from '@nestjs/common';
import { menuService } from './menu.service';

import {
  ApiUseTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
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
  @Post()
  async create(@Body() Body) {
    return await this.menuService.create(Body);
  }
  
  @ApiOperation({ title: '修改菜单' })
  @ApiResponse({ status: 201, description: '菜单修改成功'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Put()
  async update(@Body() Body) {
    // Todo: update slug also when title gets changed
    return this.menuService.update(Body);
  }

  @ApiOperation({ title: '删除菜单' })
  @ApiResponse({ status: 201, description: '菜单删除成功'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Delete()
  async delete(@Body('menuId') menuId) {
    return this.menuService.delete(menuId);
  }
}