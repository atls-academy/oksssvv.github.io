import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }          from '@ui/divider'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'

import { Cards }            from './cards'

export const Courses = () => (
  <Row justifyContent='center'>
    <Layout flexBasis={[20, 230]} flexShrink='0' />
    <Column width={['335px', '1610px']} flexShrink='0'>
      <Layout flexBasis={[64, 160]} />
      <Row>
        <Box width={[335, 868]} flexShrink='0'>
          <Text fontSize={['large', 'huge']} letterSpacing='-0.009em'>
            <FormattedMessage id='/' defaultMessage='Курсы и материалы' />
          </Text>
        </Box>
        <Layout flexBasis={[596]} />
        <Box alignItems='center' display={['none', 'flex']} flexShrink='0'>
          <Text fontSize={['middle', 'regular']}>
            <FormattedMessage id='/' defaultMessage='Все материалы' />
          </Text>
        </Box>
      </Row>
      <Layout flexBasis={[40, 80]} />
      <Divider weight={1} backgroundColor='black' />
      <Layout flexBasis={[40, 80]} />
      <Box flexDirection={['column', 'row']}>
        <Box width={[335, 710]} display='inline' flexShrink='0'>
          <Text fontSize={['regular', 'normal']} lineHeight='medium'>
            <FormattedMessage
              id='/'
              defaultMessage='Являясь серым кардиналом, Atlantis имеет влияние на сферу IT и неограниченные возможности в применении навыков. '
            />
          </Text>
        </Box>
        <Layout flexBasis={[20, 341]} />
        <Box width={[335, 559]} display='inline' flexShrink='0'>
          <Text fontSize={['regular', 'normal']} lineHeight='medium'>
            <FormattedMessage
              id='/'
              defaultMessage='Эффективность обучения заметно вырастает благодаря практике на существующих проектах. '
            />
          </Text>
        </Box>
      </Box>
      <Layout flexBasis={[56, 80]} />
      <Cards />
      <Layout flexBasis={[12, 160]} />
      <Box display={['flex', 'none']} alignItems='center'>
        <Text fontSize='middle' lineHeight='regular'>
          <FormattedMessage id='/' defaultMessage='Все материалы' />
        </Text>
      </Box>
      <Layout flexBasis={[64, 0]} />
    </Column>
    <Layout flexBasis={[20, 80]} flexShrink='0' />
  </Row>
)
