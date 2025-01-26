import React from 'react'
import { Alegreya } from 'next/font/google';
import styles from './Navbar.module.scss';

const alegreya = Alegreya({ subsets: ['latin'], weight: "700" });

export const Navbar = () => {
    return (
        <nav style={alegreya.style} className={styles.navbar}>
            <div className={styles.left}>
                <a href="/">
                    Abadía
                </a>
            </div>
        </nav>
    )
}