import { PostDetails } from "../postDetails/PostDetails";
import { useArticle } from "../../context/ArticleContext";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../button/button";
import { useNotification } from "../../context/NotificationContext";
import { useAuth } from "../../context/AuthContext";

type IArticleType = {
  id?: number;
  title: string;
  description: string;
  articleImage?: string;
};

export const PostImageCard = ({ article }: { article: IArticleType }) => {
  const { deleteArticle } = useArticle();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const handleDelete = async (articleId: number) => {
    await deleteArticle(articleId);
  };
  return (
    <div className="flex max-w-[600px] flex-col items-start gap-6 overflow-hidden">
      <div className="flex h-[280px] w-full items-center justify-center overflow-hidden rounded-3xl bg-slate-100 md:h-[310px] center">
        <img
          src={article.articleImage}
          alt=""
          className={"w-full h-full object-cover"}
        />
      </div>
      <div className="flex flex-col items-start gap-3">
        <PostDetails />
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold">{article.title}</h3>
          <h4 className="max-w-[90%] text-sm leading-tight text-slate-400">
            {article.description}
          </h4>
        </div>
        <Button
          onClick={() => {
            navigate(`/article/${article.id}`);
          }}
          size="large"
          variant="text"
          className="p-0"
        >
          Read More
        </Button>
        {isAuthenticated && (
          <div className="">
            <button
              className="bg-red-500 hover:bg-red-700 mx-2 text-white font-bold py-2 px-4 rounded-lg"
              onClick={() => {
                handleDelete(article.id!);
              }}
            >
              Delete
            </button>
            <Link
              to={`/edit-article/${article.id}`}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
            >
              Edit
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
