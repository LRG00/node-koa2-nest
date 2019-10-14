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
  type: string;

  @Column()
  url: string;

  @Column({ type: 'timestamp'})
  created: Date;

}
