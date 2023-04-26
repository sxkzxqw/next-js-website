import React, { FC } from 'react';
import Heading from '../../components/Heading';
import Head from 'next/head';
import Link from 'next/link';
import { postType } from '../../../types';

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            posts: data
        }
    }
}

type postsProps = {
    posts: [postType]
}

const posts: FC<postsProps> = ({ posts }) => {
    return (
        <>
            <Head>
                <title>posts</title>
            </Head>
            <Heading text='posts' />
            <ul style={{ listStyle: 'none' }}>
                {posts && posts.map((post) => {
                    return (
                        <li key={post.id}>
                            <Link href={`/posts/${post.id}`}>
                                {post.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    );
};

export default posts;