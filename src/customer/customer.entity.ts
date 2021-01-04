import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('customer')
export class CustomerEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @Column()
  customerType: number;
  @Column()
  customerAddr: string;
  @Column({ type: 'timestamp'})
  created: Date;
  @Column()
  tel: string;
  @Column()
  remark: string;

}