import { gql } from '@apollo/client'

export const GET_NAVIGATION = gql`
  query Navigation {
    allNavigation {
      nodes {
        id
        title
      }
    }
  }
`
