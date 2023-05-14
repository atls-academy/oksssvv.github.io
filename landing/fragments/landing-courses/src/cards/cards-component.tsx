import React            from 'react'
import { useIntl }      from 'react-intl'

import { Box }          from '@ui/layout'
import { Column }       from '@ui/layout'
import { Layout }       from '@ui/layout'

import { CardConcise }  from './card-concise'
import { CardExtended } from './card-extended'

const Cards = () => {
  const intl = useIntl()
  return (
    <Column>
      <CardExtended
        category={intl.formatMessage({ id: '/', defaultMessage: 'Обучение' })}
        gap={[148, 216]}
        title={intl.formatMessage({ id: '/', defaultMessage: 'Frontend Engineer' })}
        desc={intl.formatMessage({
          id: '/',
          defaultMessage:
            'Вы изучите фундаментальные знания в ИТ и прокачаетесь  в направлении программирования. Получите востребованную профессию и возможность открыть бизнес в сфере информационных технологий',
        })}
        descMobile={intl.formatMessage({
          id: '/',
          defaultMessage:
            'Вы изучите фундаментальные знания в ИТ и прокачаетесь в программирование. Получите востребованную профессию и возможность открыть бизнес.',
        })}
      />
      <Layout flexBasis={[20, 40]} />
      <CardExtended
        category={intl.formatMessage({ id: '/', defaultMessage: 'Мини-курс' })}
        gap={[93, 56]}
        title={intl.formatMessage({ id: '/', defaultMessage: 'Основы разработки' })}
        desc={intl.formatMessage({
          id: '/',
          defaultMessage:
            'Вы изучите фундаментальные знания в ИТ и прокачаетесь  в направлении программирования. Получите востребованную профессию и возможность открыть бизнес в сфере информационных технологий',
        })}
        descMobile={intl.formatMessage({
          id: '/',
          defaultMessage:
            'Вы изучите фундаментальные знания в ИТ и прокачаетесь в программирование. Получите востребованную профессию и возможность открыть бизнес.',
        })}
      />
      <Layout flexBasis={[20, 40]} />
      <Box>
        <CardConcise
          category={intl.formatMessage({ id: '/', defaultMessage: 'Учебный материал' })}
          title={intl.formatMessage({ id: '/', defaultMessage: 'Как использовать библиотеки' })}
        />
        <Layout flexBasis={[20, 40]} flexShrink='0' />
        <CardConcise
          category={intl.formatMessage({ id: '/', defaultMessage: 'Учебный материал' })}
          title={intl.formatMessage({ id: '/', defaultMessage: 'Дизайн, Figma, Математика' })}
        />
      </Box>
    </Column>
  )
}

export { Cards }
