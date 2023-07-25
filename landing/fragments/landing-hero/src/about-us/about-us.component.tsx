import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }          from '@ui/divider'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Text }             from '@ui/text'
import { Space }            from '@ui/text'

export const AboutUs = () => (
  <Column height={[225, 499]} width={[335, 1460]}>
    <Box display='inline' minWidth={[335, 920]} maxWidth={[335, 1166]}>
      <Text color='white' fontSize={['major', 'huge']} lineHeight={['medium', 'normal']}>
        <FormattedMessage id='hero.train-professionals' />
      </Text>
      <Text color='white' fontSize={['major', 'huge']} lineHeight={['medium', 'normal']}>
        <FormattedMessage id='hero.for-revolution-in' />
      </Text>
      <Space count={4} />

      <Box
        display='inline-flex'
        width={[49, 134]}
        height={[39, 116]}
        justifyContent='center'
        alignItems='center'
        backgroundColor='background.ghost'
        borderRadius={['small', 'big']}
      >
        <Text color='white' fontSize={['major', 'big']} lineHeight={['medium', 'normal']}>
          <FormattedMessage id='hero.it' />
        </Text>
      </Box>
    </Box>
    <Layout flexBasis={[24, 48]} />
    <Divider weight={1} backgroundColor='background.ghorsWhite' />
    <Layout flexBasis={[24, 48]} />
    <Box width={[335, 640]} display='inline'>
      <Text color='white' fontSize={['medium', 'regular']} lineHeight='medium'>
        <FormattedMessage id='hero.we-not-teach-programming' />
      </Text>
      <Space count={2} />
      <Text
        color='white'
        fontSize={['medium', 'regular']}
        lineHeight='medium'
        letterSpacing={['-0.008em', '0']}
        display={['flex', 'inline']}
      >
        <FormattedMessage id='hero.we-teach-thinking' />
      </Text>
    </Box>
  </Column>
)
