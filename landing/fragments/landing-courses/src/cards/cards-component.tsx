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
          category={intl.formatMessage({ id: '/', defaultMessage: 'Обучение' })}
          gap={[148, 214]}
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
        <Layout flexBasis={[20, 40]} />
        <CardExtended
          category={intl.formatMessage({ id: '/', defaultMessage: 'Мини-курс' })}
          gap={[93, 54]}
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
                  id: '/',
                  defaultMessage: 'Учебный материал',
                })}
                title={intl.formatMessage({
                  id: '/',
                  defaultMessage: 'Как использовать библиотеки',
                })}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CardShort
                category={intl.formatMessage({
                  id: '/',
                  defaultMessage: 'Учебный материал',
                })}
                title={intl.formatMessage({ id: '/', defaultMessage: 'Дизайн, Figma, Математика' })}
              />
            </SwiperSlide>
          </Swiper>
        </Box>
        <Box display={['none', 'flex']}>
          <CardShort
            category={intl.formatMessage({
              id: '/',
              defaultMessage: 'Учебный материал',
            })}
            title={intl.formatMessage({ id: '/', defaultMessage: 'Как использовать библиотеки' })}
          />
          <Layout flexBasis={40} />
          <CardShort
            category={intl.formatMessage({
              id: '/',
              defaultMessage: 'Учебный материал',
            })}
            title={intl.formatMessage({ id: '/', defaultMessage: 'Дизайн, Figma, Математика' })}
          />
        </Box>
      </Column>
      <Layout flexBasis={[0, 40]} />
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
        <Box width={[410]} display={['none', 'flex']} alignItems='center' flexShrink='0'>
          <Button
            variant='primary'
            size='bigSizeNormalPadding'
            gap={121}
            icon={<ScrollIcon width={12} height={18} />}
            valueWidthIcon={48}
            valueHeightIcon={48}
            valueBackgroundIcon='background.white'
            valueRadiusIcon='medium'
            fill
          >
            <Text fontSize='regular' lineHeight='regular' color='text.white'>
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
