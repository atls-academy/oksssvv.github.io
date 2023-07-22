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

import { CardsStandard }    from './cards-standard'
import { CardsWide }        from './cards-wide'

export const Courses = () => (
  <Row justifyContent='center'>
    <Layout flexBasis={{ _: 20, standard: 230, ultra: 620 }} />
    <Column width={{ _: 335, standard: 1610, wide: 2250, ultra: 2600 }}>
      <Layout flexBasis={[64, 160]} />
      <Row>
        <Box width={{ _: 335, standard: 880, ultra: 1350 }}>
          <Text fontSize={{ _: 'large', standard: 'huge', ultra: 'super' }} lineHeight='regular'>
            <FormattedMessage id='/' defaultMessage='Курсы и материалы' />
          </Text>
        </Box>
        <Layout flexBasis={[464]} />
        <NextLink path='/library'>
          <Box
            width={254}
            alignItems='center'
            display={{ _: 'none', standard: 'flex', wide: 'none', ultra: 'none' }}
            flexShrink='0'
          >
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
                <FormattedMessage id='/' defaultMessage='Все материалы' />
              </Text>
            </Button>
          </Box>
        </NextLink>
      </Row>
      <Layout flexBasis={[40, 80]} />
      <Divider weight={1} backgroundColor='background.primary' />
      <Layout flexBasis={[40, 80]} />
      <Box flexDirection={['column', 'row']}>
        <Box maxWidth={{ _: 335, standard: 710, ultra: 1065 }} display='inline'>
          <Text
            fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
            lineHeight='medium'
          >
            <FormattedMessage id='/' defaultMessage='Являясь серым кардиналом,' />
          </Text>
          <Space count={2} />
          <Text
            fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
            lineHeight='medium'
            color='text.accent'
          >
            <FormattedMessage id='/' defaultMessage='Atlantis' />
            <Space count={1} />
          </Text>
          <Text
            fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
            lineHeight='medium'
            display='inline'
          >
            <FormattedMessage id='/' defaultMessage='имеет влияние на' />
          </Text>
          <Space count={2} />
          <Text
            fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
            lineHeight='medium'
            color='text.accent'
          >
            <FormattedMessage id='/' defaultMessage='сферу IT' />
          </Text>
          <Box display={['none', 'inline']}>
            <Space count={2} />
          </Box>
          <Text
            fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
            lineHeight='medium'
            display='inline'
          >
            <FormattedMessage id='/' defaultMessage='и неограниченные возможности в' />
          </Text>
          <Space count={2} />
          <Text
            fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
            lineHeight='medium'
            color='text.accent'
          >
            <FormattedMessage id='/' defaultMessage='применении навыков.' />
          </Text>
        </Box>
        <Layout flexBasis={{ _: 20, standard: 341, wide: 980, ultra: 696 }} />
        <Box maxWidth={{ _: 335, standard: 559, ultra: 838 }} display='inline'>
          <Text
            fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
            lineHeight='medium'
            display='inline'
          >
            <FormattedMessage
              id='/'
              defaultMessage='Эффективность обучения заметно вырастает благодаря'
            />
          </Text>
          <Space count={2} />
          <Text
            fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
            lineHeight='medium'
            color='text.accent'
          >
            <FormattedMessage id='/' defaultMessage='практике' />
          </Text>
          <Space count={2} />
          <Text
            fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
            lineHeight='medium'
            display='inline'
          >
            <FormattedMessage id='/' defaultMessage='на существующих проектах. ' />
          </Text>
        </Box>
      </Box>
      <Layout flexBasis={[40, 80]} />
      <CardsStandard />
      <CardsWide />
      <Layout flexBasis={{ _: 20, standard: 160, wide: 120, ultra: 0 }} />
      <NextLink path='/library'>
        <Box width={335} display={['flex', 'none']} flexShrink='0'>
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
              <FormattedMessage id='/' defaultMessage='Все материалы' />
            </Text>
          </Button>
        </Box>
      </NextLink>
      <Layout flexBasis={[100, 80]} />
    </Column>
    <Layout flexBasis={{ _: 20, standard: 80, ultra: 620 }} />
  </Row>
)
