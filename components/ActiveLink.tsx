import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styles from '../styles/ActiveLink.module.css';

interface Props {
    text: string,
    href: string
}

export const ActiveLink : FC<Props> = ({ text, href }) => {

    const { asPath } = useRouter();

    return (
        <Link className={`${styles.nav} ${asPath === href ? styles['active-link']: null}`} href={href}>{text}</Link>
    )
}
