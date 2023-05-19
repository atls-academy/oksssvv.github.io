import React                from 'react'
import { FC }               from 'react'

import { Background }       from '@ui/background'
import { ImageBlock }       from '@ui/image'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'

import { CardDetailsProps } from './card-details.interface'

const CardDetails: FC<CardDetailsProps> = ({ info, quantity, desc }) => (
  <Box
    width={[375, 410]}
    height={[192, 660]}
    border='lightGray'
    overflow='hidden'
    borderRadius={['medium', 'big']}
  >
    <Background gradient='transparentWhite' display='flex' width='100%'>
      <Layout flexBasis={[16, 32]} flexShrink='0' />
      <Column>
        <Layout flexBasis={[16, 32]} />
        <Box width={[302, 346]}>
          <Text
            fontSize={['medium', 'middle']}
            lineHeight={['medium', 'large']}
            color='text.indigo'
          >
            {info}
          </Text>
        </Box>
        <Layout flexBasis={[0, 74]} />
        <Box width={[240]} height={[240]} display={['none', 'flex']}>
          <Layout flexBasis={55} flexShrink='0' />
          <ImageBlock src='/sphere-pink.png' />
        </Box>
        <Layout flexBasis={[20, 62]} />
        <Box flexDirection={['row', 'column']} alignItems={['center', 'start']}>
          <Box>
            <Text fontSize={['solid', 'massive']} lineHeight='small' color='text.accent'>
              {quantity}
            </Text>
          </Box>
          <Layout flexBasis={[10, 8]} />
          <Box width={[125, 188]}>
            <Text
              fontSize={['little', 'medium']}
              lineHeight={['interim', 'large']}
              color='text.indigo'
            >
              {desc}
            </Text>
          </Box>
          <Box width={64} height={64} display={['flex', 'none']}>
            <Layout flexBasis={65} flexShrink='0' />
            <ImageBlock src='/courses-icon-sphere.png' />
          </Box>
        </Box>
      </Column>
    </Background>
  </Box>
)

export { CardDetails }
