import styles from "./page.module.css";
import Carousel from "@/components/Carousel/Carousel";
import { getClient } from "@/lib/apollo/client";
import { gql } from "@apollo/client";
import { BasicBook } from "@/types";

type QueryTextTitleAndAuthorsByIdResponse = {
  books: BasicBook[]
}

const GET_BOOK_INFO = gql`
    query Books {
        books {
            id
            title
        }
    }
`;

export default async function Home() {
  const client = getClient();

  const { data } = await client.query<QueryTextTitleAndAuthorsByIdResponse>({
    query: GET_BOOK_INFO
  });

  return (
    <div className={styles.page}>
      <Carousel books={data.books} />
      <main className={styles.main}>
        En desarrollo.
      </main>
    </div>
  );
}
