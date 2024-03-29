import { ArticleType } from "./articleType";

export interface ArticleResponse {
  currentPage: number;
  totalItems: number;
  totalPages: number;
  articles: ArticleType[];
}
