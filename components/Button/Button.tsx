import React from "react"
import styles from './Button.module.scss';
import { sans500 } from "@/fonts";

export const Button = ({ className, ...rest }: React.HTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className={`${styles.button} ${sans500.className} ${className}`} {...rest} />
    )
}