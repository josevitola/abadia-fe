import React from 'react'
import styles from "./Carousel.module.scss";
import { CarouselCard } from './components/CarouselCard';

const Carousel = () => {
    return (
        <div className={styles.carousel}>
            <CarouselCard />
            <CarouselCard />
            <CarouselCard />
        </div>
    )
}

export default Carousel