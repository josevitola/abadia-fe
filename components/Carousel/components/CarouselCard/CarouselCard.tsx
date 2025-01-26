import { Card } from "@/components/Card"
import styles from "./CarouselCard.module.scss";
import { Alegreya } from "next/font/google";

const alegreya = Alegreya({ subsets: ['latin'], weight: "700" });

export const CarouselCard = () => {
    return (
        <Card className={styles.carouselCard}>
            <header style={alegreya.style}>Book 1</header>
        </Card>
    )
}