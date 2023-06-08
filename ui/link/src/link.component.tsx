import styled               from '@emotion/styled'
import { createBaseStyles } from '@atls-ui-parts/link'

import React                from 'react'

import { Text }             from '@ui/text'

const BaseLink = styled(Text.withComponent('a'))<{ active: boolean }>(createBaseStyles(), ({
  active,
}) => ({
  color: active ? 'blue' : 'black',
}))

export const Link = (props) => <BaseLink {...props} />
