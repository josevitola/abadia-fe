import React from "react"
import styles from './Input.module.scss';
import { sans500 } from "@/fonts";

export const Input = ({ className = '', ...rest }: React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input className={`${className} ${styles.input} ${sans500.className}`} {...rest} />
    )
}