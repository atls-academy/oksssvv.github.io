import React                from 'react'
import { FC }               from 'react'

import { Background }       from '@ui/background'
import { Image }            from '@ui/image'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'

import { CardDetailsProps } from './card-details.interfaces'

export const CardDetails: FC<CardDetailsProps> = ({ info, quantity, description }) => (
  <Background
    height={{ wide: 660, ultra: 840 }}
    backgroundColor='grayGradient'
    borderRadius={[16, 24]}
    border='lightGray'
  >
    <Box width={{ _: 335, standard: 410, ultra: 470 }}>
      <Layout flexBasis={[16, 32]} />
      <Column alignItems='center'>
        <Layout flexBasis={[16, 32]} />
        <Box width={{ _: 302, standard: 346, ultra: 406 }}>
          <Text
            fontSize={{ _: 'medium', standard: 'middle', ultra: 'enlarged' }}
            lineHeight={['medium', 'large']}
          >
            {info}
          </Text>
        </Box>
        <Layout flexBasis={[0, 68]} />
        <Box display={['none', 'flex']} justifyContent='center'>
          <Image src='/sphere-white.png' width={240} />
        </Box>
        <Layout flexBasis={[16, 68]} />
        <Box
          width={{ ultra: 346 }}
          height={[64, 116]}
          flexDirection={['row', 'column']}
          alignItems={['center', 'start']}
        >
          <Box>
            <Text
              fontSize={{ _: 'solid', standard: 'massive', ultra: 'huge' }}
              lineHeight='small'
              color='text.accent'
            >
              {quantity}
            </Text>
          </Box>
          <Layout flexBasis={[12, 8]} />
          <Box width={{ _: 125, standard: 188, ultra: 282 }}>
            <Text
              fontSize={{ _: 'little', standard: 'medium', ultra: 'regular' }}
              lineHeight={['interim', 'large']}
            >
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
