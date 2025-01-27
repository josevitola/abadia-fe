import { Country, Human, Text } from '@/types/models';
import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      iso31662
      name
    }
  }
`;

export type GetCountriesResponse = {
  countries: Country[];
};
