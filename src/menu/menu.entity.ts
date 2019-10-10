import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('menu')
export class menuEntity {

  @PrimaryGeneratedColumn()
  menuId: number;

  @Column()
  name: string;

  @Column()
  parentId: number;

  @Column()
  parentName: string;

  @Column()
  icon: string;

  @Column()
  type: string;

  @Column()
  orderNum: string;

  @Column()
  url: string;

  @Column()
  perms: string;

  @Column({ type: 'timestamp'})
  created: Date;

}
