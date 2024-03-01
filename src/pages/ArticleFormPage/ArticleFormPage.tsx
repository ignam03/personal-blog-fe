import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useArticle } from "../../context/ArticleContext";
import { useNavigate, useParams } from "react-router-dom";

type IArticle = {
  title: string;
  description: string;
};

export const ArticlesFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();
  const { saveArticle, fetchArticle, article, updateArticle } = useArticle();

  useEffect(() => {
    const loadArticle = async () => {
      if (params.id) {
        const article = await fetchArticle(Number(params.id));
        setValue("title", article?.title);
        setValue("description", article?.description);
      }
    };
    loadArticle();
  }, []);

  const onSubmit: SubmitHandler<IArticle> = (data) => {
    if (params.id) {
      updateArticle(Number(params.id), data);
      navigate("/articles");
    } else {
      saveArticle(data);
      navigate("/articles");
    }
  };
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          {params.id ? (
            <>
              <div className="">
                <label htmlFor="">Article title</label>
                <input
                  type="text"
                  {...register("title", { required: true, minLength: 10 })}
                  placeholder={article?.title}
                  className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                  autoFocus
                />
                {errors.title && (
                  <p className="bg-red-400 p-2 text-white-500">
                    title is required
                  </p>
                )}
              </div>
              <div className="">
                <label htmlFor="">Article Description</label>
                <textarea
                  {...register("description", {
                    required: true,
                    maxLength: 200,
                  })}
                  rows="3"
                  placeholder={article?.description}
                  className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                ></textarea>
                {errors.description && (
                  <p className="bg-red-400 p-2 text-white-500">
                    description is required
                  </p>
                )}
              </div>
              <button
                className="w-full bg-green-700 text-white px-4 py-2 rounded-md my-2"
                type="submit"
              >
                Edit Article
              </button>
            </>
          ) : (
            <>
              <div className="">
                <label htmlFor="">Article title</label>
                <input
                  type="text"
                  {...register("title", { required: true, minLength: 10 })}
                  placeholder="title"
                  className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                  autoFocus
                />
                {errors.title && (
                  <p className="bg-red-400 p-2 text-white-500">
                    title is required
                  </p>
                )}
              </div>
              <div className="">
                <label htmlFor="">Article Description</label>
                <textarea
                  {...register("description", {
                    required: true,
                    maxLength: 200,
                  })}
                  rows="3"
                  placeholder="description"
                  className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                ></textarea>
                {errors.description && (
                  <p className="bg-red-400 p-2 text-white-500">
                    description is required
                  </p>
                )}
              </div>
              <button
                className="w-full bg-green-700 text-white px-4 py-2 rounded-md my-2"
                type="submit"
              >
                create Article
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};
