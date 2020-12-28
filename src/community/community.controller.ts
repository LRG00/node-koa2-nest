/*
 * @Author: liruigang
 * @Date: 2019-09-27 21:04:36
 * @LastEditors: liruigang
 * @LastEditTime: 2019-09-27 22:15:44
 * @UI: 
 */
import {Get,Post, Controller, Body, Query } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'
import { CommunityEntity } from './community.entity';
import { CommunityService } from './community.service';
import { JwtAuthGuard } from '../system/auth/guards/jwt-auth.guard'
import { LocalAuthGuard } from '../system/auth/guards/local-auth.guard'
import {
  ApiTags,
  ApiBearerAuth,
  ApiBody
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('community')
@Controller('community')
export class CommunityController {

  constructor(private readonly communityService: CommunityService) {}

  @Get()
  async findAll(@Query() query) {
    return await this.communityService.findAll(query)
  }
  @Post('delete')
  async delete(@Body() body) {
    return await this.communityService.delete(body)
  }
  @Post('update')
  async update(@Body() body) {
    return await this.communityService.update(body)
  }
  @Post('add')
  @ApiBody({
    description: '小区创建'
  })
  async create(@Body()  data: any) {
    return this.communityService.create(data);
  }

}