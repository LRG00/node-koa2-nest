import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert} from "typeorm";

@Entity('track')
export class TrackEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @Column()
  trackType: number;
  @Column()
  trackAddr: string;
  @Column()
  num: number;
  @Column({ type: 'timestamp'})
  created: Date;
  @Column()
  remark: string;

}