import { gql } from '@apollo/client'

export const GET_LIBRARY = gql`
  query Library {
    sections {
      nodes {
        sections {
          title
          navigationName
        }
        content
      }
    }
    allTutorials {
      nodes {
        id
        title
        learningMaterials {
          description
          skills {
            ... on Skill {
              title
            }
          }
        }
      }
    }
  }
`
