import { gql } from '@apollo/client'

export const GET_COURSES = gql`
  query Courses {
    courses {
      nodes {
        course {
          title
          label {
            ... on Label {
              title
            }
          }
        }
      }
    }
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
