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
    let createTime: any = ''
    let customerTypeName: any = ''
    var obj = {
      1: '主动咨询客户',
      2: '老客户转介绍',
      3: '公司电话营销',
      4: '业务员扫楼带来的客户',
      5: '其他渠道客户',
    }
    list = list.map(item => {
      if (item.created) {
        createTime = new Date(+new Date(new Date(item.created).toJSON()) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
      }
      if (item.customerType) {
        customerTypeName = obj[item.customerType]
      }
      return {...item, createTime, customerTypeName}
    })
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
