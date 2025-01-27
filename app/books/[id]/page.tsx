import styles from "@/app/page.module.css";
import { serif500 } from "@/fonts";
import { getClient } from "@/lib/apollo/client";
import { Book } from "@/types";
import { PageProps } from "@/types/ui";
import { gql } from "@apollo/client";

const GET_BOOK_DETAIL = gql`
    query ($id: String!) {
        bookById(id: $id) {
            id
            title
            publisherId
            npages
            dcr
            isbn10
            isbn13
            year
            printedIn
            isCompilation
        }
    }
`;

type QueryTextTitleAndAuthorsByIdResponse = {
    bookById: Book;
}

export default async function BookIdPage({ params }: PageProps) {
    const { id } = await params;
    const client = getClient();

    const { data } = await client.query<QueryTextTitleAndAuthorsByIdResponse>({
        query: GET_BOOK_DETAIL,
        variables: { id }
    });

    const { bookById: book } = data;

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1 style={serif500.style}>{book.title}</h1>
            </main>
        </div>
    );
}
