import React                from 'react'
import { FC }               from 'react'

import { Background }       from '@ui/background'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'
import {Image} from '@ui/image'

import { CardDetailsProps } from './card-details.interfaces'

export const CardDetails: FC<CardDetailsProps> = ({ info, quantity, description }) => (
  <Background variant='grayGradient' borderRadius={[16, 24]} border='lightGray'>
    <Box maxWidth={[335, 410]}>
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
        <Image src='/sphere-white.png' width={240} />
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
            <Image src='/sphere-white.png' width={64} />
          </Box>
        </Box>
        <Layout flexBasis={[16, 32]} />
      </Column>
      <Layout flexBasis={[16, 32]} />
    </Box>
  </Background>
)
