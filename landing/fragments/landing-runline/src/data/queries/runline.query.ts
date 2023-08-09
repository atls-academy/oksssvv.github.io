import { gql } from '@apollo/client'

export const GET_RUNLINE = gql`
  query Runline {
    skills {
      nodes {
        title
      }
    }
  }
`
