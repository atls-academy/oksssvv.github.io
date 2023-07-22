import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Text }             from '@ui/text'

import { Sphere }           from './sphere'

export const Info = () => (
  <Row height={{ _: 450, standard: 710, wide: 800, ultra: 900 }} justifyContent='center'>
    <Layout flexBasis={{ _: 20, standard: 230, wide: 230, ultra: 620 }} />
    <Column height={[300, 590]}>
      <Layout flexBasis={[64, 160]} flexShrink={[0, 1]} />
      <Column width={{ _: 335, standard: 1460, wide: 1460, ultra: 2190 }}>
        <Box display={['none', 'inline']}>
          <Text
            display='inline'
            color='text.white'
            fontSize={{ standard: 'great', ultra: 'massive' }}
            lineHeight='medium'
          >
            <FormattedMessage id='info.desktop.digital-is-becoming-more-and-more-crowded' />
          </Text>
          <Sphere />
          <Text
            display='inline'
            color='text.white'
            fontSize={{ standard: 'great', ultra: 'massive' }}
            lineHeight='medium'
          >
            <FormattedMessage id='info.desktop.but-there-are-still-few-specialists' />
          </Text>
          <Sphere />
        </Box>
        <Box display={['inline', 'none']} width={320}>
          <Text color='text.white' fontSize='regular' lineHeight='interim'>
            <FormattedMessage id='info.mobile.digital-is-becoming-more-and-more-crowded' />
          </Text>
          <Text color='text.white' fontSize='regular' lineHeight='interim'>
            <FormattedMessage id='info.mobile.does-not-decrease-but-specialists' />
          </Text>
          <Text color='text.white' fontSize='regular' lineHeight='interim'>
            <FormattedMessage id='info.mobile.for-their-decisions-is-still-not-enough' />
          </Text>
        </Box>
        <Layout flexBasis={[24, 40]} />
        <Box display='inline'>
          <Text
            display={['none', 'inline']}
            color='text.white'
            fontSize={{ standard: 'great', ultra: 'massive' }}
            lineHeight='medium'
          >
            <FormattedMessage id='info.desktop.atlantis-academy-trains-engineers' />
          </Text>
          <Box display={['inline', 'none']}>
            <Text color='text.white' fontSize='regular' lineHeight='interim'>
              <FormattedMessage id='info.mobile.atlantis-academy-trains-engineers' />
            </Text>
            <Text color='text.white' fontSize='regular' lineHeight='interim'>
              <FormattedMessage id='info.mobile.not-programmers-and-designers' />
            </Text>
          </Box>
          <Sphere />
        </Box>
      </Column>
      <Layout flexBasis={[64, 240]} />
    </Column>
    <Layout flexBasis={{ _: 20, standard: 230, wide: 860, ultra: 1030 }} />
  </Row>
)
