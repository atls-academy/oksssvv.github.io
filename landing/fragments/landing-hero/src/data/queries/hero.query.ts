import { gql } from '@apollo/client'

export const GET_HERO = gql`
  query Hero {
    sections {
      nodes {
        id
        content
        sections {
          title
          navigationName
        }
      }
    }
  }
`
