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

  async findAll(query): Promise<any> {
    const qb = await getRepository(CustomerEntity).createQueryBuilder('customer');
    let list = await this.tagRepository.find();
    console.log(query, 'queryqueryqueryquery')
    if ('name' in query) {
      if (query.name) {
        const one = await qb.where("customer.name = :name", { name: query.name }).getOne()
        list = one ? [one] : [];
      }

    }
    
    const customersCount = await qb.getCount();
    return {data: list, count: customersCount, code: 0};
  }
  async create(data: any) {
    let customer = new CustomerEntity();
    customer.name = data.name;
    customer.customerType = data.customerType;
    customer.customerAddr = data.customerAddr;
    customer.created = data.created;
    customer.tel = data.tel;
    customer.remark = data.remark;
    const newcustomer = await this.tagRepository.save(customer);
    return newcustomer;

  }
  async update(body: any): Promise<any> {
    body.id = +body.id
    let toUpdate = await this.tagRepository.findOne({ id: body.id });
    let updated = Object.assign(toUpdate, body);
    const article = await this.tagRepository.save(updated);
    return {article};
  }
  async delete(body): Promise<any> {
    await this.tagRepository.delete(body.id);

  }
}
