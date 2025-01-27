import { serif600, serif800 } from "@/fonts";
import { getClient } from "@/lib/apollo/client";
import { Book, Human, Text } from "@/types/models";
import { gql } from "@apollo/client";
import Link from "next/link";

const GET_TEXT_DETAIL = gql`
  query ($id: String!) {
    text(id: $id) {
      title
      authors {
        id
        name
      }
      books {
        id
        title
      }
    }
  }
`;

type GetTextDetailResponse = {
  text: Pick<Text, 'title'> & {
    authors: Pick<Human, 'id' | 'name'>[];
    books: Pick<Book, 'id' | 'title'>[];
  }
}

type ClientTextProps = {
  textId: string;
}

// inspired on https://medium.com/@sehrawy/how-to-set-up-nextjs-14-with-apollo-client-754a177e0a00
export const ServerText = async ({ textId }: ClientTextProps) => {
  const client = getClient();

  const { data } = await client.query<GetTextDetailResponse>({
    query: GET_TEXT_DETAIL,
    variables: {
      id: textId
    }
  });

  const { title, authors, books } = data.text ?? {};

  return (
    <div>
      <h1 style={serif800.style}>{title}</h1>
      <div>
        escrito por&nbsp;
        <span>{authors.map(({ id, name }) => <Link key={id} href={`/humans/${id}`}>{name}</Link>)}</span>
      </div>
      <br />
      <div>
        <h3 style={serif600.style}>Aparece en:</h3>
        <ul>
          {books.map(({ id, title }) => <li key={id}><Link href={`/books/${id}`}>{title}</Link></li>)}
        </ul>
      </div>
    </div>
  );
};