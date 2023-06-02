import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Button }           from '@ui/button'
import { Divider }          from '@ui/divider'
import { IconArrowRight }   from '@ui/icon'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'
import { Space }            from '@ui/text'

import { Cards }            from './cards'

export const Courses = () => (
  <Row width='100%' justifyContent='center'>
    <Layout flexBasis={[20, 230]} flexShrink='0' />
    <Column width={['335px', '1460px']} flexShrink='0'>
      <Layout flexBasis={[64, 160]} />
      <Box>
        <Box>
          <Text
            fontSize={['large', 'huge']}
            lineHeight='normal'
            color='text.indigo'
            letterSpacing='-0.01em'
          >
            <FormattedMessage id='/' defaultMessage='Курсы и материалы' />
          </Text>
        </Box>
        <Layout flexBasis={[0, 344]} />
        <Box display={['none', 'flex']} width={253} alignItems='center' flexShrink='0'>
          <Button
            size='longButtonSmallPaddingMediumHeight'
            variant='darkPurpleBackground'
            gap='8%'
            iconSVG={<IconArrowRight />}
            iconWidth={48}
            iconHeight={48}
            iconRadius='medium'
            buttonFill
          >
            <Text fontSize='regular' lineHeight='regular'>
              <FormattedMessage id='/' defaultMessage='Все материалы' />
            </Text>
          </Button>
        </Box>
      </Box>
      <Layout flexBasis={[40, 80]} />
      <Divider weight={1} backgroundColor='divider.lightGray' />
      <Layout flexBasis={[40, 80]} />
      <Box flexDirection={['column', 'row']}>
        <Box width={[335, 710]} display='inline' flexShrink='0'>
          <Text color='text.indigo' fontSize={['averaged', 'normal']} lineHeight='medium'>
            <FormattedMessage id='/' defaultMessage='Являясь серым кардиналом,' />
          </Text>
          <Space count={2} />
          <Text fontSize={['averaged', 'normal']} color='text.accent' lineHeight='medium'>
            <FormattedMessage id='/' defaultMessage='Atlantis' />
          </Text>
          <Space count={2} />
          <Text
            fontSize={['averaged', 'normal']}
            display='inline'
            color='text.indigo'
            lineHeight='medium'
          >
            <FormattedMessage id='/' defaultMessage='имеет влияние на' />
          </Text>
          <Space count={2} />
          <Text
            fontSize={['averaged', 'normal']}
            display='inline'
            color='text.accent'
            lineHeight='medium'
          >
            <FormattedMessage id='/' defaultMessage='сферу IT' />
          </Text>
          <Space count={2} />
          <Text
            fontSize={['averaged', 'normal']}
            display='inline'
            color='text.indigo'
            lineHeight='medium'
          >
            <FormattedMessage id='/' defaultMessage='и неограниченные возможности в' />
          </Text>
          <Space count={2} />
          <Text
            fontSize={['averaged', 'normal']}
            display='inline'
            color='text.accent'
            lineHeight='medium'
          >
            <FormattedMessage id='/' defaultMessage='применении навыков.' />
          </Text>
        </Box>
        <Layout flexBasis={[20, 191]} />
        <Box width={[335, 559]} display='inline' flexShrink='0'>
          <Text
            fontSize={['averaged', 'normal']}
            display='inline'
            color='text.indigo'
            lineHeight='medium'
          >
            <FormattedMessage
              id='/'
              defaultMessage='Эффективность обучение заметно вырастает из-за'
            />
          </Text>
          <Space count={2} />
          <Text fontSize={['averaged', 'normal']} color='text.accent' lineHeight='medium'>
            <FormattedMessage id='/' defaultMessage=' практики ' />
          </Text>
          <Space count={2} />
          <Text
            fontSize={['averaged', 'normal']}
            display='inline'
            color='text.indigo'
            lineHeight='medium'
          >
            <FormattedMessage id='/' defaultMessage='на существующих проектах.' />
          </Text>
        </Box>
      </Box>
      <Layout flexBasis={[40, 80]} />
      <Cards />
      <Layout flexBasis={[20, 141]} />
      <Box display={['flex', 'none']} alignItems='center'>
        <Button
          size='longButtonNormalPaddingMediumHeight'
          variant='darkPurpleBackground'
          gap={157}
          iconSVG={<IconArrowRight />}
          iconWidth={32}
          iconHeight={32}
          iconRadius='little'
          buttonFill
        >
          <Text fontSize='middle' lineHeight='regular'>
            <FormattedMessage id='/' defaultMessage='Все материалы' />
          </Text>
        </Button>
      </Box>
      <Layout flexBasis={[64, 0]} />
    </Column>
    <Layout flexBasis={[20, 230]} flexShrink='0' />
  </Row>
)
