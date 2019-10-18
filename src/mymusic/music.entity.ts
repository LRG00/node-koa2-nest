/*
 * @Author: liruigang
 * @Date: 2019-10-18 17:03:13
 * @LastEditors: liruigang
 * @LastEditTime: 2019-10-18 17:03:13
 * @UI: 
 */
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('music')
export class musicEntity {

  @PrimaryGeneratedColumn()
  musicId: number;

  @Column()
  name: string;

  @Column()
  author: string;

  @Column()
  photo: string;

  @Column()
  mimetype: string;

  @Column()
  url: string;

  @Column()
  filename: string;
  
  @Column()
  originalname: string;

  @Column()
  path: string;

  @Column()
  size: number;

  @Column()
  encoding: string;

  @Column()
  fieldname: string;

  @Column({ type: 'timestamp'})
  created: Date;

}
