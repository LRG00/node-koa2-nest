/*
 * @Author: liruigang
 * @Date: 2019-09-27 21:04:36
 * @LastEditors: liruigang
 * @LastEditTime: 2019-09-28 01:03:07
 * @UI: 
 */
import { Get, Post, Body, Put, Delete, Param, Controller, UsePipes } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { UserRO } from './user.interface';
import { CreateUserDto, UpdateUserDto, LoginUserDto } from './dto';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { User } from './user.decorator';

import {
  ApiTags,
  ApiHeader,
  ApiBody,
  ApiParam,
  ApiBearerAuth
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('user')
// @ApiHeader({
//   name: 'authoriation',
//   required: true,
//   description: '本次请求请带上token',
//  })
@Controller()
export class UserController {

  constructor(private readonly userService: UserService) {}

  @Get('user') // 自动根据token获取当前用户的信息
  async findMe(@User('email') email: string): Promise<UserRO> {
    return await this.userService.findByEmail(email);
  }

  @Put('user')
  @ApiBody({
    description: '用户修改',
    type: UpdateUserDto,
  })
  async update(@User('id') userId: number, @Body('user') userData: UpdateUserDto) {
    return await this.userService.update(userId, userData);
  }

  @Post('users')
  @ApiBody({
    description: '用户创建',
    type: CreateUserDto,
  })
  async create(@Body('user') userData: CreateUserDto) {
    return this.userService.create(userData);
  }


  @ApiParam({
    name: 'email',
    description: '邮箱号',
  })
  @Delete('users/:email')
  async delete(@Param() params) {
    return await this.userService.delete(params.email);
  }

  @Post('users/login')
  @ApiBody({
    description: '用户登录',
    type: LoginUserDto,
  })
  async login(@Body() loginUserDto: LoginUserDto): Promise<UserRO> {
    const _user = await this.userService.findOne(loginUserDto);
    const errors = {User: ' not found'};
    if (!_user) throw new HttpException({errors}, 401);

    const token = await this.userService.generateJWT(_user);
    const {email, username, bio, image} = _user;
    const user = {email, token, username, bio, image};
    return {user}
  }
}
