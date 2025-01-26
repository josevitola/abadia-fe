import React from 'react'
import { Alegreya } from 'next/font/google';
import styles from './Navbar.module.scss';
import { Button } from '../Button';

const alegreya = Alegreya({ subsets: ['latin'], weight: "700" });

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.left}>
                <a className={alegreya.className} href="/">
                    Abadía
                </a>
            </div>

            <div>
                <Button>Create book</Button>
            </div>
        </nav>
    )
}