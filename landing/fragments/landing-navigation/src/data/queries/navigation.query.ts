import { gql } from '@apollo/client'

export const GET_NAVIGATION = gql`
  query Navigation {
    allNavigation {
      nodes {
        navigation {
          linkName
        }
        id
        title
      }
    }
  }
`
