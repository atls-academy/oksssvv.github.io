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

const Courses = () => (
  <Row>
    <Layout flexBasis={[20, 230]} />
    <Column width={['335px', '1460px']}>
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
        <Layout flexBasis={[0, 344]} flexShrink='0' />
        <Box display={['none', 'flex']} width={253} alignItems='center'>
          <Button
            size='longButtonSmallPaddingMediumHeight'
            variant='darkPurpleBackground'
            gap={23}
            iconSVG={<IconArrowRight />}
            iconWidth={48}
            iconHeight={48}
            iconRadius='medium'
            fill
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
        <Box width={[335, 710]}>
          <Text display='inline' lineHeight={['small', 'medium']} letterSpacing='-0.01em'>
            <Text color='text.indigo' fontSize={['averaged', 'normal']}>
              <FormattedMessage id='/' defaultMessage='Являясь серым кардиналом,' />
            </Text>
            <Space />
            <Text fontSize={['averaged', 'normal']} color='text.accent'>
              <FormattedMessage id='/' defaultMessage='Atlantis' />
            </Text>
            <Space />
            <Text fontSize={['averaged', 'normal']} display='inline' color='text.indigo'>
              <FormattedMessage id='/' defaultMessage='имеет влияние на' />
            </Text>
            <Space />
            <Text fontSize={['averaged', 'normal']} display='inline' color='text.accent'>
              <FormattedMessage id='/' defaultMessage='сферу IT' />
            </Text>
            <Space />
            <Text fontSize={['averaged', 'normal']} display='inline' color='text.indigo'>
              <FormattedMessage id='/' defaultMessage='и неограниченные возможности в' />
            </Text>
            <Space />
            <Text fontSize={['averaged', 'normal']} display='inline' color='text.accent'>
              <FormattedMessage id='/' defaultMessage='применении навыков.' />
            </Text>
          </Text>
        </Box>
        <Layout flexBasis={[20, 191]} />
        <Box width={[335, 559]}>
          <Text fontSize={['averaged', 'normal']} display='inline' lineHeight='medium'>
            <Text fontSize={['averaged', 'normal']} display='inline' color='text.indigo'>
              <FormattedMessage
                id='/'
                defaultMessage='Эффективность обучение заметно вырастает из-за'
              />
            </Text>
            <Space />
            <Text fontSize={['averaged', 'normal']} color='text.accent'>
              <FormattedMessage id='/' defaultMessage=' практики ' />
            </Text>
            <Space />
            <Text fontSize={['averaged', 'normal']} display='inline' color='text.indigo'>
              <FormattedMessage id='/' defaultMessage='на существующих проектах.' />
            </Text>
          </Text>
        </Box>
      </Box>
      <Layout flexBasis={[40, 80]} />
      <Cards />
      <Layout flexBasis={[20, 141]} />
      <Box display={['flex', 'none']} flexShrink='0' alignItems='center'>
        <Button
          size='longButtonNormalPaddingMediumHeight'
          variant='darkPurpleBackground'
          gap={151}
          iconSVG={<IconArrowRight />}
          iconWidth={32}
          iconHeight={32}
          iconRadius='little'
          fill
        >
          <Text fontSize='middle' lineHeight='regular' letterSpacing='0.03em'>
            <FormattedMessage id='/' defaultMessage='Все материалы' />
          </Text>
        </Button>
      </Box>
      <Layout flexBasis={64} />
    </Column>
  </Row>
)

export { Courses }
