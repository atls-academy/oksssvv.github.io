import React          from 'react'
import { useIntl }    from 'react-intl'

import { CardMobile } from '@ui/card'

export const CardsMobile = () => {
  const intl = useIntl()

  return (
    <>
      <CardMobile
        category={intl.formatMessage({ id: 'navigation.card.base' })}
        title={intl.formatMessage({ id: 'navigation.card.frontend-engineer' })}
        widthContainer={87}
        divider={1}
      />
      <CardMobile
        category={intl.formatMessage({ id: 'navigation.card.advanced' })}
        title={intl.formatMessage({ id: 'navigation.card.frontend-engineer' })}
        widthContainer={122}
        divider={1}
      />
      <CardMobile
        category={intl.formatMessage({ id: 'navigation.card.base' })}
        title={intl.formatMessage({ id: 'navigation.card.backend-engineer' })}
        widthContainer={87}
        divider={0}
      />
    </>
  )
}
