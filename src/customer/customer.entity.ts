import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert} from "typeorm";

@Entity('customer')
export class CustomerEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  projectName: string;
  @Column()
  projectType: number;
  @Column()
  projectAddr: string;
  @Column({ type: 'timestamp'})
  created: Date;
  @Column()
  amount: string;
  @Column()
  contacts: string;
  @Column()
  tel: string;
  @Column()
  remark: string;

}