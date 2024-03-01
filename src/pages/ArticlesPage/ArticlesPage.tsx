import { useEffect } from "react";
import { useArticle } from "../../context/ArticleContext";
import { ArticleCard } from "../../components/articleCard/ArticleCard";

export const ArticlePage = () => {
  const { fetchArticles, articles } = useArticle();
  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};
