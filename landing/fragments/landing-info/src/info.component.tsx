import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { PlugIcon }         from '@ui/icon'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Text }             from '@ui/text'
import { Space }            from '@ui/text'

export const Info = () => (
  <Row justifyContent='center'>
    <Layout flexBasis={[20, 230]} flexShrink='0' />
    <Column>
      <Layout flexBasis={[64, 160]} />
      <Column width={[335, 1460]}>
        <Box display='inline'>
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
          <Box display={['none', 'inline']} verticalAlign='sub'>
            <Space count={8} />
            <PlugIcon width={40} height={40} />
            <Space count={5} />
          </Box>
          <Space count={3} />
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
          <Box display={['none', 'inline']} verticalAlign='sub'>
            <Space count={8} />
            <PlugIcon width={40} height={40} />
          </Box>
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
                defaultMessage='Atlantis Academy формирует инженеров и архитекторов, а не программистов и дизайнеров'
              />
            </Text>
          </Box>
          <Box display={['none', 'inline']} verticalAlign='sub'>
            <Space count={8} />
            <PlugIcon width={40} height={40} />
          </Box>
        </Box>
      </Column>
      <Layout flexBasis={[64, 160]} />
    </Column>
    <Layout flexBasis={[20, 230]} flexShrink='0' />
  </Row>
)
