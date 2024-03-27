export const ArticleStat = ({
  totalArticles,
  totalComments,
  totalAddons,
}: {
  totalArticles: number;
  totalComments: number;
  totalAddons: number;
}) => {
  return (
    <>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold dark:text-darkGray sm:text-4xl">
              Trusted by eCommerce Businesses
            </h2>

            <p className="mt-4 text-gray-500 sm:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              dolores laborum labore provident impedit esse recusandae facere
              libero harum sequi.
            </p>
          </div>

          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Total Articles
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  {totalArticles}
                </dd>
              </div>

              <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Total Comments
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  {totalComments}
                </dd>
              </div>

              <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Total Addons
                </dt>

                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  {totalAddons}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
};
