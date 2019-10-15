/*
 * @Author: liruigang
 * @Date: 2019-09-27 21:04:36
 * @LastEditors: liruigang
 * @LastEditTime: 2019-09-27 22:15:44
 * @UI: 
 */
import {Get, Controller, Query, Post, Body, Put, Delete } from '@nestjs/common';
import { musicService } from './music.service';

import {
  ApiUseTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiUseTags('music')
@Controller('music')
export class musicController {

  constructor(private readonly musicService: musicService) {}

  @Get()
  async findAll(@Query() query) {
    return await this.musicService.findAll(query);
  }
  @Post()
  async create(@Body() Body) {
    return await this.musicService.create(Body);
  }
  
  @ApiOperation({ title: '修改菜单' })
  @ApiResponse({ status: 201, description: '菜单修改成功'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Put()
  async update(@Body() Body) {
    // Todo: update slug also when title gets changed
    return this.musicService.update(Body);
  }

  @ApiOperation({ title: '删除菜单' })
  @ApiResponse({ status: 201, description: '菜单删除成功'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Delete()
  async delete(@Body('musicId') musicId) {
    return this.musicService.delete(musicId);
  }
}