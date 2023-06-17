import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Text }             from '@ui/text'

import { Sphere }           from './sphere'

export const Info = () => (
  <Row justifyContent='center'>
    <Layout flexBasis={[20, 230]} flexShrink='0' />
    <Column>
      <Layout flexBasis={[64, 160]} />
      <Column width={[335, 1460]}>
        <Box display={['none', 'inline']}>
          <Text
            display='inline'
            color='text.white'
            fontSize={['regular', 'great']}
            lineHeight='medium'
          >
            <FormattedMessage
              id='/'
              defaultMessage='Digital становится всё более многолюдным, востребованность по направлениям при этом не снижается'
            />
          </Text>
          <Sphere />
          <Text
            display='inline'
            color='text.white'
            fontSize={['regular', 'great']}
            lineHeight='medium'
          >
            <FormattedMessage
              id='/'
              defaultMessage='Но специалистов, готовых нести ответсвенность за свои решения по прежднему мало'
            />
          </Text>
          <Sphere />
        </Box>
        <Box display={['inline', 'none']} width={320}>
          <Text color='text.white' fontSize={['regular', 'great']} lineHeight='medium'>
            <FormattedMessage
              id='/'
              defaultMessage='Digital становится всё более многолюдным, востребованность по направлениям при этом '
            />
          </Text>
          <Text color='text.white' fontSize={['regular', 'great']} lineHeight='medium'>
            <FormattedMessage
              id='/'
              defaultMessage='не снижается. Но специалистов, готовых нести ответсвенность'
            />
          </Text>
          <Text color='text.white' fontSize={['regular', 'great']} lineHeight='medium'>
            <FormattedMessage id='/' defaultMessage='за свои решения по-прежнему мало.' />
          </Text>
        </Box>
        <Layout flexBasis={[24, 40]} />
        <Box display='inline'>
          <Text
            display={['none', 'inline']}
            color='text.white'
            fontSize={['regular', 'great']}
            lineHeight='medium'
          >
            <FormattedMessage
              id='/'
              defaultMessage='Atlantis Academy формирует инженеров и архитекторов, а не программистов и дизайнеров'
            />
          </Text>
          <Box display={['inline', 'none']}>
            <Text color='text.white' fontSize={['regular', 'great']} lineHeight='medium'>
              <FormattedMessage
                id='/'
                defaultMessage='Atlantis Academy формирует инженеров и архитекторов,'
              />
            </Text>
            <Text color='text.white' fontSize={['regular', 'great']} lineHeight='medium'>
              <FormattedMessage id='/' defaultMessage='а не программистов и дизайнеров.' />
            </Text>
          </Box>
          <Sphere />
        </Box>
      </Column>
      <Layout flexBasis={[64, 160]} />
    </Column>
    <Layout flexBasis={[20, 230]} flexShrink='0' />
  </Row>
)
