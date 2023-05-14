import React                from 'react'
import { FC }               from 'react'

import { Background }       from '@ui/background'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'

import { CardConciseProps } from './card-concise.interface'

export const CardConcise: FC<CardConciseProps> = ({ category, title }) => (
  <Box width={[260, 485]} borderRadius={['medium', 'big']} flexShrink='0'>
    <Background gradient='lightPurpleTransparent' borderRadius={['medium', 'big']} width='100%'>
      <Box>
        <Layout flexBasis={[16, 40]} flexShrink='0' />
        <Column>
          <Layout flexBasis={[16, 40]} flexShrink='0' />
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
          <Layout flexBasis={[62, 110]} flexShrink='0' />
          <Text fontSize={['enlarged', 'large']} color='text.indigo'>
            {title}
          </Text>
          <Layout flexBasis={40} flexShrink='0' />
        </Column>
      </Box>
    </Background>
  </Box>
)
