import Link from "next/link";

const Navbar = () => {
  const navLinks = [
    { page: "Home", href: "/" },
    { page: "Our Story", href: "#" },
  ];

  const NavElements = () => {
    return (
      <div className="flex items-center">
        <div className="hidden md:flex">
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
      <div className="mx-12 my-8 flex items-center justify-between lg:mx-40">
        <Link href="/">
          <div className="font-logo text-2xl">Blog </div>
        </Link>
        <NavElements />
      </div>
    </nav>
  );
};

export default Navbar;