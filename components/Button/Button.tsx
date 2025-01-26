import React from "react"
import styles from './Button.module.scss';

export const Button = ({ className, ...rest }: React.HTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className={`${styles.button} ${className}`} {...rest} />
    )
}