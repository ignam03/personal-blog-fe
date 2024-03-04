import { createContext, useContext, useState } from "react";
import { ArticleType } from "../types/articleType";
import {
  createArticle,
  deleteArticleRequest,
  fetchArticleRequest,
  fetchArticlesRequest,
  fetchMyArticlesRequest,
  updateArticleRequest,
} from "../api/articles";
import { useNotification } from "./NotificationContext";

type contextArticle = {
  saveArticle: (article: ArticleType) => article;
  fetchArticles: () => void;
  fetchArticle: (id: number) => article | null;
  deleteArticle: (id: number) => void;
  updateArticle: (id: number, article: ArticleType) => void;
  fetchMyArticles: () => void;
  articles: [] | ArticleType[];
  article: ArticleType | null;
};

type Props = {
  children: React.ReactNode;
};

const ArticleContext = createContext<contextArticle>({
  saveArticle: (article: ArticleType) => article,
  fetchArticles: () => {},
  fetchArticle: (id: number) => {},
  deleteArticle: (id: number) => {},
  updateArticle: (id: number, article: ArticleType) => {},
  fetchMyArticles: () => {},
  articles: [],
  article: null,
});

export const useArticle = () => {
  const context = useContext(ArticleContext);
  if (!context) {
    throw new Error("useArticles must be used within an ArticleProvider");
  }
  return context;
};

export const ArticleProvider = ({ children }: Props) => {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState(null);
  const { getError, getSuccess } = useNotification();

  const saveArticle = async (article: ArticleType) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await createArticle(article, config);
      setArticle(res.data);
    } catch (error) {
      console.log(error);
      setArticle(null);
    }
  };

  const fetchArticles = async () => {
    try {
      // const token = localStorage.getItem("token");
      // if (!token) {
      //   return;
      // }
      // const config = {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${token}`,
      //   },
      // };
      const res = await fetchArticlesRequest();
      setArticles(res.data);
    } catch (error) {
      console.log(error);
      setArticles([]);
    }
  };

  const fetchArticle = async (id: number) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await fetchArticleRequest(id, config);
      if (res.status === 200) setArticle(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      setArticle(null);
    }
  };

  const fetchMyArticles = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await fetchMyArticlesRequest(config);
      if (res.status === 200) setArticles(res.data);
    } catch (error) {
      setArticles([]);
    }
  };

  const deleteArticle = async (id: number) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await deleteArticleRequest(id, config);
      if (res.status === 200)
        setArticles(articles.filter((article) => article.id !== id));
      getSuccess(res.data.message);
    } catch (error: any) {
      console.log(error);
      getError(error.response.data.message);
    }
  };

  const updateArticle = async (id: number, article: ArticleType) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await updateArticleRequest(id, article, config);
      if (res.status === 200) setArticle(res.data);
    } catch (error) {
      console.log(error);
      setArticle(null);
    }
  };

  const values = {
    saveArticle,
    articles,
    fetchArticles,
    fetchArticle,
    fetchMyArticles,
    deleteArticle,
    updateArticle,
    article,
  };

  return (
    <ArticleContext.Provider value={values}>{children}</ArticleContext.Provider>
  );
};
