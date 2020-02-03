import './index.scss';
import '@/style/global.scss';
import React from 'react';
import Head from 'next/head';
import Layout from '@/template/Layout';
import TopMovieSlider from '@/components/TopMovieSlider/TopMovieSlider';
import StoreProvider from '@/contexts/StoreContext';
import IsMobileProvider from '@/contexts/IsMobileContext';
import AllMovies from '@/components/AllMovies/AllMovies';

const Home = () => (
  <StoreProvider>
    <IsMobileProvider>
      <Layout className="home">
        <Head>
          <title>MovieFinder</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <TopMovieSlider />
        <AllMovies />
      </Layout>
    </IsMobileProvider>
  </StoreProvider>
);

export default Home;
