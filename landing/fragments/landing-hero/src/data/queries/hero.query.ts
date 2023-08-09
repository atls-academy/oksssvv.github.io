import { gql } from '@apollo/client'

export const GET_HERO = gql`
  query Hero {
    sections {
      nodes {
        sections {
          title
          navigationName
        }
      }
    }
  }
`
