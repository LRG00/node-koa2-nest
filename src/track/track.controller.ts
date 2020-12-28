/*
 * @Author: liruigang
 * @Date: 2019-09-27 21:04:36
 * @LastEditors: liruigang
 * @LastEditTime: 2019-09-27 22:15:44
 * @UI: 
 */
import {Get,Post, Controller, Body, Query } from '@nestjs/common';
import { TrackService } from './track.service';
import {
  ApiTags,
  ApiBearerAuth,
  ApiBody
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('track')
@Controller('track')
export class TrackController {

  constructor(private readonly trackService: TrackService) {}

  @Get()
  async findAll(@Query() query) {
    return await this.trackService.findAll(query)
  }
  @Post('delete')
  async delete(@Body() body) {
    return await this.trackService.delete(body)
  }
  @Post('update')
  async update(@Body() body) {
    return await this.trackService.update(body)
  }

  @Post('add')
  @ApiBody({
    description: '小区创建'
  })
  async create(@Body()  data: any) {
    return this.trackService.create(data);
  }

}