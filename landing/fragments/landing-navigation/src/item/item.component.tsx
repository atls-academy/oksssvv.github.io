import React         from 'react'
import { FC }        from 'react'
import { Link }      from 'react-scroll'

import { Box }       from '@ui/layout'
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
      width={{ standard: 200, ultra: 300 }}
      height={{ standard: 29, ultra: 43 }}
      justifyContent='center'
      borderBottom={getColorBorder()}
    >
      <Link to={path} spy smooth duration={1000}>
        <Text
          fontSize={{ standard: 'standard', ultra: 'major' }}
          lineHeight='small'
          color={getColorText()}
          textTransform='uppercase'
          cursor='pointer'
        >
          {title}
        </Text>
      </Link>
    </Box>
  )
}
