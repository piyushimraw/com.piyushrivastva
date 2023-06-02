import React from "react";
import Link from "next/link";

import { StyledMobileNav } from "../styles/nav.styles";

const MobileNav = () => {
  return (
    <StyledMobileNav>
      <div className="mobile-nav-container">
        <ul className="linkList">
          <li className="listItem">
            <Link href="/">
              <span className="link">Home</span>
            </Link>
          </li>

          <li className="listItem">
            <Link href="/about">
              <span className="link">About</span>
            </Link>
          </li>
          <li className="listItem">
            <Link href="/articles">
              <span className="link">Articles</span>
            </Link>
          </li>
        </ul>
      </div>
    </StyledMobileNav>
  );
};

export default MobileNav;
