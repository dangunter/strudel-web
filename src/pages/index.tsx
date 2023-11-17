import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Content from "../content/home.mdx";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Content />
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />

export default IndexPage