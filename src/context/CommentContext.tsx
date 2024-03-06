import { createContext, useContext, useState } from "react";
import { CommentType } from "../types/commentType";
import { useNotification } from "./NotificationContext";
import {
  createCommentRequest,
  deleteCommentRequest,
  fetchCommentsByArticleRequest,
} from "../api/comment";

type CommentTypeProps = {
  createComment: (comment: CommentType) => void;
  deleteComment: (id: number) => void;
  fetchCommentsByArticle: (id: number) => void;
  comments: CommentType[];
};

type Props = {
  children: React.ReactNode;
};

const CommentContext = createContext<CommentTypeProps | null>(null);

export const useComment = () => {
  const context = useContext(CommentContext);
  if (!context) {
    throw new Error("useComment must be used within an CommentProvider");
  }
  return context;
};

export const CommentProvider = ({ children }: Props) => {
  const { getError, getSuccess } = useNotification();
  const [comments, setComments] = useState<CommentType[]>([]);

  const createComment = async (comment: CommentType) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        getError("You must be logged in");
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await createCommentRequest(comment, config);
      if (res.status === 200) {
        getSuccess(res.data.message);
      }
      setComments([...comments, comment]);
    } catch (error: any) {
      console.log(error);
      getError("Error " + error.data.message);
    }
  };
  const deleteComment = async (id: number) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        getError("You must be logged in");
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await deleteCommentRequest(id, config);
      if (res.status === 200) {
        getSuccess(res.data.message);
        setComments(comments.filter((comment) => comment.id !== id));
      }
    } catch (error: any) {
      console.log(error);
      getError("Error " + error.response.data.message);
    }
  };

  const fetchCommentsByArticle = async (id: number) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        getError("You must be logged in");
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await fetchCommentsByArticleRequest(id, config);
      if (res.status === 200) {
        //getSuccess(res.data.message);
      }
      setComments(res.data);
    } catch (error: any) {
      console.log(error);
      getError("Error " + error.data.message);
    }
  };

  const values = {
    createComment,
    deleteComment,
    fetchCommentsByArticle,
    comments,
  };
  return (
    <CommentContext.Provider value={values}>{children}</CommentContext.Provider>
  );
};
