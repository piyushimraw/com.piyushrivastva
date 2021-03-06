import React from 'react';
import {
  StyledFooterSection,
  GitHubIcon,
  CodepenIcon,
  TwitterIcon,
} from './styles/footer.styles';
import { Container } from './container';

const Footer = () => (
  <StyledFooterSection>
    <Container className="footer-container">
      <ul className="footerSocialLinks">
        <li className="footerSocialLink">
          <a
            className="footerLink"
            href="https://github.com/piyushimraw"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GitHubIcon />
          </a>
        </li>

        <li className="footerSocialLink">
          <a
            className="footerLink"
            href="https://twitter.com/piyushrivastva"
            target="_blank"
            rel="noreferrer noopener"
          >
            <TwitterIcon />
          </a>
        </li>
      </ul>
    </Container>

    <Container>
      <p className="about-site">
        Built by{' '}
        <a
          href="https://twitter.com/piyushrivastva"
          target="_blank"
          rel="noopenner norefferer"
        >
          @piyushrivastva
        </a>
        . With NextJS, TypeScript Emotion and Vercel.
      </p>
    </Container>
  </StyledFooterSection>
);

export default Footer;
