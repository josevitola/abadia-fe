import { Card } from "@/components/Card"
import styles from "./CarouselCard.module.scss";
import { Alegreya } from "next/font/google";
import Link from "next/link";

const alegreya = Alegreya({ subsets: ['latin'], weight: "700" });

interface CarouselCardProps {
    title: string;
    href: string;
}

export const CarouselCard = ({ title, href }: CarouselCardProps) => {
    return (
        <Card className={styles.carouselCard}>
            <header style={alegreya.style}>
                <Link href={href}>{title}</Link>
            </header>
        </Card>
    )
}