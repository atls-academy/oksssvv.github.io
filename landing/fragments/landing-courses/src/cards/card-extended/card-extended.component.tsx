import React                 from 'react'
import { FC }                from 'react'

import { Background }        from '@ui/background'
import { Box }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Text }              from '@ui/text'

import { CardExtendedProps } from './card-extended.interface'

export const CardExtended: FC<CardExtendedProps> = ({ category, title, desc, descMobile, gap }) => (
  <Box width={[335, 1010]} borderRadius={['medium', 'big']} overflow='hidden'>
    <Background gradient='lightPurpleTransparent' width='100%' display='flex'>
      <Layout flexBasis={[16, 40]} flexShrink='0' />
      <Column>
        <Layout flexBasis={[16, 40]} />
        <Box
          backgroundColor='white'
          width={[80, 104]}
          height={[27, 38]}
          alignItems='center'
          justifyContent='center'
          borderRadius='little'
        >
          <Text fontSize={['small', 'medium']} color='text.indigo' textTransform='uppercase'>
            {category}
          </Text>
        </Box>
        <Layout flexBasis={gap} />
        <Box>
          <Text fontSize={['enlarged', 'large']} color='text.indigo'>
            {title}
          </Text>
        </Box>
        <Layout flexBasis={16} />
        <Box display={['none', 'flex']} width={693}>
          <Text fontSize='regular' color='text.cloudyPurple' lineHeight='medium'>
            {desc}
          </Text>
        </Box>
        <Box display={['flex', 'none']}>
          <Text fontSize='medium' color='text.cloudyPurple'>
            {descMobile}
          </Text>
        </Box>
        <Layout flexBasis={40} />
      </Column>
    </Background>
  </Box>
)
