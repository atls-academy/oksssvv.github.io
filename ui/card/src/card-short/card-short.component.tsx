import React              from 'react'
import { FC }             from 'react'

import { Background }     from '@ui/background'
import { Box }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Text }           from '@ui/text'

import { CardShortProps } from './card-short.interfaces'

export const CardShort: FC<CardShortProps> = ({ category, title }) => {

  return (
    <Box
      maxWidth={[260, 560]}
      borderRadius={[16, 24]}
      overflow='hidden'
    >
      <Background variant='lightPurpleRadial' width='100%' display='flex'>
        <Layout flexBasis={[16, 32]} />
        <Column>
          <Layout flexBasis={[16, 32]} />
          <Box
            width={[142, 180]}
            height={[27, 38]}
            alignItems='center'
            justifyContent='center'
            backgroundColor='white'
            borderRadius={8}
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
      </Background>
    </Box>
  )
}
