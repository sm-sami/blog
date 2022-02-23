import Link from "next/link";

interface ArticleProps {
  id: number;
  title: string;
  children: React.ReactNode;
}

const ArticleCard = ({ id, title, children }: ArticleProps) => {
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

export default ArticleCard;
