import React       from 'react'
import { useIntl } from 'react-intl'

import { Card }    from '@ui/card'
import { Layout }  from '@ui/layout'
import { Box }     from '@ui/layout'
import { Row }     from '@ui/layout'

export const CardsDesktop = () => {
  const intl = useIntl()

  const Cards = () => (
    <Box width={610}>
      <Card
        widthCategory={[80, 104]}
        сategory={intl.formatMessage({ id: 'courses.card.education' })}
        gap={[104, 214]}
        widthContent={[303, 513]}
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
          <Cards />
          <Layout flexBasis={index < 2 ? 30 : 0} />
        </Row>
      ))}
    </>
  )
}
