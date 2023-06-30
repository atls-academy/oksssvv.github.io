import React         from 'react'
import { FC }        from 'react'

import { Box }       from '@ui/layout'
import { NextLink }  from '@ui/link'
import { Text }      from '@ui/text'

import { ItemProps } from './item.interfaces'

export const Item: FC<ItemProps> = ({ title, path }) => (
  <Box width={200} height={29} justifyContent='center' borderBottom='light'>
    <NextLink path={path}>
      <Text
        fontSize='standard'
        lineHeight='small'
        color='text.white'
        textTransform='uppercase'
        borderBottom='1px solid rgba(255, 255, 255, 0.25)'
      >
        {title}
      </Text>
    </NextLink>
  </Box>
)
