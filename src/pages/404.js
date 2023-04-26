import React, { useEffect } from 'react';
import Heading from '../components/Heading';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Error = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000);
    }, [router])

    return (
        <>
            <Head>
                <title>error</title>
            </Head>
            <Heading text='404! Something went wrong...' />
        </>
    );
};

export default Error;