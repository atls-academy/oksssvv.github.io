import { gql } from '@apollo/client'

export const GET_NAVIGATION = gql`
  query Info {
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
