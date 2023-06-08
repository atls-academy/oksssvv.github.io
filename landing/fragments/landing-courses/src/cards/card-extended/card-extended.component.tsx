import React                 from 'react'
import { FC }                from 'react'

import { Box }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Text }              from '@ui/text'

import { CardExtendedProps } from './card-extended.interface'

export const CardExtended: FC<CardExtendedProps> = ({ title, desc, descMobile }) => (
  <Box width={[335, 1010]} borderRadius={['medium', 'big']} overflow='hidden'>
    <Layout flexBasis={[16, 40]} flexShrink='0' />
    <Column>
      <Layout flexBasis={[16, 40]} />

      <Box>
        <Text fontSize={['enlarged', 'large']}>{title}</Text>
      </Box>
      <Layout flexBasis={16} />
      <Box display={['none', 'flex']} width={693}>
        <Text fontSize='regular' lineHeight='medium'>
          {desc}
        </Text>
      </Box>
      <Box display={['flex', 'none']}>
        <Text fontSize='medium'>{descMobile}</Text>
      </Box>
      <Layout flexBasis={40} />
    </Column>
  </Box>
)
