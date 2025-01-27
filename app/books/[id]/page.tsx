import styles from "@/app/page.module.css";
import { serif500, serif700 } from "@/fonts";
import { getClient } from "@/lib/apollo/client";
import { PageProps } from "@/types/ui";
import { GET_BOOK_DETAIL, GetBookDetailResponse } from "./queries";
import { Button } from "@/components/Button";

export default async function BookIdPage({ params }: PageProps) {
    const { id } = await params;
    const client = getClient();

    const { data: bookById } = await client.query<GetBookDetailResponse>({
        query: GET_BOOK_DETAIL,
        variables: { id }
    });

    const { book } = bookById;

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1 style={serif500.style}>{book.title}</h1>
                <div>
                    <Button variant="secondary">Agregar texto</Button>
                </div>
                <div>
                    <h3 style={serif700.style}>Este libro incluye:</h3>
                    <ul>
                        {book.texts.map((text) =>
                            <li key={text.id}>
                                <em>{text.title}</em>, por {text.authors.map((author) => author.name).join(', ')}
                            </li>
                        )}
                    </ul>
                </div>
            </main>
        </div>
    );
}
