interface ArticleProps {
  id: number;
  title: string;
  children: React.ReactNode;
}

const ArticleCard = ({ id, title, children }: ArticleProps) => {
  return (
    <div className="p-3 lg:p-5">
      <div className="text-2xl font-bold">{title}</div>
      <p className="text-base text-gray-500">{children}</p>
    </div>
  );
};

export default ArticleCard;
