import React, { FC } from 'react';
import Heading from './Heading';
import { contactType } from '../../types';

type contactInfo = {
    contact: contactType
}

const ContactInfo: FC<contactInfo> = ({ contact }) => {
    const { name, email, address } = contact || {};
    const { street, city, suite, zipcode } = address || {}
    if (!contact) {
        return <Heading tag='h3' text='empty contact' />
    }
    return (
        <>
            <Heading tag='h3' text={name} />
            <div>
                <strong>
                    email:
                </strong>
                {email}
            </div>
            <div>
                <strong>
                    adress:
                </strong>
                {`${street}, ${suite}, ${city}, ${zipcode}`}
            </div>
        </>
    );
};

export default ContactInfo;