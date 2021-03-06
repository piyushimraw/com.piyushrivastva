import React from 'react';
import Link from 'next/link';

import { StyledMobileNav } from '../styles/nav.styles';

const MobileNav = () => {
  return (
    <StyledMobileNav>
      <div className="mobile-nav-container">
        <ul className="linkList">
          <li className="listItem">
            <Link href="/">
              <a className="link">Home</a>
            </Link>
          </li>

          <li className="listItem">
            <Link href="/about">
              <a className="link">About</a>
            </Link>
          </li>
        </ul>
      </div>
    </StyledMobileNav>
  );
};

export default MobileNav;
