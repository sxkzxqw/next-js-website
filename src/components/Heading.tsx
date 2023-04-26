import React, { FC } from 'react';

type hding = {
    tag?: string,
    text: string
}

const Heading: FC<hding> = ({ tag, text }) => {
    const Tag: any = tag || 'h1'
    return <Tag>{text}</Tag>
};

export default Heading;