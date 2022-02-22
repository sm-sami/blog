import type { NextPage } from "next";
import ArticleCard from "../components/ArticleCard";
import LatestArticles from "../components/LatestArticles";

const Home: NextPage = () => {
  return (
    <>
      <div className="mx-10 my-10 lg:mx-40 lg:my-20">
        <div className="flex flex-col text-2xl">
          <span className="w-2/3 text-5xl font-bold lg:text-7xl">
            A place to read anything and everything
          </span>
          <br />
          From amazing writers around the world
        </div>
        <div className="mt-5">
          <LatestArticles />
        </div>
      </div>
    </>
  );
};

export default Home;
