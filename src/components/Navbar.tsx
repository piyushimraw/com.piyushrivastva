"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { styles } from "@/constant/styles";
import { navLinks } from "@/constant/content";
import { logo, menu, close } from "../assets";
import Image from "next/image";
import clsx from "clsx";

const Navbar = () => {
  const [active, setActive] = useState("");
  const onLinkClick = () => {
    setActive("");
    window.scrollTo(0, 0);
  };

  const onMenuClick = (title: string) => {
    setActive(title);
  };

  return (
    <nav
      className={`${styles.paddingX} flex items-center py-5 fixed top-0 z-20 bg-primary w-full`}
    >
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
        <Link
          onClick={onLinkClick}
          href="/"
          className="flex items-center gap-2"
        >
          <Image
            src={logo}
            alt="logo"
            width={40}
            height={40}
            className="w-9 h-9 object-contain "
          />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Piyush
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link, index) => (
            <li
              className={clsx(
                "hover:text-white",
                link.title === active ? "text-white" : "text-secondary",
                "text-[18px]",
                "font-medium",
                "cursor-pointer"
              )}
              key={link.id}
            >
              <Link
                onClick={() => onMenuClick(link.title)}
                href={`#${link.id}`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image src={menu} alt="menu" width={30} height={30} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
