import React               from 'react'
import { FC }              from 'react'

import { Divider }         from '@ui/divider'
import { Box }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Text }            from '@ui/text'

import { CardMobileProps } from './card-mobile.interfaces'

export const CardMobile: FC<CardMobileProps> = ({ category, title, divider, widthContainer }) => (
  <Column width={335}>
    <Box
      width={widthContainer}
      minHeight={32}
      alignItems='center'
      justifyContent='center'
      border='lightPrimary'
      borderRadius='little'
    >
      <Text fontSize='little' textTransform='uppercase' color='text.blueDark'>
        {category}
      </Text>
    </Box>
    <Layout flexBasis={8} />
    <Box>
      <Text fontSize='normal' color='text.blueDark'>
        {title}
      </Text>
    </Box>
    <Layout flexBasis={20} />
    <Divider weight={divider} backgroundColor='background.ghostPrimary' />
    <Layout flexBasis={20} />
  </Column>
)
