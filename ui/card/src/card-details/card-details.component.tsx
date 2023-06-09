import React                from 'react'
import { FC }               from 'react'

import { PlugIcon }         from '@ui/icon'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'

import { CardDetailsProps } from './card-details.interfaces'

export const CardDetails: FC<CardDetailsProps> = ({ info, quantity, description }) => (
  <Box maxWidth={[335, 410]} backgroundColor='background.lightGray'>
    <Layout flexBasis={[16, 32]} />
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
      <Layout flexBasis={[16, 62]} />
      <Box height={[64, 116]} flexDirection={['row', 'column']} alignItems={['center', 'start']}>
        <Box>
          <Text fontSize={['solid', 'massive']} lineHeight='small' color='text.accent'>
            {quantity}
          </Text>
        </Box>
        <Layout flexBasis={[12, 8]} />
        <Box width={[125, 188]}>
          <Text fontSize={['little', 'medium']} lineHeight={['interim', 'large']}>
            {description}
          </Text>
        </Box>
        <Layout flexBasis={[70, 0]} />
        <Box display={['flex', 'none']} justifyContent='center'>
          <PlugIcon width={64} height={64} />
        </Box>
      </Box>
      <Layout flexBasis={[16, 32]} />
    </Column>
    <Layout flexBasis={[16, 32]} />
  </Box>
)
