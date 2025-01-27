import React from "react"
import styles from './Input.module.scss';

export const Input = ({ className, ...rest }: React.InputHTMLAttributes<HTMLInputElement>) => {
    console.log(styles.input)
    return (
        <input className={`${className} ${styles.input}`} {...rest} />
    )
}