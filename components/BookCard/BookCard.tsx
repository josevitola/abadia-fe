import { BasicBook } from "@/types"

type BookCardProps = {
    book: BasicBook
}

const BookCard = ({ book }: BookCardProps) => {
    return (
        <>
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
        </>
    )
}

export default BookCard