import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('role')
export class RoleEntity {

  @PrimaryGeneratedColumn()
  roleId: number;

  @Column()
  roleName: string;

  @Column()
  unitId: number;

  @Column()
  unitName: string;

  @Column()
  remark: string;

  @Column()
  createUserId: number;

  @Column({ type: 'timestamp'})
  created: Date;

}
