import React       from 'react'
import { useIntl } from 'react-intl'

import { Card }    from '@ui/card'
import { Layout }  from '@ui/layout'
import { Box }     from '@ui/layout'
import { Row }     from '@ui/layout'

export const CardsDesktop = () => {
  const intl = useIntl()

  const Cards = () => (
    <Box width={{ standard: '100%', ultra: '100%' }}>
      <Card
        widthCategory={{ standard: 104, ultra: 150 }}
        сategory={intl.formatMessage({ id: 'courses.card.education' })}
        gap={{ standard: 214, ultra: 100 }}
        widthContent={{ standard: 513, ultra: 760 }}
        title={intl.formatMessage({ id: 'courses.card.frontend-engineer' })}
        description={intl.formatMessage({
          id: 'courses.card.desktop.you-will-learn-fundamental-knowledge-in-IT',
        })}
      />
    </Box>
  )
  return (
    <>
      {Array.from({ length: 3 }).map((_, index) => (
        // eslint-disable-next-line
        <Row key={index}>
          <Layout flexBasis={40} />
          <Cards />
          <Layout flexBasis={index === 2 ? 40 : 0} />
        </Row>
      ))}
    </>
  )
}
