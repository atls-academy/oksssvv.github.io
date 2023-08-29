import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { Button }           from '@ui/button'
import { Card }             from '@ui/card'
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

import { Cards }            from './cards'
import { useCourses }       from './data'

export const Courses = () => {
  const courses = useCourses()
  const intl = useIntl()
  const atlantisInfo = courses?.data?.sections.nodes[5].content.split('.')[0].split(' ')
  const educationInfo = courses?.data?.sections.nodes[5].content.split('.')[1].split(' ')

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
                {courses?.data?.sections.nodes[5].sections.title}
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
            <Box maxWidth={{ _: 335, standard: 710, ultra: 1065 }} display='inline' flexWrap='wrap'>
              <Text
                fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
                lineHeight='medium'
              >
                {atlantisInfo?.slice(0, 3).join(' ')}
              </Text>
              <Space count={2} />
              <Text
                fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
                lineHeight='medium'
                color='text.accent'
              >
                {atlantisInfo?.slice(3, 4).join(' ')}
              </Text>
              <Space count={2} />
              <Text
                display='inline'
                fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
                lineHeight='medium'
              >
                {atlantisInfo?.slice(4, 7).join(' ')}
              </Text>
              <Space count={2} />
              <Text
                fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
                lineHeight='medium'
                color='text.accent'
              >
                {atlantisInfo?.slice(7, 9).join(' ')}
              </Text>
              <Box display={['none', 'inline']}>
                <Space count={2} />
              </Box>
              <Text
                display='inline'
                fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
                lineHeight='medium'
              >
                {atlantisInfo?.slice(9, 13).join(' ')}
              </Text>
              <Space count={2} />
              <Text
                fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
                lineHeight='medium'
                color='text.accent'
              >
                {atlantisInfo?.slice(13, 15).join(' ')}
              </Text>
            </Box>
            <Layout flexBasis={{ _: 20, standard: 341, wide: 980, ultra: 696 }} />
            <Box maxWidth={{ _: 335, standard: 559, ultra: 838 }} display='inline'>
              <Text
                fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
                lineHeight='medium'
                display='inline'
              >
                {educationInfo?.slice(0, 5).join(' ')}
              </Text>
              <Space count={2} />
              <Text
                fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
                lineHeight='medium'
                color='text.accent'
              >
                {educationInfo?.slice(5, 6).join(' ')}
              </Text>
              <Space count={2} />
              <Text
                fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
                lineHeight='medium'
                display='inline'
              >
                {educationInfo?.slice(6, 9).join(' ')}
              </Text>
            </Box>
          </Box>
          <Layout flexBasis={[40, 80]} />
          <Cards />
        </Column>
        <Layout flexBasis={{ _: 20, standard: 80, ultra: 620 }} />
      </Row>
      <Box display={['flex', 'none']} overflow='hidden' justifyContent='center'>
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
    </>
  )
}
