import Link from "next/link";

const Footer = () => {
  const footerLinks = [
    { page: "Home", href: "/" },
    { page: "About", href: "#" },
  ];

  return (
    <footer className="bg-black text-center text-lg font-bold text-white">
      <div className="flex justify-center py-3">
        {footerLinks.map((element, id) => (
          <div className="mx-5">
            <Link key={id} href={element.href}>
              {element.page}
            </Link>
          </div>
        ))}
      </div>
      <div className="pb-2 text-xs">Copyright &copy; 2022. Blog</div>
    </footer>
  );
};

export default Footer;
