"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/portfolio", title: "Portfolio" },
    { path: "/contact", title: "Contact" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="container mx-auto">
      <header>
        <div className="flex justify-between items-center pt-3 pb-2">
          <div>
            <Link href="/home-page">
              <p className="text-3xl sm:text-2xl lg:text-4xl lg:pl-7 sm:pl-0 font-semibold text-slate-400">
                Abdulatif
              </p>
            </Link>
          </div>

          <div className="hidden md:flex gap-8 pr-[150px] pt-[8px] text-slate-400 font-medium">
            {links.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className={`w-[80px] flex items-center md:pl-[10px] rounded-[3px] h-[33px] transition-colors duration-300 ${
                  pathname === item.path
                    ? "bg-slate-700 text-white"
                    : "text-slate-400"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="md:hidden ">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              <HiOutlineMenu className="text-3xl text-slate-400 mt-[15px]" />
            </button>
          </div>
        </div>

        <div
          className={`fixed inset-y-0 left-0 w-[70%] bg-slate-800  p-6 transform transition-transform duration-300 ease-in-out md:hidden z-50 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end">
            <p className="text-slate-300 text-[25px] font-semibold pr-[90px]">
              Abdulatif
            </p>
            <button onClick={toggleMenu} aria-label="Close Menu">
              <HiX className="text-3xl text-slate-400" />
            </button>
            <hr />
          </div>
          <hr className="lg:hidden mt-[10px] opacity-20" />

          <div className="flex flex-col gap-4 mt-6 text-white font-medium">
            {links.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className={`block p-3 rounded-md transition-colors duration-300 ${
                  pathname === item.path
                    ? "bg-slate-700 text-white"
                    : "text-slate-400"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
