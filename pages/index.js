import './index.scss';
import '@/style/global.scss';
import React from 'react';
import Head from 'next/head';
import Layout from '@/template/Layout';
import StoreProvider from '@/contexts/StoreContext';

const Home = () => (
  <StoreProvider>
    <Layout className="home">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  </StoreProvider>
);

export default Home;
