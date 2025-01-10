import { getClient } from "@/lib/apollo/client";
import { Book, Human, Text } from "@/types";
import { gql } from "@apollo/client";

const GET_BOOK_INFO = gql`
    query Books {
        books {
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
    books: (Pick<Book, 'title'> & {
        texts: Pick<Text, 'id' | 'title' | 'authors'>[]
    })[]
}

export const ServerBookList = async () => {
    const client = getClient();

    const { data } = await client.query<QueryTextTitleAndAuthorsByIdResponse>({
        query: GET_BOOK_INFO
    });

    console.log(data);
    return (
        <div>
            <h2>Wait</h2>
        </div>
    );
};