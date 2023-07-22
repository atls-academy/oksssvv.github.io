import React         from 'react'
import { useIntl }   from 'react-intl'

import { CardShort } from '@ui/card'
import { Layout }    from '@ui/layout'
import { Column }    from '@ui/layout'

export const CardShortBlock = ({ gap, title }) => {
  const intl = useIntl()
  return (
    <>
      <Column>
        <CardShort
          category={intl.formatMessage({
            id: '/',
            defaultMessage: 'Учебный материал',
          })}
          title={title}
        />
        <Layout flexBasis={40} />
      </Column>
      <Layout flexBasis={gap} />
    </>
  )
}
