import { serif600, serif800 } from "@/fonts";
import { getClient } from "@/lib/apollo/client";
import { Book, Human, Text } from "@/types/models";
import { gql } from "@apollo/client";

const GET_TEXT_DETAIL = gql`
  query ($id: String!) {
    textById(id: $id) {
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
  textById: Pick<Text, 'title'> & {
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

  const { title, authors, books } = data.textById ?? {};

  return (
    <div>
      <h1 style={serif800.style}>{title}</h1>
      <div>
        <strong>Escrito por: </strong>
        <span>{authors.map(({ id, name }) => <a key={id} href={`/humans/${id}`}>{name}</a>)}</span>
      </div>
      <br />
      <div>
        <h3 style={serif600.style}>Aparece en:</h3>
        <ul>
          {books.map(({ id, title }) => <li key={id}><a href={`/books/${id}`}>{title}</a></li>)}
        </ul>
      </div>
    </div>
  );
};