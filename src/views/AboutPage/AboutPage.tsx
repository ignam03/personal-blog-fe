import { Button } from "../../components/button/Button";

export const AboutPage = () => {
  return (
    <>
      <section className="m-auto grid w-full max-w-screen-2xl grid-flow-row flex-wrap items-center gap-x-0 gap-y-6 px-3 py-6 text-center md:gap-x-14 md:px-16 md:py-14 lg:grid-cols-2 lg:text-start 2xl:gap-x-24 2xl:px-28 2xl:py-20">
        <div className="flex w-full max-w-2xl items-center justify-center justify-self-end rounded-2xl bg-slate-50 py-20 md:py-32">
          <img
            src="https://www.tailframes.com/images/illustration.webp"
            alt=""
            width={183}
            height={345}
            className="h-[172px] w-[91px] md:h-[345px] md:w-[183px]"
          />
        </div>
        <div className="flex flex-col gap-6 justify-self-start md:gap-12">
          <div className="flex max-w-lg flex-col gap-6">
            <p className="text-sm font-semibold uppercase text-slate-500">
              Tailframes
            </p>
            <h3 className="text-4xl font-semibold text-slate-950 md:text-5xl">
              Copy & Paste.
              <br />
              It's that simple.
            </h3>
            <h4 className="text-lg font-normal tracking-tight text-slate-500">
              We've done it carefully and simply. The elements work well
              together to create stunning landings.
            </h4>
          </div>
          <div>
            <Button size="large">Get a Template</Button>
          </div>
        </div>
      </section>
    </>
  );
};
