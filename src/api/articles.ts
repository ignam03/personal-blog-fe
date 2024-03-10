import { clientAxios } from "../config/clientAxios";
import { ArticleType } from "../types/articleType";

export const createArticle = (
  article: ArticleType,
  config: {
    headers: { Authorization: string };
  }
) => clientAxios.post(`/articles`, article, config);
export const fetchArticlesRequest = (limit?: number) =>
  clientAxios.get(`/articles`, { params: { limit } });
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
export const fetchMyArticlesRequest = (
  config: { headers: { Authorization: string } },
  limit?: number
) => {
  const res = clientAxios.get(`/articles/my-articles?limit=${limit}`, config);
  return res;
};
