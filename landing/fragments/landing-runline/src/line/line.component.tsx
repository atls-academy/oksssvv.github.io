import React         from 'react'
import { FC }        from 'react'

import { Box }       from '@ui/layout'
import { Text }      from '@ui/text'

import { Delimiter } from './delimiter'
import { LineProps } from './line.interfaces'

export const Line: FC<LineProps> = ({ technology, font }) =>
  technology.map((item) => (
    <Box key={item.id}>
      <Delimiter />
      <Text
        color='white'
        textTransform='uppercase'
        fontSize={['greater', 'big']}
        fontFamily={font}
        lineHeight='small'
        whiteSpace='nowrap'
      >
        {item.name}
      </Text>
    </Box>
  ))
