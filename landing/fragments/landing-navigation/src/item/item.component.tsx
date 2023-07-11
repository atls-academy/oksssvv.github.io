import React              from 'react'
import { FC }             from 'react'

import { Box }            from '@ui/layout'
import { NextLink }       from '@ui/link'
import { Text }           from '@ui/text'
import { useHover }       from '@ui/utils'

import { ItemProps }      from './item.interfaces'
import { getColorBorder } from './helpers'
import { getColorText }   from './helpers'

export const Item: FC<ItemProps> = ({ title, path, backColor }) => {
  const [hover, hoverProps] = useHover()

  return (
    <Box
      {...hoverProps}
      width={200}
      height={29}
      justifyContent='center'
      borderBottom={getColorBorder(backColor, hover)}
    >
      <NextLink path={path}>
        <Text
          fontSize='standard'
          lineHeight='small'
          color={getColorText(backColor, hover)}
          textTransform='uppercase'
        >
          {title}
        </Text>
      </NextLink>
    </Box>
  )
}
