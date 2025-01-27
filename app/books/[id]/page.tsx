import styles from "@/app/page.module.css";
import { serif500, serif700 } from "@/fonts";
import { getClient } from "@/lib/apollo/client";
import { PageProps } from "@/types/ui";
import { GET_BOOK_DETAIL, GetBookDetailResponse } from "./constants";
import { Button } from "@/components/Button";
import Link from "next/link";

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
                    <br />
                    <ol>
                        {book.texts.map((text) =>
                            <li key={text.id}>
                                <em><Link href={`/texts/${text.id}`}>{text.title}</Link></em>, por&nbsp;
                                {text.authors.map((author) =>
                                    <Link href={`/humans/${author.id}`}>{author.name}</Link>)
                                }
                            </li>
                        )}
                    </ol>
                </div>
            </main>
        </div>
    );
}
