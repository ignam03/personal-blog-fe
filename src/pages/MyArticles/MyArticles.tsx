import { useEffect } from "react";
import { useArticle } from "../../context/ArticleContext";
import { Button } from "../../components/button/button";
import { PostImageCard } from "../../components/postImageCard/PostImageCard";

export const MyArticles = () => {
  const { fetchMyArticles, articles } = useArticle();
  useEffect(() => {
    fetchMyArticles();
  }, []);
  return (
    <section className="m-auto flex w-full max-w-screen-2xl flex-col gap-12 px-6 py-12 md:px-16 2xl:px-32 2xl:py-16">
      <div className="flex justify-between">
        <h3 className="text-4xl text-black font-semibold text-slate-950">
          My Articles
        </h3>
        <Button size="large">See More</Button>
      </div>
      <div className="grid w-full grid-flow-row gap-x-0 gap-y-6 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
        {articles.map((article) => (
          <PostImageCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};
