import React from 'react';
import styles from './Card.module.scss';

interface CardProps {
    className?: string;
    children: React.ReactNode;
}

export const Card = ({ children, className = '' }: CardProps) => {
    return (
        <article className={`${styles.card} ${className}`}>{children}</article>
    )
}