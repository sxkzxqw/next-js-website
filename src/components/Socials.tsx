import Head from "next/head";
import styles from "../styles/Socials.module.scss";
import { socType } from "../../types";
import { FC } from "react";

type socProps = {
    socials: socType | any
}

const Socials: FC<socProps> = ({ socials }) => {

    if (!socials) {
        return <h1>error</h1>;
    }

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css" />
            </Head>
            <ul className={styles.socials}>
                {socials.map(({ id, icon, path, name }: any) => (
                    <li key={id} className={styles.list}>
                        <p style={{ margin: 0 }}>{name}</p>
                        <a href={path} target="_blank" rel="noopener noreferrer">
                            <i className={`fab fa-${icon}`} aria-hidden="true" />
                        </a>
                    </li>
                ))
                }
            </ul>
        </>
    );
}

export default Socials;