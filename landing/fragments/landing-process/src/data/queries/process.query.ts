import { gql } from '@apollo/client'

export const GET_PROCESS = gql`
  query Process {
    sections {
      nodes {
        content
        sections {
          title
        }
      }
    }

    slides {
      nodes {
        slider {
          text
          image {
            sourceUrl
          }
        }
      }
    }
  }
`
