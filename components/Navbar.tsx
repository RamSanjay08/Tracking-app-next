import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const Navbar = () => {
  const Navigation = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Studio", href: "/studio" },
  ];

  return (
    <nav className="w-full bg-white/70 shadow-md p-1 px-6 py-4">
      <div className="flex justify-between items-center w-[80%] mx-auto">
        <Logo title="Blogger" className="text-black" />
        <div className="flex gap-8 ">
        {Navigation.map(({ title, href }) => (
          <div key={title} className="hidden md:block">
            <Link href={href}>
              <p className="font-medium text-lg hover:text-red-600 duration-300 transition-all">{title}</p>
            </Link>
          </div>
        ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
