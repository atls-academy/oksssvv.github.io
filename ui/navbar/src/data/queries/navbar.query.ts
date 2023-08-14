import { gql } from '@apollo/client'

export const GET_NAVBAR = gql`
  query Navbar {
    allNavigation {
      nodes {
        title
        id
      }
    }
  }
`
