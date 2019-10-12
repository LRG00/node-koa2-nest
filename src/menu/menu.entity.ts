import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('menu')
export class menuEntity {

  @PrimaryGeneratedColumn()
  menuId: number;

  @Column()
  name: string;

  @Column()
  key: string;

  @Column()
  parentId: string;

  @Column()
  parentName: string;

  @Column()
  icon: string;

  @Column()
  type: string;

  @Column()
  orderNum: string;

  @Column()
  path: string;

  @Column()
  perms: string;

  @Column({ type: 'timestamp'})
  created: Date;

}
