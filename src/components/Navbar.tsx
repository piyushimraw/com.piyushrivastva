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
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  const onLinkClick = () => {
    setActive("");
    window.scrollTo(0, 0);
  };

  const onMenuItemClick = (title: string) => {
    setOpen(false);
    setActive(title);
  };

  useEffect(() => {
    setActive(window.location.hash.slice(1));
  }, []);

  console.log(active);

  return (
    <nav
      className={`${styles.paddingX} flex items-center py-5 fixed top-0 z-20 bg-primary w-full`}
    >
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
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
            className="object-contain w-9 h-9 "
          />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Piyush
          </p>
        </Link>
        <ul className="flex-row hidden gap-10 list-none sm:flex">
          {navLinks.map((link, index) => (
            <li
              className={clsx(
                "hover:text-white",
                link.title.toLowerCase() === active.toLowerCase()
                  ? "text-white"
                  : "text-secondary",
                "text-[18px]",
                "font-medium",
                "cursor-pointer"
              )}
              onClick={() => onMenuItemClick(link.title)}
              key={link.id}
            >
              <Link
                onClick={() => {
                  onMenuItemClick(link.title);
                }}
                href={`#${link.id}`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="flex items-center justify-end flex-1 sm:hidden"
          onClick={toggleMenu}
        >
          <Image src={open ? close : menu} alt="menu" width={30} height={30} />
          <div
            className={clsx(
              open ? "flex" : "hidden",
              "mx-4",
              "my-2",
              "min-w-[148px]",
              "z-10",
              "rounded-xl",
              "p-4",
              "black-gradient",
              "absolute",
              "top-20",
              "right-0"
            )}
          >
            <ul className="flex flex-col items-start justify-end gap-4 list-none sm:flex">
              {navLinks.map((link, index) => (
                <li
                  className={clsx(
                    "hover:text-white",
                    link.title.toLowerCase() === active.toLowerCase()
                      ? "text-white"
                      : "text-secondary",
                    "text-[16px]",
                    "font-poppins",
                    "font-medium",
                    "cursor-pointer"
                  )}
                  key={"mobile" + link.id}
                  onClick={() => {
                    onMenuItemClick(link.title);
                  }}
                >
                  <Link
                    onClick={() => {
                      onMenuItemClick(link.title);
                    }}
                    href={`#${link.id}`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
