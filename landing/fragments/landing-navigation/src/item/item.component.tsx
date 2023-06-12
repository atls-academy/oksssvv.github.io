import React         from 'react'
import { FC }        from 'react'

import { Box }       from '@ui/layout'
import { NextLink }  from '@ui/link'
import { Text }      from '@ui/text'

import { ItemProps } from './item.interface'

export const Item: FC<ItemProps> = ({ title, path }) => (
  <Box width={200} height={18} justifyContent='center' alignItems='center' flexShrink='0'>
    <NextLink path={path}>
      <Text fontSize='standard' lineHeight='small' color='text.white'>
        {title}
      </Text>
    </NextLink>
  </Box>
)
