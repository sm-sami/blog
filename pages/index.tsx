import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="mx-10 my-10 lg:mx-40 lg:my-20">
        <p className="w-2/3 text-2xl">
          <span className="text-5xl font-bold lg:text-7xl">
            A place to read anything and everything
          </span>
          <br />
          From amazing writers around the world
        </p>
      </div>
    </>
  );
};

export default Home;
