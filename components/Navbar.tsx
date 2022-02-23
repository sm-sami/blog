import Link from "next/link";

const Navbar = () => {
  const navLinks = [
    { page: "Home", href: "/" },
    { page: "About", href: "#" },
  ];

  const NavElements = () => {
    return (
      <div className="flex items-center">
        <div className="hidden sm:flex">
          {navLinks.map((element, id) => (
            <div className="mx-3 text-xl font-bold">
              <Link key={id} href={element.href}>
                {element.page}
              </Link>
            </div>
          ))}
        </div>
        <div className="ml-5 rounded-3xl bg-black px-4 py-2 text-base font-medium text-white">
          <Link href="#">Start Reading</Link>
        </div>
      </div>
    );
  };

  return (
    <nav>
      <div className="mx-10 my-8 flex items-center justify-between lg:mx-40">
        <div className="font-logo text-2xl font-bold">
          <Link href="/">Blog</Link>
        </div>
        <NavElements />
      </div>
    </nav>
  );
};

export default Navbar;
