/*
 * @Author: liruigang
 * @Date: 2019-09-27 21:04:36
 * @LastEditors: liruigang
 * @LastEditTime: 2019-09-29 23:21:59
 * @UI: 
 */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ArticleEntity } from './article.entity';
import { UserEntity } from '../user/user.entity';

@Entity()
export class Comment {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  body: string;

  @ManyToOne(type => ArticleEntity, article => article.comments)
  article: ArticleEntity;

  @ManyToOne(type => UserEntity, user => user.comments, {eager: true})
  author: UserEntity;
}