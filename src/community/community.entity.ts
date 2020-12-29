import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert} from "typeorm";

@Entity('community')
export class CommunityEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @Column()
  communityType: number;
  @Column()
  tel: number;
  @Column()
  communityAddr: string;
  @Column({ type: 'timestamp'})
  created: Date;
  @Column()
  remark: string;
}