import Head from 'next/head';
import React, { FC } from 'react';
import PostInfo from '../../components/PostInfo';
import { GetStaticPaths, GetStaticProps } from 'next';
import { postType } from '../../../types';

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
    const data = await response.json();

    const paths = data.map(({ id }: any) => ({
        params: { id: id.toString() }
    }));

    return {
        paths,
        fallback: false,
    }
};

export const getStaticProps: GetStaticProps = async (context) => {
    const { id }: any = context.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { post: data },
    }
};

type postProps = {
    post: postType
}

const Post: FC<postProps> = ({ post }) => {
    return (
        <>
            <Head>
                <title>post page</title>
            </Head>
            <PostInfo post={post} />
        </>
    );
};

export default Post;