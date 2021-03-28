import React from 'react';
import { Layout, Container, Cards } from '../components';
import { useRouter } from 'next/router';
import { getContentList } from '../lib/content';

/**
 * Article page `/articles`
 */

const Articles = ({ articles }) => {
  const { pathname } = useRouter();
  const filteredArticles = articles.filter(
    (article) => article.slug !== 'test'
  );
  return (
    <Layout
      pathname={pathname}
      pageTitle="Articles"
      pageDescription="Articles and Essays about Frontend Web Development and software engineering"
    >
      <Container>
        <p className="page-intro">
          More long form articles and essays about new things I'm exploring and
          learning about...
        </p>

        <blockquote>
          Repository of things I learn and find interesting in Frontend Web
          Development and software engineering.
        </blockquote>
        <Cards data={filteredArticles} basePath="articles" />
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const articles = getContentList('articles');
  return {
    props: { articles },
  };
};

export default Articles;
