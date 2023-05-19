import React              from 'react'
import { FC }             from 'react'

import { Background }     from '@ui/background'
import { Box }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Text }           from '@ui/text'

import { CardShortProps } from './card-short.interface'

export const CardShort: FC<CardShortProps> = ({ category, title }) => (
  <Box width={[260, 485]} borderRadius={['medium', 'big']} flexShrink='0' overflow='hidden'>
    <Background gradient='lightPurpleTransparent' width='100%' display='flex'>
      <Layout flexBasis={[16, 40]} flexShrink='0' />
      <Column>
        <Layout flexBasis={[16, 40]} />
        <Box
          backgroundColor='white'
          width={[142, 179]}
          height={[27, 38]}
          alignItems='center'
          justifyContent='center'
          borderRadius='little'
        >
          <Text fontSize={['small', 'medium']} color='text.indigo' textTransform='uppercase'>
            {category}
          </Text>
        </Box>
        <Layout flexBasis={[62, 110]} />
        <Box>
          <Text fontSize={['enlarged', 'large']} color='text.indigo'>
            {title}
          </Text>
        </Box>
        <Layout flexBasis={40} />
      </Column>
    </Background>
  </Box>
)
