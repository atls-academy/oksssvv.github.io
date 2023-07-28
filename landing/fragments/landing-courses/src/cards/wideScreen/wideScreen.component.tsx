import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { Link }             from 'react-scroll'
import { useIntl }          from 'react-intl'

import { Background }       from '@ui/background'
import { Button }           from '@ui/button'
import { Card }             from '@ui/card'
import { ScrollIcon }       from '@ui/icon'
import { ArrowPointerIcon } from '@ui/icon'
import { Image }            from '@ui/image'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Swiper }           from '@ui/swiper'
import { SwiperSlide }      from '@ui/swiper'
import { Text }             from '@ui/text'
import { useHover }         from '@ui/utils'

export const WideScreenCards = () => {
    const intl = useIntl()

    const CardContainer = ({ title, indent }) => (
    <>
      <Column width={{ wide: 570, ultra: 668 }}>
        <Card
          widthCategory={{wide:180,ultra:250}}
          сategory={intl.formatMessage({ id: 'courses.card.education-material' })}
          gap={{wide:110,ultra:45}}
          title={title}
        />
        <Layout flexBasis={40} />
      </Column>
      <Layout flexBasis={indent} />
    </>
    )

    return(
    Array.from({ length: 5 }).map((_, index) => (
    <CardContainer
      key={index} /*eslint-disable-line */
      title={
        index < 3
          ? intl.formatMessage({ id: 'courses.card.use-library' })
          : intl.formatMessage({ id: 'courses.card.design-figma-math' })
      }
      indent={index === 2 ? 0 : 40}
    />

    )))
  }
