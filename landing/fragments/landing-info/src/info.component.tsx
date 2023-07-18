import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Text }             from '@ui/text'

import { Sphere }           from './sphere'

export const Info = () => (
  <Row height={[450, 670]} justifyContent='center'>
    <Layout flexBasis={[20, 230]} />
    <Column height={[300, 590]}>
      <Layout flexBasis={[64, 160]} flexShrink={[0, 1]} />
      <Column maxWidth={[335, 1460]}>
        <Box display={['none', 'inline']}>
          <Text display='inline' color='text.white' fontSize='great' lineHeight='medium'>
            <FormattedMessage id='info.desktop.digital-is-becoming-more-and-more-crowded' />
          </Text>
          <Sphere />
          <Text display='inline' color='text.white' fontSize='great' lineHeight='medium'>
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
            fontSize='great'
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
    <Layout flexBasis={[20, 230]} />
  </Row>
)
