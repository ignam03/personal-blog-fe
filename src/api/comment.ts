import { clientAxios } from "../config/clientAxios";
import { CommentType } from "../types/commentType";

export const createCommentRequest = (
  comment: CommentType,
  config: { headers: { Authorization: string } }
) => clientAxios.post(`/comments`, comment, config);
export const deleteCommentRequest = (
  id: number,
  config: { headers: { Authorization: string } }
) => {
  return clientAxios.delete(`/comments/${id}`, config);
};
export const fetchCommentsByArticleRequest = (
  id: number,
  config: { headers: { Authorization: string } }
) => clientAxios.get(`/comments/article/${id}`, config);
