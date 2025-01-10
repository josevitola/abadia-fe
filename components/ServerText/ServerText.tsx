import { getClient } from "@/lib/apollo/client";
import { Human, Text } from "@/types";
import { gql } from "@apollo/client";

const GET_TEXT_TITLE_AND_AUTHORS_BY_ID = gql`
  query ($id: String!) {
    textById(id: $id) {
      title
      authors {
        name
      }
    }
  }
`;

type QueryTextTitleAndAuthorsByIdResponse = {
  textById: Pick<Text, 'title'> & {
    authors: Pick<Human, 'name'>[]
  }
}

type ClientTextProps = {
  textId: string;
}

// inspired on https://medium.com/@sehrawy/how-to-set-up-nextjs-14-with-apollo-client-754a177e0a00
export const ClientText = async ({ textId }: ClientTextProps) => {
  const client = getClient();

  const { data } = await client.query<QueryTextTitleAndAuthorsByIdResponse>({
    query: GET_TEXT_TITLE_AND_AUTHORS_BY_ID,
    variables: {
      id: textId
    }
  });

  const { title, authors } = data.textById ?? {};

  console.log(authors);
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <strong>Escrito por: </strong><span>{authors.map(({ name }) => name).join(',')}</span>
      </div>
    </div>
  );
};