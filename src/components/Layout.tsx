import React, { FC, ReactNode } from 'react';
import Header from './Header'
import Footer from './Footer'

type luprops = {
    children: ReactNode,
}

const Layout: FC<luprops> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;