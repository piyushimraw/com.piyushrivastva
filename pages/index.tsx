import React, { FC } from 'react';
import { useRouter } from 'next/router';

import { Layout } from '../components';
import { StyledIndexPage } from '../components/styles/home.styles';
import { getContentList } from '../lib/content';
import ExperimentsSection from '../components/experiments';

/**
 * Index page `/index`
 */

//@ts-ignore
const Index: FC = ({ selectedWorks }) => {
  const { pathname } = useRouter();
  return (
    <Layout pathname={pathname} pageTitle="piyushrivastva">
      <StyledIndexPage>
        <ExperimentsSection />
      </StyledIndexPage>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const works = await getContentList('work');
  const selectedWorks = works.filter((work) => work.selectedWork);

  return {
    props: {
      selectedWorks,
    },
  };
};

export default Index;
