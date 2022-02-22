import ArticleCard from "./ArticleCard";

const LatestArticles = () => {
  return (
    <div className="">
      <h1 className="font-logo text-sm">Latest Posts</h1>
      <div className="grid lg:grid-cols-3">
        <ArticleCard id={1} title="Lorem ipsum dolor sit">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          consectetur lacus non dictum egestas.
        </ArticleCard>
        <ArticleCard id={2} title="Lorem ipsum dolor sit">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          consectetur lacus non dictum egestas.
        </ArticleCard>
        <ArticleCard id={3} title="Lorem ipsum dolor sit">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          consectetur lacus non dictum egestas.
        </ArticleCard>
        <ArticleCard id={4} title="Lorem ipsum dolor sit">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          consectetur lacus non dictum egestas.
        </ArticleCard>
        <ArticleCard id={5} title="Lorem ipsum dolor sit">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          consectetur lacus non dictum egestas.
        </ArticleCard>
        <ArticleCard id={6} title="Lorem ipsum dolor sit">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          consectetur lacus non dictum egestas.
        </ArticleCard>
      </div>
    </div>
  );
};

export default LatestArticles;
