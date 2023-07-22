import React              from 'react'
import { FC }             from 'react'

import { Background }     from '@ui/background'
import { Box }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Text }           from '@ui/text'

import { CardShortProps } from './card-short.interfaces'

export const CardShort: FC<CardShortProps> = ({ category, title }) => (
  <Box
    width={{ _: 260, standard: 560, wide: 572, ultra: 670 }}
    borderRadius={['medium', 'big']}
    overflow='hidden'
  >
    <Background backgroundColor='lightPurpleRadial' width='100%' display='flex'>
      <Layout flexBasis={{ _: 16, standard: 32, ultra: 40 }} />
      <Column>
        <Layout flexBasis={{ _: 16, standard: 32, ultra: 40 }} />
        <Box
          width={{ _: 142, standard: 180, ultra: 270 }}
          height={{ _: 27, standard: 38, ultra: 57 }}
          alignItems='center'
          justifyContent='center'
          backgroundColor='white'
          borderRadius='little'
        >
          <Text
            fontSize={{ _: 'small', standard: 'medium', ultra: 'regular' }}
            textTransform='uppercase'
          >
            {category}
          </Text>
        </Box>
        <Layout flexBasis={{ _: 62, standard: 126, ultra: 45 }} />
        <Box width={{ ultra: 590 }}>
          <Text fontSize={{ _: 'regular', standard: 'large', ultra: 'enormous' }}>{title}</Text>
        </Box>
        <Layout flexBasis={{ _: 16, standard: 32, ultra: 40 }} />
      </Column>
      <Layout flexBasis={{ _: 16, standard: 32, ultra: 40 }} />
    </Background>
  </Box>
)
