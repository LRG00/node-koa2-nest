import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../system/user/user.module';
import { CustomerService } from './customer.service';
import { CustomerEntity } from './customer.entity';
import { CustomerController } from './customer.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerEntity]), UserModule],
  providers: [CustomerService],
  controllers: [
    CustomerController
  ],
  exports: []
})
export class CustomerModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
  }
}
