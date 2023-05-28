import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { Button }           from '@ui/button'
import { IconPlus }         from '@ui/icon'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Swiper }           from '@ui/slider'
import { SwiperSlide }      from '@ui/slider'
import { Text }             from '@ui/text'

import { CardDetails }      from './card-details'
import { CardExtended }     from './card-extended'
import { CardShort }        from './card-short'

const Cards = () => {
  const intl = useIntl()
  return (
    <Box flexDirection={['column', 'row']}>
      <Column order={[1, 0]}>
        <CardExtended
          category={intl.formatMessage({ id: '/', defaultMessage: 'Обучение' })}
          gap={[148, 216]}
          title={intl.formatMessage({ id: '/', defaultMessage: 'Frontend Engineer' })}
          desc={intl.formatMessage({
            id: '/',
            defaultMessage:
              'Вы изучите фундаментальные знания в ИТ и прокачаетесь  в направлении программирования. Получите востребованную профессию и возможность открыть бизнес в сфере информационных технологий',
          })}
          descMobile={intl.formatMessage({
            id: '/',
            defaultMessage:
              'Вы изучите фундаментальные знания в ИТ и прокачаетесь в программирование. Получите востребованную профессию и возможность открыть бизнес.',
          })}
        />
        <Layout flexBasis={[20, 40]} />
        <CardExtended
          category={intl.formatMessage({ id: '/', defaultMessage: 'Мини-курс' })}
          gap={[93, 56]}
          title={intl.formatMessage({ id: '/', defaultMessage: 'Основы разработки' })}
          desc={intl.formatMessage({
            id: '/',
            defaultMessage:
              'Вы изучите фундаментальные знания в ИТ и прокачаетесь  в направлении программирования. Получите востребованную профессию и возможность открыть бизнес в сфере информационных технологий',
          })}
          descMobile={intl.formatMessage({
            id: '/',
            defaultMessage:
              'Вы изучите фундаментальные знания в ИТ и прокачаетесь в программирование. Получите востребованную профессию и возможность открыть бизнес.',
          })}
        />
        <Layout flexBasis={[20, 40]} />
        <Box display={['flex', 'none']}>
          <Swiper
            spaceBetween={10}
            slidesPerView={1.22}
            slidesOffsetAfter={-10}
            className='CardSlider'
          >
            <SwiperSlide>
              <CardShort
                category={intl.formatMessage({ id: '/', defaultMessage: 'Учебный материал' })}
                title={intl.formatMessage({
                  id: '/',
                  defaultMessage: 'Как использовать библиотеки',
                })}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardShort
                category={intl.formatMessage({ id: '/', defaultMessage: 'Учебный материал' })}
                title={intl.formatMessage({ id: '/', defaultMessage: 'Дизайн, Figma, Математика' })}
              />
            </SwiperSlide>
          </Swiper>
        </Box>
        <Box display={['none', 'flex']}>
          <CardShort
            category={intl.formatMessage({ id: '/', defaultMessage: 'Учебный материал' })}
            title={intl.formatMessage({ id: '/', defaultMessage: 'Как использовать библиотеки' })}
          />
          <Layout flexBasis={40} flexShrink='0' />
          <CardShort
            category={intl.formatMessage({ id: '/', defaultMessage: 'Учебный материал' })}
            title={intl.formatMessage({ id: '/', defaultMessage: 'Дизайн, Figma, Математика' })}
          />
        </Box>
      </Column>
      <Layout flexBasis={[0, 40]} flexShrink='0' />
      <Column order={[0, 1]}>
        <CardDetails
          info={intl.formatMessage({
            id: '/',
            defaultMessage:
              'Вы изучите фундаментальные знания в IT и прокачаете нужные для сферы навыки. Мы не собираем большие группы, что позволяет курировать работу каждого студента.',
          })}
          quantity={intl.formatMessage({ id: '/', defaultMessage: '5' })}
          desc={intl.formatMessage({
            id: '/',
            defaultMessage: 'студентов обучаются в одной практической группе',
          })}
        />
        <Layout flexBasis={20} />
        <Box display={['none', 'flex']} width={410} alignItems='center'>
          <Button
            size='longButtonSmallPaddingMediumHeight'
            variant='darkPurpleBackground'
            gap='28%'
            iconSVG={<IconPlus />}
            iconWidth={48}
            iconHeight={48}
            iconRadius='normal'
            fill
          >
            <Text fontSize='regular' lineHeight='regular'>
              <FormattedMessage id='/' defaultMessage='Процесс поступления' />
            </Text>
          </Button>
        </Box>
        <Box display={['flex', 'none']} width={335} alignItems='center'>
          <Button
            size='longButtonNormalPaddingMediumHeight'
            variant='darkPurpleBackground'
            gap={110}
            iconSVG={<IconPlus />}
            iconWidth={32}
            iconHeight={32}
            iconRadius='little'
            fill
          >
            <Text fontSize='middle' lineHeight='small'>
              <FormattedMessage id='/' defaultMessage='Процесс поступления' />
            </Text>
          </Button>
        </Box>
        <Layout flexBasis={[40, 0]} />
      </Column>
    </Box>
  )
}

export { Cards }
