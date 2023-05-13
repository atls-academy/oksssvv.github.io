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
            letterSpacing='-0.011em'
          >
            <FormattedMessage id='/' defaultMessage='Курсы и материалы' />
          </Text>
        </Box>
        <Layout flexBasis={[0, 344]} flexShrink='0' />
        <Box display={['none', 'flex']} flexShrink='0' alignItems='center'>
          <Button size='longButtonSmallPaddingMediumHeight' variant='darkPurpleBackground'>
            <Text fontSize='regular' lineHeight='regular' letterSpacing='0.03em'>
              <FormattedMessage id='/' defaultMessage='Все материалы' />
            </Text>
            <Layout flexBasis={24} />
            <IconArrowRight />
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
    </Column>
  </Row>
)

export { Courses }
