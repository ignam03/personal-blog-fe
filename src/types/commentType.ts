export interface CommentType {
  id?: number;
  content: string;
  articleId: number;
  parentCommentId?: number;
  author?: {
    id?: number;
    userName?: string;
    profileImage?: string;
    biography?: string;
  }
}
