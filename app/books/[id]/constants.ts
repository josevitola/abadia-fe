import { Book, Human, Text } from '@/types/models';
import { gql } from '@apollo/client';

export const GET_BOOK_DETAIL = gql`
  query ($id: String!) {
    book(id: $id) {
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
      texts {
        id
        title
        authors {
          id
          name
        }
      }
    }
  }
`;

export type GetBookDetailResponse = {
  book: Book & {
    texts: (Pick<Text, 'id' | 'title'> & { authors: Pick<Human, 'id' | 'name'>[] })[];
  };
};
