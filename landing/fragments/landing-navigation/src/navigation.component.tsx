import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Logo }             from '@ui/logo'
import { Text }             from '@ui/text'

import { NavigationItem }   from './navigation-item'

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
          <NavigationItem
            title={intl.formatMessage({ id: '/', defaultMessage: 'Academy' })}
            link='/'
          />
          <Layout flexBasis={20} flexShrink='0' />
          <NavigationItem
            title={intl.formatMessage({ id: '/', defaultMessage: 'Курсы' })}
            link='/'
          />
          <Layout flexBasis={20} flexShrink='0' />
          <NavigationItem
            title={intl.formatMessage({ id: '/', defaultMessage: 'Обучение' })}
            link='/'
          />
          <Layout flexBasis={20} flexShrink='0' />
          <NavigationItem title={intl.formatMessage({ id: '/', defaultMessage: 'FAQ' })} link='/' />
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
