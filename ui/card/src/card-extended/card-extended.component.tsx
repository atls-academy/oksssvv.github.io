import React                 from 'react'
import { FC }                from 'react'

import { Box }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Text }              from '@ui/text'

import { CardExtendedProps } from './card-extended.interfaces'

export const CardExtended: FC<CardExtendedProps> = ({
  category,
  gap,
  title,
  description,
  descriptionMobileFirst,
  descriptionMobileSecond,
}) => (
  <Box width={[335, 1160]}>
    <Layout flexBasis={[16, 42]} flexShrink='0' />
    <Column>
      <Layout flexBasis={[16, 42]} />
      <Box
        width={[80, 104]}
        height={[27, 38]}
        flexShrink='0'
        alignItems='center'
        justifyContent='center'
      >
        <Text fontSize={['small', 'medium']} textTransform='uppercase'>
          {category}
        </Text>
      </Box>
      <Layout flexBasis={gap} />
      <Box>
        <Text fontSize={['enlarged', 'large']}>{title}</Text>
      </Box>
      <Layout flexBasis={[12, 16]} />
      <Box display={['none', 'flex']} width={693}>
        <Text fontSize='regular' lineHeight='medium'>
          {description}
        </Text>
      </Box>
      <Box display={['flex', 'none']}>
        <Text fontSize='medium' lineHeight='large'>
          {descriptionMobileFirst}
        </Text>
      </Box>
      <Box display={['flex', 'none']}>
        <Text fontSize='medium' lineHeight='large'>
          {descriptionMobileSecond}
        </Text>
      </Box>
      <Layout flexBasis={[16, 40]} />
    </Column>
  </Box>
)
