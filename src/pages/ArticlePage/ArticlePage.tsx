import { useEffect } from "react";
import { useArticle } from "../../context/ArticleContext";
import { useParams } from "react-router-dom";
import { CommentBox } from "../../components/commentBox/CommentBox";
import { useComment } from "../../context/CommentContext";
import { CommentCard } from "../../components/commentCard/CommentCard";
import { CommentType } from "../../types/commentType";

export const ArticlePage = () => {
  const { fetchArticle, article } = useArticle();
  const { fetchCommentsByArticle, comments } = useComment();
  const params = useParams();
  useEffect(() => {
    fetchArticle(Number(params.id));
    fetchCommentsByArticle(Number(params.id));
  }, [params]);
  return (
    <>
      {article ? (
        <section>
          <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                <div className="relative z-10 lg:py-16">
                  <div className="relative h-64 sm:h-80 lg:h-full">
                    <img
                      alt=""
                      src={article?.articleImage}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="relative flex items-center bg-gray-100">
                  <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

                  <div className="p-8 sm:p-16 lg:p-24">
                    <h2 className="text-2xl font-bold sm:text-3xl">
                      {article?.title}
                    </h2>

                    <p className="mt-4 text-gray-600">{article?.description}</p>

                    <a
                      href="#"
                      className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                    >
                      Get in Touch
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <span className="flex items-center">
            <span className="h-px flex-1 bg-black"></span>
            <span className="shrink-0 px-6">Comments</span>
            <span className="h-px flex-1 bg-black"></span>
          </span>
          <CommentBox />
          {comments?.map((comment: CommentType) => (
            <CommentCard comment={comment} />
          ))}
        </section>
      ) : (
        <h1>Not found</h1>
      )}
    </>
  );
};
