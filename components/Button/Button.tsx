import React from "react"
import styles from './Button.module.scss';
import { sans500 } from "@/fonts";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
}

export const Button = ({ className, variant = 'primary', ...rest }: ButtonProps) => {
    return (
        <button className={`${styles.button} ${sans500.className} ${styles[variant]}`} {...rest} />
    )
}