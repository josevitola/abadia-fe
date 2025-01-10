import { getClient } from "@/lib/apollo/client";
import { gql, useQuery } from "@apollo/client";

const GET_TEXT_BY_ID = gql`
  query ($id: String!) {
    textById(id: $id) {
      id
      title
      origLanguageId
      dcr
    }
  }
`;

type ClientTextProps = {
  textId: string;
}

// inspired on https://medium.com/@sehrawy/how-to-set-up-nextjs-14-with-apollo-client-754a177e0a00
export const ClientText = async ({ textId }: ClientTextProps) => {
  const client = getClient();

  const { data } = await client.query({
    query: GET_TEXT_BY_ID,
    variables: {
      id: textId
    }
  });

  console.log("🚀 ~ user ~ data:", data?.textById);
  return (
    <>
      <h1>{data?.textById?.title}</h1>
    </>
  );
};