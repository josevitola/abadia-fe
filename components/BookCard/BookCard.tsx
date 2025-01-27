import { BasicBook } from "@/types/models"
import styles from "./BookCard.module.scss";
import Link from "next/link";

type BookCardProps = {
    book: BasicBook
}

const BookCard = ({ book }: BookCardProps) => {
    return (
        <div className={styles.book}>
            <h2>{book.title}</h2>
            <div>
                <strong>Texts included:</strong>
                <ul>
                    {book.texts.map((text) => (
                        <li key={text.id}>
                            <Link href={`/texts/${text.id}`}>{text.title}</Link>, by {text.authors.map(({ name }) => name).join(', ')}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default BookCard