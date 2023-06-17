import React                from 'react'
import { FC }               from 'react'

import { PlugIcon }         from '@ui/icon'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'

import { CardDetailsProps } from './card-details.interfaces'

export const CardDetails: FC<CardDetailsProps> = ({ info, quantity, description }) => (
  <Box width={[335, 410]} flexShrink='0'>
    <Layout flexBasis={[16, 32]} flexShrink='0' />
    <Column>
      <Layout flexBasis={[16, 32]} flexShrink='0' />
      <Box width={[302, 346]}>
        <Text fontSize={['medium', 'middle']} lineHeight={['medium', 'large']}>
          {info}
        </Text>
      </Box>
      <Layout flexBasis={[0, 74]} flexShrink='0' />
      <Box display={['none', 'flex']} justifyContent='center'>
        <PlugIcon width={240} height={240} />
      </Box>
      <Layout flexBasis={[16, 62]} flexShrink='0' />
      <Box
        height={[64, 116]}
        flexDirection={['row', 'column']}
        alignItems={['center', 'start']}
        flexShrink='0'
      >
        <Box>
          <Text fontSize={['solid', 'massive']} lineHeight='small'>
            {quantity}
          </Text>
        </Box>
        <Layout flexBasis={[12, 8]} flexShrink='0' />
        <Box width={[125, 188]}>
          <Text fontSize={['little', 'medium']} lineHeight={['interim', 'large']}>
            {description}
          </Text>
        </Box>
        <Layout flexBasis={[64, 0]} />
      </Box>
      <Layout flexBasis={[16, 32]} flexShrink='0' />
    </Column>
    <Layout flexBasis={[16, 32]} flexShrink='0' />
  </Box>
)
