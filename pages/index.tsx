import type { NextPage } from "next";
import TrendingArticles from "../components/TrendingArticles";
import Articles from "../components/Articles";

const Home: NextPage = () => {
  return (
    <>
      <div className="mx-10 my-10 lg:mx-40 lg:my-10">
        <div className="flex flex-col gap-2 text-2xl">
          <span className="w-2/3 text-5xl font-bold lg:text-7xl">
            A place to read anything and everything
          </span>
          From amazing writers around the world
        </div>
        <div className="mt-5">
          <TrendingArticles />
        </div>
        <div className="mt-10 flex justify-center">
          <Articles />
        </div>
      </div>
    </>
  );
};

export default Home;
