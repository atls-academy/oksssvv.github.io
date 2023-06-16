import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { CardDetails }      from '@ui/card'
import { CardExtended }     from '@ui/card'
import { CardShort }        from '@ui/card'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Swiper }           from '@ui/slider'
import { SwiperSlide }      from '@ui/slider'
import { Text }             from '@ui/text'

const Cards = () => {
  const intl = useIntl()
  return (
    <Box flexDirection={['column', 'row']}>
      <Column order={[1, 0]} width={[335, 1160]}>
        <CardExtended
          title={intl.formatMessage({ id: '/', defaultMessage: 'Frontend Engineer' })}
          description={intl.formatMessage({
            id: '/',
            defaultMessage:
              'Вы изучите фундаментальные знания в ИТ и прокачаетесь  в направлении программирования. Получите востребованную профессию и возможность открыть бизнес в сфере информационных технологий',
          })}
          descriptionMobile={intl.formatMessage({
            id: '/',
            defaultMessage:
              'Вы изучите фундаментальные знания в ИТ и прокачаетесь в программирование. Получите востребованную профессию и возможность открыть бизнес.',
          })}
        />
        <Layout flexBasis={[12, 40]} />
        <CardExtended
          title={intl.formatMessage({ id: '/', defaultMessage: 'Основы разработки' })}
          description={intl.formatMessage({
            id: '/',
            defaultMessage:
              'Вы изучите фундаментальные знания в ИТ и прокачаетесь  в направлении программирования. Получите востребованную профессию и возможность открыть бизнес в сфере информационных технологий',
          })}
          descriptionMobile={intl.formatMessage({
            id: '/',
            defaultMessage:
              'Вы изучите фундаментальные знания в ИТ и прокачаетесь в программирование. Получите востребованную профессию и возможность открыть бизнес.',
          })}
        />
        <Layout flexBasis={[0, 20]} />
        <Box display={['flex', 'none']}>
          <Swiper
            spaceBetween={0}
            slidesPerView={1.5}
            slidesOffsetAfter={-10}
            className='CardSlider'
          >
            <SwiperSlide>
              <CardShort
                title={intl.formatMessage({
                  id: '/',
                  defaultMessage: 'Как использовать библиотеки',
                })}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardShort
                title={intl.formatMessage({ id: '/', defaultMessage: 'Дизайн, Figma, Математика' })}
              />
            </SwiperSlide>
          </Swiper>
        </Box>
        <Box display={['none', 'flex']}>
          <CardShort
            title={intl.formatMessage({ id: '/', defaultMessage: 'Как использовать библиотеки' })}
          />
          <Layout flexBasis={40} flexShrink='0' />
          <CardShort
            title={intl.formatMessage({ id: '/', defaultMessage: 'Дизайн, Figma, Математика' })}
          />
        </Box>
      </Column>
      <Layout flexBasis={[0, 72]} flexShrink='0' />
      <Column order={[0, 1]}>
        <CardDetails
          info={intl.formatMessage({
            id: '/',
            defaultMessage:
              'Вы изучите фундаментальные знания в IT и прокачаете нужные для сферы навыки. Мы не собираем большие группы, что позволяет курировать работу каждого студента.',
          })}
          quantity={intl.formatMessage({ id: '/', defaultMessage: '5' })}
          description={intl.formatMessage({
            id: '/',
            defaultMessage: 'студентов обучаются в одной практической группе',
          })}
        />
        <Layout flexBasis={[0, 20]} />
        <Box display={['none', 'flex']} width={410} alignItems='center'>
          <Text fontSize='regular' lineHeight='regular'>
            <FormattedMessage id='/' defaultMessage='Процесс поступления' />
          </Text>
        </Box>
        <Layout flexBasis={[40, 0]} />
      </Column>
    </Box>
  )
}

export { Cards }
