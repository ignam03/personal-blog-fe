import { Link } from "react-router-dom";
import { useArticle } from "../../context/ArticleContext";

type IArticleType = {
  id?: number;
  title: string;
  description: string;
};

export const ArticleCard = ({ article }: { article: IArticleType }) => {
  const { deleteArticle } = useArticle();
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">{article.title}</h1>
        <div className="flex gap-x-2 items-center">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              deleteArticle(article.id!);
            }}
          >
            Eliminar
          </button>
          <Link
            to={`/article/${article.id}`}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Editar
          </Link>
        </div>
      </div>
      <p className="text-slate-300">{article.description}</p>
      <p>{}</p>
    </div>
  );
};
