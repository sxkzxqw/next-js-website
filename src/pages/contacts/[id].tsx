import React, { FC } from 'react';
import Heading from '../../components/Heading';
import Head from 'next/head';
import ContactInfo from '../../components/ContactInfo';
import { GetServerSideProps } from "next";
import { contactType } from '../../../types';

type contactTypeProps = {
    contact: contactType,
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id }: any = context.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await response.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            contact: data
        }
    }
}

const contact: FC<contactTypeProps> = ({ contact }) => {
    return (
        <>
            <Head>
                <title>contact</title>
            </Head>
            <ContactInfo contact={contact} />
        </>
    );
};

export default contact;