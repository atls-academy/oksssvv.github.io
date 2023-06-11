import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Logo }             from '@ui/logo'
import { Text }             from '@ui/text'

import { Item }   from './item'

export const Navigation = () => {
  const intl = useIntl()
  return (
    <Column>
      <Layout flexBasis={[22, 35]} />
      <Row justifyContent='center'>
        <Layout flexBasis={[0, 40]} flexShrink='0' />
        <Box width={[40, 56]} flexShrink='0'>
          <Logo />
        </Box>
        <Row display={['none', 'flex']} justifyContent='center' alignItems='center'>
          <Item
            title={intl.formatMessage({ id: '/', defaultMessage: 'Academy' })}
            path='/'
          />
          <Layout flexBasis={20} flexShrink='0' />
          <Item
            title={intl.formatMessage({ id: '/', defaultMessage: 'Курсы' })}
            path='/'
          />
          <Layout flexBasis={20} flexShrink='0' />
          <Item
            title={intl.formatMessage({ id: '/', defaultMessage: 'Обучение' })}
            path='/'
          />
          <Layout flexBasis={20} flexShrink='0' />
          <Item title={intl.formatMessage({ id: '/', defaultMessage: 'FAQ' })} path='/' />
        </Row>
        <Box display={['none', 'flex']} alignItems='center' flexShrink='0'>
          <Text color='white' fontSize='standard' lineHeight='small'>
            <FormattedMessage id='/' defaultMessage='Курсы' />
          </Text>
        </Box>
        <Layout flexBasis={[0, 40]} flexShrink='0' />
      </Row>
      <Layout flexBasis={[22, 35]} />
    </Column>
  )
}
