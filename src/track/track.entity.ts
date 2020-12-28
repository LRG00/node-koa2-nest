import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert} from "typeorm";

@Entity('track')
export class TrackEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @Column()
  type: number;
  @Column()
  addr: string;
  @Column({ type: 'timestamp'})
  created: Date;
  @Column()
  remark: string;

}