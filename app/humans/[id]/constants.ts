import { Human, Text } from '@/types/models';
import { gql } from '@apollo/client';

export const GET_HUMAN_DETAIL = gql`
  query ($id: String!) {
    human(id: $id) {
      id
      lastName
      firstName
      country1 {
        name
      }
      country2 {
        name
      }
      birthyear
      deathyear
      pseudonym
      dcr
      name
      texts {
        id
        title
      }
    }
  }
`;

export type GetHumanDetailResponse = {
  human: Human & {
    texts: Pick<Text, 'id' | 'title'>[];
  };
};
