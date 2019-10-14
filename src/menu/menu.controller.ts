/*
 * @Author: liruigang
 * @Date: 2019-09-27 21:04:36
 * @LastEditors: liruigang
 * @LastEditTime: 2019-09-27 22:15:44
 * @UI: 
 */
import {Get, Controller, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { menuService } from './menu.service';
import { ExampleService } from '../MailerService';

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

  constructor(private readonly menuService: menuService, private readonly MailerService: ExampleService) {}

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