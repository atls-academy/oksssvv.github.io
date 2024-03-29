import React            from 'react'
import { FC }           from 'react'
import { Link }         from 'react-scroll'

import { Box }          from '@ui/layout'
import { Column }       from '@ui/layout'
import { Layout }       from '@ui/layout'
import { Text }         from '@ui/text'

import { ItemProps }    from './item.interfaces'
import { getColorText } from '../helpers'
import { getColorDot }  from '../helpers'
import { getTitle }     from '../helpers'

export const Item: FC<ItemProps> = ({ id, title, selected, index }) => (
  <Column marginLeft='regular'>
    <Link to={id} spy smooth duration={1000} style={{ marginTop: -5 }}>
      <Text
        fontSize='medium'
        cursor='pointer'
        color={getColorText(selected, index)}
        style={{ transition: '0.5s' }}
      >
        {getTitle(title, index)}
      </Text>
    </Link>
    <Layout flexBasis={20} />
    <Box
      opacity={selected === index ? 1 : 0}
      style={{ transition: '0.2s' }}
      position='absolute'
      width={8}
      height={8}
      borderRadius='small'
      backgroundColor={getColorDot(selected)}
      left={-3.5}
    />
  </Column>
)
