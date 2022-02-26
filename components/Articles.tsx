import { ArticleCard } from ".";

const Articles = () => {
  return (
    <div className="flex flex-col gap-10">
      {[...Array(10)].map((_, id) => (
        <ArticleCard
          key={id}
          id={id}
          author="John Doe"
          blog="Designr"
          title="Lorem ipsum dolor sit"
          date="Feb 24"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </ArticleCard>
      ))}
    </div>
  );
};

export default Articles;
