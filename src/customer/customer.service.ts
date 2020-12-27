import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { CustomerEntity } from './customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerEntity)
    private readonly tagRepository: Repository<CustomerEntity>
  ) {}

  async findAll(): Promise<any> {
    const qb = await getRepository(CustomerEntity)
      .createQueryBuilder('customer');
    qb.where("1 = 1");
    const list = await this.tagRepository.find();
    const customersCount = await qb.getCount();
    return {data: list, count: customersCount, code: 0};
  }
  async create(data: any) {
    let customer = new CustomerEntity();
    customer.projectName = data.projectName;
    customer.projectType = data.projectType;
    customer.projectAddr = data.projectAddr;
    customer.amount = data.amount;
    customer.contacts = data.contacts;
    customer.tel = data.tel;
    customer.remark = data.remark;
    const newcustomer = await this.tagRepository.save(customer);
    return newcustomer;

  }

}
