import Link from "next/link";

interface ArticleProps {
  id: number;
  author: string;
  blog?: string;
  title: string;
  children: React.ReactNode;
  date: string;
}

const ArticleCard = ({
  id,
  author,
  blog,
  title,
  children,
  date,
}: ArticleProps) => {
  return (
    <div className="flex gap-4">
      <div className="flex max-w-lg flex-col">
        <div className="text-sm font-bold">
          {blog ? (
            <div>
              <Link href="#">{author}</Link>{" "}
              <span className="font-normal text-gray-500">in</span>{" "}
              <Link href="#">{blog}</Link>
            </div>
          ) : (
            <Link href="#">{author}</Link>
          )}
        </div>
        <div className="text-3xl font-bold">
          <Link key={id} href="#">
            {title}
          </Link>
        </div>
        <p className="text-base text-gray-500">{children}</p>
        <div className="mt-2 text-xs text-gray-500">{date}</div>
      </div>
      <img
        src="/placeholder.jpg"
        alt="placeholder image"
        className="h-28 w-48 rounded-lg object-contain"
      />
    </div>
  );
};

export default ArticleCard;
