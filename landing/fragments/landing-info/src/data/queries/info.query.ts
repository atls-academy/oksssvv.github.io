import { gql } from '@apollo/client'

export const GET_INFO = gql`
  query Info {
    section(id: "cG9zdDoyMjY=") {
      content
    }
  }
`
