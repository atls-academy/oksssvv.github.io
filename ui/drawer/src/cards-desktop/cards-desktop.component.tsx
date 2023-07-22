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
      <Layout flexBasis={gap} />
    </Box>
  )
}
