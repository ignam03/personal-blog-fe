import { useEffect, useState } from "react";
import { useArticle } from "../../context/ArticleContext";
import { PostImageCard } from "../../components/postImageCard/PostImageCard";
import { Button } from "../../components/button/Button";
import { ArticleStat } from "../../components/articleStat/ArticleStat";
import { LIMIT } from "../../types/Limit";
import { ProfileLoader } from "../../components/profileLoader/ProfileLoader";
import { Pagination } from "../../components/pagination/Pagination";

export const MyArticles = () => {
  const { fetchMyArticles, totalComments, responseArticle } = useArticle();
  const [currentPage, setCurrentPage] = useState(0);
  const totalAddons = 0;
  const size = LIMIT.DEFAULT_MY_ARTICLES;
  useEffect(() => {
    fetchMyArticles(currentPage, size);
  }, []);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    fetchMyArticles(page, size);
  };

  return (
    <section className="m-auto flex w-full max-w-screen-2xl flex-col gap-12 px-6 py-12 md:px-16 2xl:px-32 2xl:py-16">
      <ArticleStat
        totalArticles={responseArticle?.totalItems}
        totalComments={totalComments}
        totalAddons={totalAddons}
      />
      <span className="flex items-center">
        <span className="pr-6 text-4xl"></span>
        <span className="h-px flex-1 bg-black"></span>
      </span>

      {responseArticle?.articles.length ? (
        <>
          <div className="grid w-full grid-flow-row gap-x-0 gap-y-6 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
            {responseArticle.articles.map((article) => (
              <PostImageCard key={article.id} article={article} />
            ))}
          </div>
        </>
      ) : (
        <ProfileLoader />
      )}
      <div className="flex justify-between">
        <Button size="large">Ver más</Button>
      </div>
      <Pagination
        totalPages={responseArticle?.totalPages}
        currentPage={responseArticle?.currentPage}
        onPageChange={onPageChange}
        totalItems={responseArticle?.totalItems}
      />
      <span className="flex items-center">
        <span className="pr-6 text-4xl"></span>
        <span className="h-px flex-1 bg-black"></span>
      </span>
    </section>
  );
};
