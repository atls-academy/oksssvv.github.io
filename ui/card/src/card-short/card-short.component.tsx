import React              from 'react'
import { FC }             from 'react'

import { Box }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Text }           from '@ui/text'

import { CardShortProps } from './card-short.interfaces'

export const CardShort: FC<CardShortProps> = ({ category, title }) => (
  <Box maxWidth={[260, 560]} backgroundColor='background.lightPurple'>
    <Layout flexBasis={[16, 32]} />
    <Column>
      <Layout flexBasis={[16, 32]} />
      <Box
        width={[142, 180]}
        height={[27, 38]}
        alignItems='center'
        justifyContent='center'
        backgroundColor='white'
      >
        <Text fontSize={['small', 'medium']} textTransform='uppercase'>
          {category}
        </Text>
      </Box>
      <Layout flexBasis={[62, 126]} />
      <Box>
        <Text fontSize={['regular', 'large']}>{title}</Text>
      </Box>
      <Layout flexBasis={[16, 32]} />
    </Column>
    <Layout flexBasis={[16, 32]} />
  </Box>
)
