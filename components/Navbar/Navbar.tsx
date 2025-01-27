import React from 'react'
import { Alegreya } from 'next/font/google';
import styles from './Navbar.module.scss';
import { Button } from '../Button';
import Link from 'next/link';

const alegreya = Alegreya({ subsets: ['latin'], weight: "700" });

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.left}>
                <Link className={alegreya.className} href="/">
                    Abadía
                </Link>
            </div>

            <div>
                <Link href="/create/human"><Button>Crear</Button></Link>
            </div>
        </nav>
    )
}