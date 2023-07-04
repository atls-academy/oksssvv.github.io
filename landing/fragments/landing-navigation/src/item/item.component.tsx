import React         from 'react'
import { FC }        from 'react'

import { Box }       from '@ui/layout'
import { NextLink }  from '@ui/link'
import { Text }      from '@ui/text'
import { useHover }  from '@ui/utils'

import { ItemProps } from './item.interfaces'

export const Item: FC<ItemProps> = ({ title, path }) => {
  const [hover, hoverProps] = useHover()

  return (
    <Box width={200} height={29} justifyContent='center' borderBottom={hover ? 'white' : 'ghost'}>
      <NextLink path={path}>
        <Text
          {...hoverProps}
          fontSize='standard'
          lineHeight='small'
          color={hover ? 'text.white' : 'text.ghost'}
          textTransform='uppercase'
        >
          {title}
        </Text>
      </NextLink>
    </Box>
  )
}
