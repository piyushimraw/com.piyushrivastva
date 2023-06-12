"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { styles } from "@/constant/styles";
import { navLinks } from "@/constant/content";
import { logo, menu, close } from "../assets";
import Image from "next/image";

const Navbar = () => {
  const [active, setActive] = useState("");
  const onLinkClick = () => {
    setActive("");
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className={`${styles.paddingX} flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
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
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
