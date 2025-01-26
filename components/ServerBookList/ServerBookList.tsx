import { getClient } from "@/lib/apollo/client";
import { BasicBook } from "@/types";
import { gql } from "@apollo/client";
import BookCard from "../BookCard/BookCard";

const GET_BOOK_INFO = gql`
    query Books {
        books {
            id
            title
            texts {
                id
                title
                authors {
                    name
                }
            }
        }
    }
`;

type QueryTextTitleAndAuthorsByIdResponse = {
    books: BasicBook[]
}

export const ServerBookList = async () => {
    const client = getClient();

    const { data } = await client.query<QueryTextTitleAndAuthorsByIdResponse>({
        query: GET_BOOK_INFO
    });

    return (
        <div>
            {data.books.map((book) => <BookCard key={book.id} book={book} />)}
        </div>
    );
};