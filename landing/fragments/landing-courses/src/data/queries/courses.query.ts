import { gql } from '@apollo/client'

export const GET_COURSES = gql`
  query Courses {
    sections {
      nodes {
        content
        title
        sections {
          title
        }
      }
    }
  }
`
