import Head from 'next/head';
import type { NextPage } from 'next';

import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Main from '../components/Main';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>JpegPon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" sizes="16x16" href="/favicon-16.png" />
      </Head>
      <Header />
      <Main />
    </div>
  );
};

export default Home;
