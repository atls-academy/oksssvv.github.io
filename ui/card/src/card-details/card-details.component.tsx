import React                from 'react'
import { FC }               from 'react'

import { PlugIcon }         from '@ui/icon'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'

import { CardDetailsProps } from './card-details.interfaces'

export const CardDetails: FC<CardDetailsProps> = ({ info, quantity, description }) => (
  <Box width={[335, 410]} height={[192, 660]}>
    <Layout flexBasis={[16, 32]} flexShrink='0' />
    <Column>
      <Layout flexBasis={[16, 32]} />
      <Box width={[302, 346]}>
        <Text fontSize={['medium', 'middle']} lineHeight={['medium', 'large']}>
          {info}
        </Text>
      </Box>
      <Layout flexBasis={[0, 74]} />
      <Box display={['none', 'flex']} justifyContent='center'>
        <PlugIcon width={240} height={240} />
      </Box>
      <Layout flexBasis={[24, 62]} />
      <Box flexDirection={['row', 'column']} alignItems={['center', 'start']}>
        <Box>
          <Text fontSize={['solid', 'massive']} lineHeight='small'>
            {quantity}
          </Text>
        </Box>
        <Layout flexBasis={[10, 8]} />
        <Box width={[125, 188]}>
          <Text fontSize={['little', 'medium']} lineHeight={['interim', 'large']}>
            {description}
          </Text>
        </Box>
      </Box>
    </Column>
  </Box>
)