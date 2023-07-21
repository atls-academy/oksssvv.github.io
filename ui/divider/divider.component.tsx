import React            from 'react'
import { FC }           from 'react'

import { Box }          from '@ui/layout'

import { DividerProps } from './divider.interfaces'

const Divider: FC<DividerProps> = ({ width, weight, backgroundColor }) => (
  <Box width={width || '100%'} height={weight} backgroundColor={backgroundColor} />
)

export { Divider }
