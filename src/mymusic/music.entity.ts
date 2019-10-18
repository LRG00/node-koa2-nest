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
