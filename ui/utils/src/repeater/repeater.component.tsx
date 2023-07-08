import React   from 'react'

import { Box } from '@ui/layout'

export const Repeater = ({ quantity, children }) => (
  <Box>{[...new Array(quantity)]?.map(children)}</Box>
)
