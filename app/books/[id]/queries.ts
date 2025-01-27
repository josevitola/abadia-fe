import { Book } from '@/types';
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
          name
        }
      }
    }
  }
`;

export type GetBookDetailResponse = {
  book: Book & {
    texts: {
      id: string;
      title: string;
      authors: {
        name: string;
      }[];
    }[];
  };
};
