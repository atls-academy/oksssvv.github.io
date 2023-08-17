import { gql } from '@apollo/client'

export const GET_FAQ = gql`
  query Faq {
    section(id: "cG9zdDoyMzE=") {
      sections {
        title
      }
    }
    allFAQ {
      nodes {
        faq {
          answer
          question
        }
      }
    }
    navigationBy(id: "cG9zdDoyODQ=") {
      title
    }
  }
`
