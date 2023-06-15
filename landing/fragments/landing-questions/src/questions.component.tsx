import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

import { Items }            from './items'

export const Questions = () => (
  <Row justifyContent='center'>
    <Layout flexBasis={[16, 230]} flexShrink='0' />
    <Column width={[343, 1610]}>
      <Layout flexBasis={[80, 160]} />
      <Row>
        <Box width={[335, 915]} flexShrink='0'>
          <Text fontSize={['normal', 'huge']} lineHeight={['regular', 'medium']}>
            <FormattedMessage id='/' defaultMessage='Вопросы и ответы' />
          </Text>
        </Box>
        <Layout flexBasis={[0, 555]} flexShrink='0' />
        <Box display={['none', 'flex']} alignItems='center' flexShrink='0'>
          <Text fontSize='regular'>
            <FormattedMessage id='/' defaultMessage='Задать вопрос' />
          </Text>
        </Box>
      </Row>
      <Layout flexBasis={[30, 80]} />
      <Items />
      <Layout flexBasis={[60, 0]} />
      <Box display={['flex', 'none']} flexShrink='0'>
        <Text fontSize='regular'>
          <FormattedMessage id='/' defaultMessage='Задать вопрос' />
        </Text>
      </Box>
      <Layout flexBasis={[80, 160]} />
    </Column>
    <Layout flexBasis={[16, 80]} flexShrink='0' />
  </Row>
)
