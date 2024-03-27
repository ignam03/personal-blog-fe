import { useEffect } from "react";
import { useArticle } from "../../context/ArticleContext";
import { PostImageCard } from "../../components/postImageCard/PostImageCard";
import { Button } from "../../components/button/Button";
import { LIMIT } from "../../types/Limit";
import { ProfileLoader } from "../../components/profileLoader/ProfileLoader";

export const ArticlesPage = () => {
  const { fetchArticles, articles } = useArticle();
  useEffect(() => {
    fetchArticles(LIMIT.DEFAULT_ARTICLE);
  }, []);
  return (
    <section className="m-auto flex w-full max-w-screen-2xl flex-col gap-12 px-6 py-12 md:px-16 2xl:px-32 2xl:py-16 dark:text-darkGray">
      {/* <h3 className="text-4xl text-black font-semibold text-slate-950">
        All Articles
      </h3> */}
      <span className="flex items-center">
        <span className="pr-6 text-4xl">Todos los articulos</span>
        <span className="h-px flex-1 bg-black"></span>
      </span>
      {articles.length ? (
        <>
          <div className="grid w-full grid-flow-row gap-x-0 gap-y-6 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
            {articles.map((article) => (
              <PostImageCard key={article.id} article={article} />
            ))}
          </div>
        </>
      ) : (
        <>
          <ProfileLoader />
        </>
      )}
      <span className="flex items-center">
        <span className="h-px flex-1 bg-black"></span>
      </span>
      <div className="flex justify-between">
        <Button size="large">Ver mas</Button>
      </div>
    </section>
  );
};
