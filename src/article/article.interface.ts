import { UserData } from '../user/user.interface';
import { ArticleEntity } from './article.entity';
interface Comment {
  body: string;
}

interface ArticleData {
  slug: string;
  title: string;
  description: string;
  body?: string;
  tagList?: string[];
  createdAt?: Date
  updatedAt?: Date
  favorited?: boolean;
  favoritesCount?: number;
  author?: UserData;
}

export interface CommentsRO {
  comments: Comment[];
}
export interface pagination {
  total: number;
  pageSize: number;
  current: number;
}

export interface ArticleRO {
  article: ArticleEntity;
}

export interface ArticlesRO {
  list: ArticleEntity[];
  pagination: pagination
}

