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
        <div className="text-xs font-bold sm:text-sm">
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
        <div className="text-lg font-bold sm:text-3xl">
          <Link href="#">{title}</Link>
        </div>
        <p className="text-sm text-gray-500 sm:text-base">{children}</p>
        <div className="mt-2 text-xs text-gray-500">{date}</div>
      </div>
      <img
        src="/placeholder.jpg"
        alt="placeholder image"
        className="h-20 w-28 rounded-xl object-contain sm:h-28 sm:w-48 md:rounded-lg"
      />
    </div>
  );
};

export default ArticleCard;
