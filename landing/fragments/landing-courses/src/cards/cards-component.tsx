import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { Background }       from '@ui/background'
import { Button }           from '@ui/button'
import { Card }             from '@ui/card'
import { ScrollIcon }       from '@ui/icon'
import { Image }            from '@ui/image'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Swiper }           from '@ui/swiper'
import { SwiperSlide }      from '@ui/swiper'
import { Text }             from '@ui/text'

export const Cards = () => {
  const intl = useIntl()
  return (
    <Box flexDirection={['column', 'row']}>
      <Column order={[1, 0]} width='100%'>
        <Card
          widthCategory={[80, 104]}
          nameCategory={intl.formatMessage({ id: 'courses.card.education' })}
          gap={[104, 214]}
          widthContent={[303, 694]}
          title={intl.formatMessage({ id: 'courses.card.frontend-engineer' })}
          description={intl.formatMessage({
            id: 'courses.card.desktop.you-will-learn-fundamental-knowledge-in-IT',
          })}
        />
        <Layout flexBasis={[20, 40]} />
        <Card
          widthCategory={[87, 112]}
          nameCategory={intl.formatMessage({ id: 'courses.card.mini-cours' })}
          gap={[49, 56]}
          widthContent={[303, 694]}
          title={intl.formatMessage({ id: 'courses.card.basics-development' })}
          description={intl.formatMessage({
            id: 'courses.card.desktop.you-will-learn-fundamental-knowledge-in-IT',
          })}
        />
        <Layout flexBasis={[20, 40]} />
        <Box display={['none', 'flex']} width='100%'>
          <Card
            widthCategory={180}
            nameCategory={intl.formatMessage({ id: 'courses.card.education-material' })}
            gap={110}
            title={intl.formatMessage({ id: 'courses.card.use-library' })}
          />
          <Layout flexBasis={40} />
          <Card
            widthCategory={180}
            nameCategory={intl.formatMessage({ id: 'courses.card.education-material' })}
            gap={110}
            title={intl.formatMessage({ id: 'courses.card.design-figma-math' })}
          />
        </Box>

        <Box display={['flex', 'none']}>
          <Swiper
            spaceBetween={20}
            slidesPerView={1.2}
            slidesOffsetAfter={1}
            className='CardSlider'
          >
            <SwiperSlide>
              <Card
                widthCategory={135}
                nameCategory={intl.formatMessage({
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
                nameCategory={intl.formatMessage({
                  id: 'courses.card.education-material',
                })}
                gap={62}
                widthContent={220}
                title={intl.formatMessage({ id: 'courses.card.design-figma-math' })}
              />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Column>
      <Layout flexBasis={[0, 40]} />
      <Column order={[0, 1]}>
        <Background
          backgroundColor='grayGradient'
          borderRadius={['medium', 'big']}
          border='lightGray'
          width={[335, 410]}
          display='flex'
        >
          <Layout flexBasis={[16, 32]} />
          <Column>
            <Layout flexBasis={[16, 32]} />
            <Box width={[302, 346]}>
              <Text fontSize={['medium', 'middle']} lineHeight={['medium', 'large']}>
                {intl.formatMessage({
                  id: 'courses.card.you-learn-fundamental-knowledge-field-it',
                })}
              </Text>
            </Box>
            <Layout flexBasis={[0, 74]} />
            <Box display={['none', 'flex']} justifyContent='center'>
              <Image src='/sphere-white.png' width={240} />
            </Box>
            <Layout flexBasis={[16, 62]} />
            <Box
              height={[64, 116]}
              flexDirection={['row', 'column']}
              alignItems={['center', 'start']}
            >
              <Box>
                <Text fontSize={['solid', 'massive']} lineHeight='small' color='text.accent'>
                  5
                </Text>
              </Box>
              <Layout flexBasis={[12, 8]} />
              <Box width={[125, 188]}>
                <Text fontSize={['little', 'medium']} lineHeight={['interim', 'large']}>
                  {intl.formatMessage({
                    id: 'courses.card.student-education-one-group',
                  })}
                </Text>
              </Box>
              <Layout flexBasis={[70, 0]} />
              <Box display={['flex', 'none']} justifyContent='center'>
                <Image src='/sphere-white.png' width={64} />
              </Box>
            </Box>
            <Layout flexBasis={[16, 32]} />
          </Column>
          <Layout flexBasis={[16, 32]} />
        </Background>
        <Layout flexBasis={[0, 20]} />
        <Box width={[410]} display={['none', 'flex']} alignItems='center' flexShrink='0'>
          <Button
            variant='primary'
            size='bigSizeNormalPadding'
            gap={121}
            icon={<ScrollIcon width={12} height={18} />}
            widthIcon={48}
            heightIcon={48}
            backgroundIcon='background.white'
            radiusIcon='medium'
            fill
          >
            <Text fontSize='regular' lineHeight='regular' color='text.white'>
              <FormattedMessage id='courses.button.process' />
            </Text>
          </Button>
        </Box>
      </Column>
      <Layout flexBasis={[40, 0]} />
    </Box>
  )
}
