import { ArticleCard } from ".";

export interface ArticleSchema {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface ArticleProps {
  articles: ArticleSchema[];
}

const Articles = ({ articles }: ArticleProps) => {
  return (
    <div className="flex flex-col gap-10">
      {articles.map((article: ArticleSchema, idx: number) => (
        <ArticleCard
          key={idx}
          id={article.id}
          author="John Doe"
          blog="Designr"
          title={article.title}
          date="Feb 24"
        >
          {article.body}
        </ArticleCard>
      ))}
    </div>
  );
};

export default Articles;
