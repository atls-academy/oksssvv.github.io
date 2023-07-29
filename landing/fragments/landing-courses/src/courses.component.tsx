import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { Button }           from '@ui/button'
import { Card }             from '@ui/card'
import { Condition }        from '@ui/condition'
import { Divider }          from '@ui/divider'
import { ArrowRightIcon }   from '@ui/icon'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Swiper }           from '@ui/swiper'
import { SwiperSlide }      from '@ui/swiper'
import { Text }             from '@ui/text'
import { Space }            from '@ui/text'
import { useWindow }        from '@ui/utils'

import { Cards }            from './cards'

export const Courses = () => {
  const intl = useIntl()
  const { isMobile } = useWindow()
  return (
    <>
      <Row justifyContent='center'>
        <Layout flexBasis={{ _: 20, standard: 230, ultra: 620 }} />
        <Column width={{ _: 335, standard: 1610, wide: 2250, ultra: 2600 }}>
          <Layout flexBasis={[64, 160]} />
          <Row>
            <Box width={{ _: 335, standard: 880, ultra: 1350 }}>
              <Text
                fontSize={{ _: 'large', standard: 'huge', ultra: 'super' }}
                lineHeight='regular'
              >
                <FormattedMessage id='courses.courses-and-materials' />
              </Text>
            </Box>
            <Layout flexBasis={[464]} />

            <Box
              width={254}
              alignItems='center'
              display={{ _: 'none', standard: 'flex', wide: 'none', ultra: 'none' }}
              flexShrink='0'
            >
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
            <Box maxWidth={{ _: 335, standard: 710, ultra: 1065 }} display='inline'>
              <Text
                fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
                lineHeight='medium'
              >
                <FormattedMessage id='courses.being-a-cardinal' />
              </Text>
              <Space count={2} />
              <Text
                fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
                lineHeight='medium'
                color='text.accent'
              >
                <FormattedMessage id='courses.atlantis' />
                <Space count={1} />
              </Text>
              <Text
                fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
                lineHeight='medium'
                display='inline'
              >
                <FormattedMessage id='courses.has-an-impact' />
              </Text>
              <Space count={2} />
              <Text
                fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
                lineHeight='medium'
                color='text.accent'
              >
                <FormattedMessage id='courses.atlantis' />
              </Text>
              <Box display={['none', 'inline']}>
                <Space count={2} />
              </Box>
              <Text
                fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
                lineHeight='medium'
                display='inline'
              >
                <FormattedMessage id='courses.unlimited-possibilities' />
              </Text>
              <Space count={2} />
              <Text
                fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
                lineHeight='medium'
                color='text.accent'
              >
                <FormattedMessage id='courses.application-skills' />
              </Text>
            </Box>
            <Layout flexBasis={{ _: 20, standard: 341, wide: 980, ultra: 696 }} />
            <Box maxWidth={{ _: 335, standard: 559, ultra: 838 }} display='inline'>
              <Text
                fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
                lineHeight='medium'
                display='inline'
              >
                <FormattedMessage id='courses.learning-efficiency-grows' />
              </Text>
              <Space count={2} />
              <Text
                fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
                lineHeight='medium'
                color='text.accent'
              >
                <FormattedMessage id='courses.practice' />
              </Text>
              <Space count={2} />
              <Text
                fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
                lineHeight='medium'
                display='inline'
              >
                <FormattedMessage id='courses.on-existing-projects' />
              </Text>
            </Box>
          </Box>
          <Layout flexBasis={[40, 80]} />
          <Cards />
        </Column>
        <Layout flexBasis={{ _: 20, standard: 80, ultra: 620 }} />
      </Row>

      <Condition match={isMobile}>
        <Box overflow='hidden' justifyContent='center'>
          <Layout flexBasis={20} flexShrink='0' />
          <Column>
            <Box width={354}>
              <Swiper
                spaceBetween={20}
                slidesPerView={1.35}
                slidesOffsetAfter={24}
                className='CardSlider'
              >
                <SwiperSlide>
                  <Card
                    widthCategory={135}
                    сategory={intl.formatMessage({
                      id: 'courses.card.education-material',
                    })}
                    gap={62}
                    widthContent={220}
                    title={intl.formatMessage({
                      id: 'courses.card.use-library',
                    })}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Card
                    widthCategory={135}
                    сategory={intl.formatMessage({
                      id: 'courses.card.education-material',
                    })}
                    gap={62}
                    widthContent={220}
                    title={intl.formatMessage({ id: 'courses.card.design-figma-math' })}
                  />
                </SwiperSlide>
              </Swiper>
            </Box>

            <Layout flexBasis={40} />

            <Box width={335} flexShrink='0'>
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
          </Column>
        </Box>
      </Condition>
    </>
  )
}
