import React          from 'react'
import { useIntl }    from 'react-intl'

import { CardMobile } from '@ui/card'

export const CardsMobile = () => {
  const intl = useIntl()

  return (
    <>
      <CardMobile
        category={intl.formatMessage({ id: '/', defaultMessage: 'Базовый' })}
        title={intl.formatMessage({ id: '/', defaultMessage: 'Frontend Engineer' })}
        widthContainer={87}
        divider={1}
      />
      <CardMobile
        category={intl.formatMessage({ id: '/', defaultMessage: 'Продвинутый' })}
        title={intl.formatMessage({ id: '/', defaultMessage: 'Frontend Engineer' })}
        widthContainer={122}
        divider={1}
      />
      <CardMobile
        category={intl.formatMessage({ id: '/', defaultMessage: 'Базовый' })}
        title={intl.formatMessage({ id: '/', defaultMessage: 'Backend Engineer' })}
        widthContainer={87}
        divider={0}
      />
    </>
  )
}
