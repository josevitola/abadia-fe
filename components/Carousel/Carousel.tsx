import React from 'react'
import styles from "./Carousel.module.scss";
import { CarouselCard } from './components/CarouselCard';

interface CarouselProps {
    books: { id: string; title: string; }[];
}

const Carousel = ({ books }: CarouselProps) => {
    return (
        <div className={styles.carousel}>
            {books.map((book) => <CarouselCard key={book.id} title={book.title} />)}
        </div>
    )
}

export default Carousel