import { clientAxios } from "../config/clientAxios";
import { ArticleType } from "../types/articleType";

export const createArticle = (
  article: ArticleType,
  config: {
    headers: { Authorization: string };
  }
) => clientAxios.post(`/articles`, article, config);
export const fetchArticlesRequest = () => clientAxios.get(`/articles`);
export const fetchArticleRequest = (
  id: number,
  config: { headers: { Authorization: string } }
) => clientAxios.get(`/articles/${id}`, config);
export const updateArticleRequest = (
  id: number,
  article: ArticleType,
  config: { headers: { Authorization: string } }
) => clientAxios.put(`/articles/${id}`, article, config);
export const deleteArticleRequest = (
  id: number,
  config: { headers: { Authorization: string } }
) => clientAxios.delete(`/articles/${id}`, config);
export const fetchMyArticlesRequest = (config: {
  headers: { Authorization: string };
}) => {
  return clientAxios.get(`/articles/my-articles`, config);
};
