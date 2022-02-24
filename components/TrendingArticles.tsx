import ArticleCard from "./ArticleCard";

const TrendingArticles = () => {
  return (
    <div className="">
      <h1 className="text-xs font-bold">TRENDING RIGHT NOW</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, id) => (
          <div key={id} className="flex flex-row items-start">
            <div className="w-28 pt-3 text-center text-3xl font-bold text-gray-300 lg:pt-5">
              0{id + 1}
            </div>
            <ArticleCard id={id} title="Lorem ipsum dolor sit">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              consectetur lacus non dictum egestas.
            </ArticleCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingArticles;
