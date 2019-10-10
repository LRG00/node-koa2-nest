import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('sysuser')
export class SysUserEntity {

  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  username: string;

  @Column()
  unitId: number;

  @Column()
  unitName: string;

  @Column()
  email: string;

  @Column()
  mobile: string;

  @Column()
  createUserId: number;

  @Column()
  status: boolean;

  @Column({ type: 'timestamp'})
  created: Date;

}
