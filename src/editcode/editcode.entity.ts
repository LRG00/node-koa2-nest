/*
 * @Author: liruigang
 * @Date: 2019-10-18 17:03:13
 * @LastEditors: liruigang
 * @LastEditTime: 2019-10-18 17:03:13
 * @UI: 
 */
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('editcode')
export class editcodeEntity {

  @PrimaryGeneratedColumn()
  editcodeId: number;

  @Column()
  title: string;

  @Column('longtext')
  cssCode: string;

  @Column('longtext')
  htmlCode: string;

  @Column('longtext')
  jsCode: string;

  @Column({ type: 'timestamp'})
  created: Date;

}
