import { useEffect } from "react";
import { useArticle } from "../context/ArticleContext";
import { ProfileLoader } from "../components/profileLoader/ProfileLoader";
import { Link } from "react-router-dom";
import { LIMIT } from "../types/Limit";

export const HomePage = () => {
  const { fetchArticles, responseArticle } = useArticle();
  const size = LIMIT.DEFAULT_HOME;
  const page = 0;
  useEffect(() => {
    fetchArticles(page, size);
  }, []);
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl dark:text-darkGray">
              Encuentra todos los artículos sobre tus temas favoritos.
            </h2>

            <p className="mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>
          </header>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex rounded border border-gray-100">
              <button className="inline-flex size-10 items-center justify-center border-e text-gray-600 transition hover:bg-gray-50 hover:text-gray-700 dark:text-darkGray">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                  />
                </svg>
              </button>

              <button className="inline-flex size-10 items-center justify-center text-gray-600 transition hover:bg-gray-50 hover:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </button>
            </div>

            <div>
              <label htmlFor="SortBy" className="sr-only ">
                Ordenar por
              </label>

              <select
                id="SortBy"
                className="h-10 rounded border-gray-300 text-sm"
              >
                <option>Ordenar por</option>
                <option value="Title, DESC">Title, DESC</option>
                <option value="Title, ASC">Title, ASC</option>
                <option value="Price, DESC">Price, DESC</option>
                <option value="Price, ASC">Price, ASC</option>
              </select>
            </div>
          </div>

          {responseArticle?.articles.length ? (
            <>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 dark:text-darkGray">
                {responseArticle.articles.map((article) => (
                  <li key={article.id} className="dark:bg-evil">
                    <Link
                      to={`/article/${article.id}`}
                      className="group block overflow-hidden "
                    >
                      <img
                        src={article.articleImage}
                        alt=""
                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                      />

                      <div className="relative bg-white pt-3 dark:bg-evil ">
                        <h3 className="text-xs dark:text-darkGray group-hover:underline group-hover:underline-offset-4">
                          {article.title}
                        </h3>

                        <p className="mt-2 dark:text-darkGray">
                          <span className="sr-only">
                            {" "}
                            {article.user.userName}{" "}
                          </span>

                          <span className="tracking-wider dark:text-darkGray">
                            {" "}
                            {article.user.userName}{" "}
                          </span>
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <ProfileLoader />
            </>
          )}
        </div>
        <hr />
      </section>
    </>
  );
};
