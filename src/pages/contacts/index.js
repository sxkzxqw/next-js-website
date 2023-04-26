import React, { useEffect, useState } from 'react';
import Heading from '../../components/Heading';
import Head from 'next/head';
import Link from 'next/link';

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            contacts: data
        }
    }
}

const contacts = ({ contacts }) => {
    return (
        <>
            <Head>
                <title>contacts</title>
            </Head>
            <Heading text='contacts' />
            <ul style={{ listStyle: 'none' }}>
                {contacts && contacts.map((contact) => {
                    return (
                        <li key={contact.id}>
                            <Link href={`/contacts/${contact.id}`}>
                                <strong>{contact.name}</strong> ({contact.email})
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    );
};

export default contacts;