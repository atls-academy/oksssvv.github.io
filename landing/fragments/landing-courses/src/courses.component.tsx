import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Button }           from '@ui/button'
import { Divider }          from '@ui/divider'
import { ArrowRightIcon }   from '@ui/icon'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'
import { Space }            from '@ui/text'

import { Cards }            from './cards'

export const Courses = () => (
  <Row justifyContent='center'>
    <Layout flexBasis={[20, 230]} />
    <Column width={['335px', '1610px']}>
      <Layout flexBasis={[64, 160]} />
      <Row>
        <Box width={[335, 880]}>
          <Text fontSize={['large', 'huge']} lineHeight='regular'>
            <FormattedMessage id='/' defaultMessage='Курсы и материалы' />
          </Text>
        </Box>
        <Layout flexBasis={[464]} />
        <Box width={254} alignItems='center' display={['none', 'flex']} flexShrink='0'>
          <Button
            variant='primary'
            size='bigSizeNormalPadding'
            gap={24}
            icon={<ArrowRightIcon width={6} height={12} />}
            containerWidth={48}
            containerHeight={48}
            containerColor='rgba(255, 255, 255, 1)'
            containerRadius={16}
            fill
          >
            <Text fontSize={['middle', 'regular']} color='text.white'>
              <FormattedMessage id='/' defaultMessage='Все материалы' />
            </Text>
          </Button>
        </Box>
      </Row>
      <Layout flexBasis={[40, 80]} />
      <Divider weight={1} backgroundColor='background.primary' />
      <Layout flexBasis={[40, 80]} />
      <Box flexDirection={['column', 'row']}>
        <Box maxWidth={[335, 710]} display='inline'>
          <Text fontSize={['regular', 'normal']} lineHeight='medium'>
            <FormattedMessage id='/' defaultMessage='Являясь серым кардиналом,' />
          </Text>
          <Space count={2} />
          <Text fontSize={['regular', 'normal']} lineHeight='medium' color='text.accent'>
            <FormattedMessage id='/' defaultMessage='Atlantis' />
            <Space count={1} />
          </Text>
          <Text fontSize={['regular', 'normal']} lineHeight='medium' display='inline'>
            <FormattedMessage id='/' defaultMessage='имеет влияние на' />
          </Text>
          <Space count={2} />
          <Text fontSize={['regular', 'normal']} lineHeight='medium' color='text.accent'>
            <FormattedMessage id='/' defaultMessage='сферу IT' />
          </Text>
          <Box display={['none', 'inline']}>
            <Space count={2} />
          </Box>
          <Text fontSize={['regular', 'normal']} lineHeight='medium' display='inline'>
            <FormattedMessage id='/' defaultMessage='и неограниченные возможности в' />
          </Text>
          <Space count={2} />
          <Text fontSize={['regular', 'normal']} lineHeight='medium' color='text.accent'>
            <FormattedMessage id='/' defaultMessage='применении навыков.' />
          </Text>
        </Box>
        <Layout flexBasis={[20, 341]} />
        <Box maxWidth={[335, 559]} display='inline'>
          <Text fontSize={['regular', 'normal']} lineHeight='medium' display='inline'>
            <FormattedMessage
              id='/'
              defaultMessage='Эффективность обучения заметно вырастает благодаря'
            />
          </Text>
          <Space count={2} />
          <Text fontSize={['regular', 'normal']} lineHeight='medium' color='text.accent'>
            <FormattedMessage id='/' defaultMessage='практике' />
          </Text>
          <Space count={2} />
          <Text fontSize={['regular', 'normal']} lineHeight='medium' display='inline'>
            <FormattedMessage id='/' defaultMessage='на существующих проектах. ' />
          </Text>
        </Box>
      </Box>
      <Layout flexBasis={[40, 80]} />
      <Cards />
      <Layout flexBasis={[20, 160]} />
      <Box width={335} display={['flex', 'none']} flexShrink='0'>
        <Button
          variant='primary'
          size='SmallSizeNormalPadding'
          gap={155}
          icon={<ArrowRightIcon width={6} height={12} />}
          containerWidth={32}
          containerHeight={32}
          containerColor='rgba(255, 255, 255, 1)'
          containerRadius={8}
          fill
        >
          <Text fontSize='middle' lineHeight='regular' color='text.white'>
            <FormattedMessage id='/' defaultMessage='Все материалы' />
          </Text>
        </Button>
      </Box>
      <Layout flexBasis={[100, 80]} />
    </Column>
    <Layout flexBasis={[20, 80]} />
  </Row>
)
