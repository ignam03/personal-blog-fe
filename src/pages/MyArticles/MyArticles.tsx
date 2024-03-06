import { useEffect } from "react";
import { useArticle } from "../../context/ArticleContext";
import { PostImageCard } from "../../components/postImageCard/PostImageCard";
import { Button } from "../../components/button/Button";

export const MyArticles = () => {
  const { fetchMyArticles, articles } = useArticle();
  useEffect(() => {
    fetchMyArticles();
  }, []);
  return (
    <section className="m-auto flex w-full max-w-screen-2xl flex-col gap-12 px-6 py-12 md:px-16 2xl:px-32 2xl:py-16">
      <span className="flex items-center">
        <span className="pr-6 text-4xl">My Articles</span>
        <span className="h-px flex-1 bg-black"></span>
      </span>

      <div className="grid w-full grid-flow-row gap-x-0 gap-y-6 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
        {articles.map((article) => (
          <PostImageCard key={article.id} article={article} />
        ))}
      </div>
      <div className="flex justify-between">
        <Button size="large">See More</Button>
      </div>
      <span className="flex items-center">
        <span className="pr-6 text-4xl"></span>
        <span className="h-px flex-1 bg-black"></span>
      </span>
    </section>
  );
};
