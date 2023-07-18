import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { Button }           from '@ui/button'
import { CardDetails }      from '@ui/card'
import { CardExtended }     from '@ui/card'
import { CardShort }        from '@ui/card'
import { ScrollIcon }       from '@ui/icon'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Swiper }           from '@ui/swiper'
import { SwiperSlide }      from '@ui/swiper'
import { Text }             from '@ui/text'

const Cards = () => {
  const intl = useIntl()
  return (
    <Box flexDirection={['column', 'row']}>
      <Column order={[1, 0]} maxWidth={[335, 1160]}>
        <CardExtended
          category={intl.formatMessage({ id: 'courses.card.education' })}
          gap={[148, 214]}
          title={intl.formatMessage({ id: 'courses.card.frontend-engineer' })}
          description={intl.formatMessage({
            id: 'courses.card.desktop.you-will-learn-fundamental-knowledge-in-IT',
          })}
          descriptionMobile={intl.formatMessage({
            id: 'courses.card.mobile.you-will-learn-fundamental-knowledge-in-IT',
          })}
        />
        <Layout flexBasis={[20, 40]} />
        <CardExtended
          category={intl.formatMessage({ id: 'courses.card.mini-cours' })}
          gap={[93, 54]}
          title={intl.formatMessage({ id: 'courses.card.basics-development' })}
          description={intl.formatMessage({
            id: 'courses.card.desktop.you-will-learn-fundamental-knowledge-in-IT',
          })}
          descriptionMobile={intl.formatMessage({
            id: 'courses.card.mobile.you-will-learn-fundamental-knowledge-in-IT',
          })}
        />
        <Layout flexBasis={[20, 40]} />
        <Box display={['flex', 'none']}>
          <Swiper
            spaceBetween={12}
            slidesPerView={1.23}
            slidesOffsetAfter={-10}
            className='CardSlider'
          >
            <SwiperSlide>
              <CardShort
                category={intl.formatMessage({
                  id: 'courses.card.education-material',
                })}
                title={intl.formatMessage({
                  id: 'courses.card.use-library',
                })}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardShort
                category={intl.formatMessage({
                  id: 'courses.card.education-material',
                })}
                title={intl.formatMessage({ id: 'courses.card.design-figma-math' })}
              />
            </SwiperSlide>
          </Swiper>
        </Box>
        <Box display={['none', 'flex']}>
          <CardShort
            category={intl.formatMessage({
              id: 'courses.card.education-material',
            })}
            title={intl.formatMessage({ id: 'courses.card.use-library' })}
          />
          <Layout flexBasis={40} />
          <CardShort
            category={intl.formatMessage({
              id: 'courses.card.education-material',
            })}
            title={intl.formatMessage({ id: 'courses.card.design-figma-math' })}
          />
        </Box>
      </Column>
      <Layout flexBasis={[0, 40]} />
      <Column order={[0, 1]}>
        <CardDetails
          info={intl.formatMessage({
            id: 'courses.card.you-learn-fundamental-knowledge-field-it',
          })}
          quantity={5}
          description={intl.formatMessage({
            id: 'courses.card.student-education-one-group',
          })}
        />
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
        <Layout flexBasis={[40, 0]} />
      </Column>
    </Box>
  )
}

export { Cards }
