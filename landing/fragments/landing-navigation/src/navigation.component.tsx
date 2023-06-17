import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { Button }           from '@ui/button'
import { ArrowDownIcon }    from '@ui/icon'
import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Logo }             from '@ui/logo'
import { Text }             from '@ui/text'

import { Item }             from './item'

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
          <Item title={intl.formatMessage({ id: '/', defaultMessage: 'Academy' })} path='/' />
          <Layout flexBasis={20} flexShrink='0' />
          <Item title={intl.formatMessage({ id: '/', defaultMessage: 'Курсы' })} path='/' />
          <Layout flexBasis={20} flexShrink='0' />
          <Item title={intl.formatMessage({ id: '/', defaultMessage: 'Обучение' })} path='/' />
          <Layout flexBasis={20} flexShrink='0' />
          <Item title={intl.formatMessage({ id: '/', defaultMessage: 'FAQ' })} path='/' />
        </Row>
        <Box width={163} display={['none', 'flex']} alignItems='center' flexShrink='0'>
          <Button
            variant='primary'
            size='normalSizeNormalPadding'
            gap='14%'
            icon={<ArrowDownIcon width={12} height={6} />}
            containerWidth={48}
            containerHeight={48}
            containerColor='rgba(255, 255, 255, 1)'
            fill
          >
            <Text color='white' fontSize='regular' lineHeight='small'>
              <FormattedMessage id='/' defaultMessage='Курсы' />
            </Text>
          </Button>
        </Box>
        <Layout flexBasis={[0, 40]} flexShrink='0' />
      </Row>
      <Layout flexBasis={[22, 35]} />
    </Column>
  )
}
