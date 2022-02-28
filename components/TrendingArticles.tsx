import Link from "next/link";
import { ArticleSchema, ArticleProps } from "./Articles";

const TrendingArticles = ({ articles }: ArticleProps) => {
  interface TrendingArticleCardProps {
    id: number;
    author: string;
    blog?: string;
    title: string;
    date: string;
  }

  const TrendingArticleCard = ({
    id,
    author,
    blog,
    title,
    date,
  }: TrendingArticleCardProps) => {
    return (
      <div className="flex gap-x-10">
        <div className="max-w-[20px] select-none text-3xl font-bold text-gray-300">
          0{id}
        </div>
        <div className="flex flex-col">
          <div>
            {blog ? (
              <div className="text-xs font-bold">
                <Link href="#">{author}</Link>{" "}
                <span className="font-normal text-gray-500">in</span>{" "}
                <Link href="#">{blog}</Link>
              </div>
            ) : (
              <Link href="#">{author}</Link>
            )}
          </div>
          <div className="text-lg font-bold leading-tight">
            <Link key={id} href="#">
              {title}
            </Link>
          </div>
          <div className="mt-1 text-xs text-gray-500">{date}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xs font-bold">TRENDING RIGHT NOW</h1>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {articles.slice(0, 6).map((article: ArticleSchema, idx: number) => (
          <div key={idx}>
            <TrendingArticleCard
              id={article.id}
              author="John Doe"
              blog="Designr"
              title={article.title}
              date="Feb 27"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingArticles;
