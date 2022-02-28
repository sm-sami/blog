import type { NextPage } from "next";
import { TrendingArticles, Articles } from "../components";

const Home: NextPage = ({ articles }: any) => {
  return (
    <>
      <div className="mx-8 my-10 lg:mx-40 lg:my-10">
        <div className="flex flex-col gap-2 text-2xl">
          <span className="w-2/3 text-5xl font-bold lg:text-7xl">
            A place to read anything and everything
          </span>
          From amazing writers around the world
        </div>
        <div className="mt-5">
          <TrendingArticles articles={articles} />
        </div>
        <div className="mt-10 flex justify-center 2xl:justify-start">
          <Articles articles={articles} />
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

export default Home;
