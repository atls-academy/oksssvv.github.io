import { gql } from '@apollo/client'

export const GET_COURSES = gql`
  query Courses {
    courses {
      nodes {
        course {
          title
          description
          image {
            sourceUrl
          }
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
    courseBy(id: "cG9zdDoyNzk=") {
      content
      course {
        title
        description
      }
    }
    navigationBy(id: "cG9zdDoyODM=") {
      navigation {
        linkName
      }
      title
    }
  }
`
