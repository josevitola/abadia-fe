import { Card } from "@/components/Card"
import styles from "./CarouselCard.module.scss";
import { Alegreya } from "next/font/google";

const alegreya = Alegreya({ subsets: ['latin'], weight: "700" });

interface CarouselCardProps {
    title: string;
}

export const CarouselCard = ({ title }: CarouselCardProps) => {
    return (
        <Card className={styles.carouselCard}>
            <header style={alegreya.style}>{title}</header>
        </Card>
    )
}