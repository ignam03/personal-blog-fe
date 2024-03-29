import { clientAxios } from "../config/clientAxios";
import { ArticleType } from "../types/articleType";

export const createArticle = (
  article: ArticleType,
  config: {
    headers: { Authorization: string };
  }
) => clientAxios.post(`/articles`, article, config);
export const fetchArticlesRequest = (page?: number, size?: number) =>
  clientAxios.get(`/articles`, { params: { page, size } });
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
  page?: number,
  size?: number
) => {
  const res = clientAxios.get(
    `/articles/my-articles?page=${page}&size=${size}`,
    config
  );
  return res;
};
