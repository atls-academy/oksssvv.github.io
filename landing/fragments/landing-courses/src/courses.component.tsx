import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Button }           from '@ui/button'
import { Divider }          from '@ui/divider'
import { ArrowRightIcon }   from '@ui/icon'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { NextLink }         from '@ui/link'
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
            <FormattedMessage id='courses.courses-and-materials' />
          </Text>
        </Box>
        <Layout flexBasis={[464]} />

        <Box width={254} alignItems='center' display={['none', 'flex']} flexShrink='0'>
          <NextLink path='/library' width='100%'>
            <Button
              variant='primary'
              size='bigSizeNormalPadding'
              gap={24}
              icon={<ArrowRightIcon width={6} height={12} />}
              widthIcon={48}
              heightIcon={48}
              backgroundIcon='background.white'
              radiusIcon='medium'
              fill
            >
              <Text fontSize={['middle', 'regular']} color='text.white'>
                <FormattedMessage id='courses.all-materials' />
              </Text>
            </Button>
          </NextLink>
        </Box>
      </Row>
      <Layout flexBasis={[40, 80]} />
      <Divider weight={1} backgroundColor='background.primary' />
      <Layout flexBasis={[40, 80]} />
      <Box flexDirection={['column', 'row']}>
        <Box maxWidth={[335, 710]} display='inline'>
          <Text fontSize={['regular', 'normal']} lineHeight='medium'>
            <FormattedMessage id='courses.being-a-cardinal' />
          </Text>
          <Space count={2} />
          <Text fontSize={['regular', 'normal']} lineHeight='medium' color='text.accent'>
            <FormattedMessage id='courses.atlantis' defaultMessage='Atlantis' />
            <Space count={1} />
          </Text>
          <Text fontSize={['regular', 'normal']} lineHeight='medium' display='inline'>
            <FormattedMessage id='courses.has-an-impact' />
          </Text>
          <Space count={2} />
          <Text fontSize={['regular', 'normal']} lineHeight='medium' color='text.accent'>
            <FormattedMessage id='courses.it-sphere' defaultMessage='сферу IT' />
          </Text>
          <Box display={['none', 'inline']}>
            <Space count={2} />
          </Box>
          <Text fontSize={['regular', 'normal']} lineHeight='medium' display='inline'>
            <FormattedMessage id='courses.unlimited-possibilities' />
          </Text>
          <Space count={2} />
          <Text fontSize={['regular', 'normal']} lineHeight='medium' color='text.accent'>
            <FormattedMessage id='courses.application-skills' />
          </Text>
        </Box>
        <Layout flexBasis={[20, 341]} />
        <Box maxWidth={[335, 559]} display='inline'>
          <Text fontSize={['regular', 'normal']} lineHeight='medium' display='inline'>
            <FormattedMessage id='courses.learning-efficiency-grows' />
          </Text>
          <Space count={2} />
          <Text fontSize={['regular', 'normal']} lineHeight='medium' color='text.accent'>
            <FormattedMessage id='courses.practice' />
          </Text>
          <Space count={2} />
          <Text fontSize={['regular', 'normal']} lineHeight='medium' display='inline'>
            <FormattedMessage id='courses.on-existing-projects' />
          </Text>
        </Box>
      </Box>
      <Layout flexBasis={[40, 80]} />
      <Cards />
      <Layout flexBasis={[20, 160]} />

      <Box width={335} display={['flex', 'none']} flexShrink='0'>
        <NextLink path='/library' width='100%'>
          <Button
            variant='primary'
            size='smallSizeNormalPadding'
            gap={155}
            icon={<ArrowRightIcon width={6} height={12} />}
            widthIcon={32}
            heightIcon={32}
            backgroundIcon='background.white'
            radiusIcon='little'
            fill
          >
            <Text fontSize='middle' lineHeight='regular' color='text.white'>
              <FormattedMessage id='courses.all-materials' />
            </Text>
          </Button>
        </NextLink>
      </Box>

      <Layout flexBasis={[100, 80]} />
    </Column>
    <Layout flexBasis={[20, 80]} />
  </Row>
)
