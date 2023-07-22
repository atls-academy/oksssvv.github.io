import React            from 'react'
import { useIntl }      from 'react-intl'

import { CardExtended } from '@ui/card'
import { Layout }       from '@ui/layout'
import { Box }          from '@ui/layout'

export const CardDesktop = (gap) => {
  const intl = useIntl()
  return (
    <Box width={593}>
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
      <Layout flexBasis={gap} />
    </Box>
  )
}
