import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useArticle } from "../../context/ArticleContext";
import { useNavigate, useParams } from "react-router-dom";

interface IArticle {
  id: number;
  title: string;
  description: string;
  articleImage?: string;
  comments?: [];
  user: any;
}

export const ArticlesFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IArticle>();
  const navigate = useNavigate();
  const params = useParams();
  const { saveArticle, fetchArticle, article, updateArticle } = useArticle();

  useEffect(() => {
    const loadArticle = async () => {
      if (params.id) {
        await fetchArticle(Number(params.id));
        setValue("title", article?.title ?? "");
        setValue("description", article?.description ?? "");
        setValue("articleImage", article?.articleImage ?? "");
      }
    };
    loadArticle();
  }, []);

  const onSubmit: SubmitHandler<IArticle> = (data) => {
    if (params.id) {
      updateArticle(Number(params.id), data);
      navigate("/articles");
    } else {
      console.log("data", data);
      saveArticle(data);
      navigate("/articles");
    }
  };
  return (
    <>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form
                action="#"
                className="space-y-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                {params.id ? (
                  <>
                    <div>
                      <label className="sr-only">Edit Title</label>
                      <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder={article?.title}
                        type="text"
                        {...register("title", {
                          required: true,
                          minLength: 10,
                        })}
                      />
                      {errors.title && (
                        <p className="bg-red-400 p-2 text-white-500 text-center rounded-lg">
                          title is required
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="sr-only">Article Image</label>
                      <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="image"
                        type="text"
                        {...register("articleImage")}
                      />
                    </div>
                    <div>
                      <label className="sr-only">Description</label>
                      <textarea
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        rows={8}
                        {...register("description", {
                          required: true,
                          maxLength: 800,
                        })}
                        placeholder={article?.description}
                      ></textarea>
                      {errors.description && (
                        <p className="bg-red-400 p-2 text-white-500 rounded-lg text-center">
                          description is required
                        </p>
                      )}
                    </div>

                    <div className="mt-4">
                      <button
                        type="submit"
                        className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                      >
                        Edit Article
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="sr-only">Title</label>
                      <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Title"
                        type="text"
                        {...register("title", {
                          required: true,
                          minLength: 10,
                        })}
                      />
                      {errors.title && (
                        <p className="bg-red-400 p-2 text-white-500 rounded-lg text-center">
                          title is required
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="sr-only">Article Image</label>
                      <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="image"
                        type="text"
                        {...register("articleImage", {
                          required: true,
                        })}
                      />
                      {errors.articleImage && (
                        <p className="bg-red-400 p-2 text-white-500 rounded-lg text-center">
                          image is required
                        </p>
                      )}
                    </div>

                    {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only">Email</label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only">Phone</label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <label
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                      tabIndex={0}
                    >
                      <input
                        className="sr-only"
                        id="Option1"
                        type="radio"
                        tabIndex={-1}
                        name="option"
                      />

                      <span className="text-sm"> Option 1 </span>
                    </label>
                  </div>

                  <div>
                    <label
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                      tabIndex={0}
                    >
                      <input
                        className="sr-only"
                        id="Option2"
                        type="radio"
                        tabIndex={-1}
                        name="option"
                      />

                      <span className="text-sm"> Option 2 </span>
                    </label>
                  </div>

                  <div>
                    <label
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                      tabIndex={0}
                    >
                      <input
                        className="sr-only"
                        id="Option3"
                        type="radio"
                        tabIndex={-1}
                        name="option"
                      />

                      <span className="text-sm"> Option 3 </span>
                    </label>
                  </div>
                </div> */}

                    <div>
                      <label className="sr-only">Description</label>

                      <textarea
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Description"
                        rows={8}
                        {...register("description", {
                          required: true,
                          maxLength: 600,
                        })}
                      ></textarea>
                      {errors.description && (
                        <p className="bg-red-400 p-2 text-white-500 rounded-lg text-center">
                          description is required
                        </p>
                      )}
                    </div>

                    <div className="mt-4">
                      <button
                        type="submit"
                        className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                      >
                        create Article
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
