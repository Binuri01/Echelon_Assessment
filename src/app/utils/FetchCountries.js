import { gql } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com", 
  cache: new InMemoryCache(),
});

const GET_USD_COUNTRIES = gql`
  query {
    countries(filter: { currency: { eq: "USD" } }) {
      name
      code
      languages {
        name
      }
      continent {
        name
      }
    }
  }
`;

export const fetchCountries = async () => {
  try {
    const { data } = await client.query({ query: GET_USD_COUNTRIES });
    return data.countries;
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
};
