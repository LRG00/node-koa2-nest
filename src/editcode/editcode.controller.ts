/*
 * @Author: liruigang
 * @Date: 2019-09-27 21:04:36
 * @LastEditors: liruigang
 * @LastEditTime: 2019-09-27 22:15:44
 * @UI: 
 */
import {Get, Controller, Query, Post, Body, Put, Delete } from '@nestjs/common';
import { editcodeService } from './editcode.service';

import {
  ApiUseTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiUseTags('editcode')
@Controller('editcode')
export class editcodeController {

  constructor(private readonly editcodeService: editcodeService) {}

  @Get()
  async findAll(@Query() query) {
    return await this.editcodeService.findAll(query);
  }
  @Post()
  async create(@Body() Body) {
    return await this.editcodeService.create(Body);
  }
  
  @ApiOperation({ title: '修改音乐' })
  @ApiResponse({ status: 201, description: '音乐修改成功'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Put()
  async update(@Body() Body) {
    // Todo: update slug also when title gets changed
    return this.editcodeService.update(Body);
  }

  @ApiOperation({ title: '删除音乐' })
  @ApiResponse({ status: 201, description: '音乐删除成功'})
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Delete()
  async delete(@Body('editcodeId') editcodeId) {
    return this.editcodeService.delete(editcodeId);
  }
}