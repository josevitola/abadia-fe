import { Card } from "@/components/Card"
import styles from "./CarouselCard.module.scss";
import { Alegreya } from "next/font/google";

const alegreya = Alegreya({ subsets: ['latin'], weight: "700" });

interface CarouselCardProps {
    title: string;
    href: string;
}

export const CarouselCard = ({ title, href }: CarouselCardProps) => {
    return (
        <Card className={styles.carouselCard}>
            <header style={alegreya.style}>
                <a href={href}>{title}</a>
            </header>
        </Card>
    )
}