import React from 'react';
import Heading from '../components/Heading';
import styles from '../styles/Home.module.scss'
import Head from 'next/head';

const index = () => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>home</title>
      </Head>
      <Heading tag='h1' text='Hello world' />
    </div>
  );
};

export default index;