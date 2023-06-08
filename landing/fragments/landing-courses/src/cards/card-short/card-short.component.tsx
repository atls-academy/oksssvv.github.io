import React              from 'react'
import { FC }             from 'react'

import { Box }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Text }           from '@ui/text'

import { CardShortProps } from './card-short.interface'

export const CardShort: FC<CardShortProps> = ({ title }) => (
  <Box width={[260, 485]} borderRadius={['medium', 'big']} flexShrink='0' overflow='hidden'>
    <Layout flexBasis={[16, 40]} flexShrink='0' />
    <Column>
      <Layout flexBasis={[16, 40]} />
      <Box>
        <Text fontSize={['enlarged', 'large']}>{title}</Text>
      </Box>
      <Layout flexBasis={40} />
    </Column>
  </Box>
)
