import React         from 'react'
import { FC }        from 'react'

import { Box }       from '@ui/layout'
import { NextLink }  from '@ui/link'
import { Text }      from '@ui/text'
import { useHover }  from '@ui/utils'

import { ItemProps } from './item.interfaces'

export const Item: FC<ItemProps> = ({ title, path, backColor }) => {
  const [hover, hoverProps] = useHover()
  const getColorText = () => {
    if (backColor === 'light') return hover ? 'text.black' : 'text.gray'
    return hover ? 'text.white' : 'text.ghost'
  }
  const getColorBorder = () => {
    if (backColor === 'light') return hover ? 'black' : 'gray'
    return hover ? 'white' : 'ghost'
  }

  return (
    <Box
      {...hoverProps}
      width={200}
      height={29}
      justifyContent='center'
      borderBottom={getColorBorder()}
    >
      <NextLink path={path}>
        <Text
          fontSize='standard'
          lineHeight='small'
          color={getColorText()}
          textTransform='uppercase'
        >
          {title}
        </Text>
      </NextLink>
    </Box>
  )
}
