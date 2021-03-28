import React, { useContext } from 'react';
import Link from 'next/link';

import { NavSection, StyledHamburger } from './styles/nav.styles';
import Logo from './logo';
import { Container } from './container';
import SiteConfig from '../config/index.json';
import { MenuContext } from '.';

const Nav = () => {
  const menuContext = useContext(MenuContext);

  const { toggleMenuOpen, menuOpen } = menuContext;

  return (
    <NavSection>
      <Container>
        <nav className="navWrapper">
          <div className="navLeft">
            <Link href="/">
              <a className="no-underline">
                <Logo />
                <span>{SiteConfig.author.name}</span>
              </a>
            </Link>
          </div>

          <div className="navRight">
            <StyledHamburger
              menuOpen={menuOpen}
              onClick={toggleMenuOpen}
            ></StyledHamburger>

            <ul className="navLinkList">
              <li className="navLinkItem">
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
            </ul>
            <ul className="navLinkList">
              <li className="navLinkItem">
                <Link href="/articles">
                  <a>Articles</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    </NavSection>
  );
};

export default Nav;
