/*
 * @Author: liruigang
 * @Date: 2019-09-27 21:04:36
 * @LastEditors: liruigang
 * @LastEditTime: 2019-09-27 22:15:44
 * @UI: 
 */
import {Get,Post, Controller, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'
import { CustomerEntity } from './customer.entity';
import { CustomerService } from './customer.service';
import { JwtAuthGuard } from '../system/auth/guards/jwt-auth.guard'
import { LocalAuthGuard } from '../system/auth/guards/local-auth.guard'
import {
  ApiTags,
  ApiBearerAuth,
  ApiBody
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('customer')
@Controller('customers')
export class CustomerController {

  constructor(private readonly customerService: CustomerService) {}

  @Get()
  async findAll() {
    return await this.customerService.findAll()
  }
  @Post('add')
  @ApiBody({
    description: '客户创建'
  })
  async create(@Body()  data: any) {
    return this.customerService.create(data);
  }

}