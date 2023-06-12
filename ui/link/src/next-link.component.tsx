import { createNextLink } from '@atls-ui-parts/link'

import React              from 'react'

import { BaseLink }       from './link.styles'

export const NextLink = (props) => {
  const NextLinkRenderer: any = createNextLink(BaseLink)
  return <NextLinkRenderer {...props} />
}
