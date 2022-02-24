import Link from "next/link";

const TrendingArticles = () => {
  interface ArticleProps {
    id: number;
    title: string;
    children: React.ReactNode;
  }

  const TrendingArticleCard = ({ id, title, children }: ArticleProps) => {
    return (
      <div className="m-3 lg:m-5">
        <div className="text-2xl font-bold">
          <Link key={id} href="#">
            {title}
          </Link>
        </div>
        <p className="text-base text-gray-500">{children}</p>
      </div>
    );
  };

  return (
    <div className="">
      <h1 className="text-xs font-bold">TRENDING RIGHT NOW</h1>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3">
        {[...Array(6)].map((_, id) => (
          <div key={id} className="flex flex-row items-start">
            <div className="w-28 select-none pt-3 text-center text-3xl font-bold text-gray-300 lg:pt-5">
              0{id + 1}
            </div>
            <TrendingArticleCard id={id} title="Lorem ipsum dolor sit">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              consectetur lacus non dictum egestas.
            </TrendingArticleCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingArticles;
