import React       from 'react'
import { useIntl } from 'react-intl'

import { Card }    from '@ui/card'
import { Column }  from '@ui/layout'
import { Layout }  from '@ui/layout'

export const WideScreenCards = () => {
  const intl = useIntl()

  const CardContainer = ({ title, indent }) => (
    <>
      <Column width={{ wide: 570, ultra: 668 }}>
        <Card
          widthCategory={{ wide: 180, ultra: 250 }}
          сategory={intl.formatMessage({ id: 'courses.card.education-material' })}
          gap={{ wide: 110, ultra: 45 }}
          title={title}
        />
        <Layout flexBasis={40} />
      </Column>
      <Layout flexBasis={indent} />
    </>
  )

  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <CardContainer
          key={index} /*eslint-disable-line */
          title={
            index < 3
              ? intl.formatMessage({ id: 'courses.card.use-library' })
              : intl.formatMessage({ id: 'courses.card.design-figma-math' })
          }
          indent={index === 2 ? 0 : 40}
        />
      ))}
    </>
  )
}
