import { BasicBook } from "@/types/models"
import styles from "./BookCard.module.scss";

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
                            <a href={`/texts/${text.id}`}>{text.title}</a>, by {text.authors.map(({ name }) => name).join(', ')}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default BookCard