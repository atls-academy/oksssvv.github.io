import React         from 'react'
import { FC }        from 'react'

import { Box }       from '@ui/layout'
import { NextLink }  from '@ui/link'
import { Text }      from '@ui/text'
import { useHover }  from '@ui/utils'

import { ItemProps } from './item.interfaces'

export const Item: FC<ItemProps> = ({ title, path, backColor }) => {
  const [hover, hoverProps] = useHover()

  const variantBorder = () => {
    if (backColor === 'light') {
      return hover ? 'black' : 'gray'
    }
    return hover ? 'white' : 'ghost'
  }
  const variantText = () => {
    if (backColor === 'light') {
      return hover ? 'text.black' : 'text.gray'
    }
    return hover ? 'text.white' : 'text.ghost'
  }

  return (
    <Box
      {...hoverProps}
      width={200}
      height={29}
      justifyContent='center'
      borderBottom={variantBorder()}
    >
      <NextLink path={path}>
        <Text
          fontSize='standard'
          lineHeight='small'
          color={variantText()}
          textTransform='uppercase'
        >
          {title}
        </Text>
      </NextLink>
    </Box>
  )
}
