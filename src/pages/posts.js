import React from 'react';
import Heading from '../components/Heading';
import Head from 'next/head';

const posts = () => {
    return (
        <>
            <Head>
                <title>posts</title>
            </Head>
            <Heading text='Posts list:' />
        </>
    );
};

export default posts;