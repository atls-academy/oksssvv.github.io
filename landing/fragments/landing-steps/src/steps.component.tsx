import React        from 'react'
import { useIntl }  from 'react-intl'

import { PlugIcon } from '@ui/icon'
import { Layout }   from '@ui/layout'
import { Column }   from '@ui/layout'
import { Row }      from '@ui/layout'
import { Box }      from '@ui/layout'

import { Item }     from './item'

export const Steps = () => {
  const intl = useIntl()
  return (
    <Row justifyContent='center'>
      <Layout flexBasis={[20, 80]}/>
      <Column width={[335, 1760]}>
        <Layout flexBasis={[36, 112]} />
        <Item
          quantity={intl.formatMessage({ id: '/', defaultMessage: '1' })}
          title={intl.formatMessage({ id: '/', defaultMessage: 'Интеграция в команду' })}
          divider={1}
        />
        <Item
          quantity={intl.formatMessage({ id: '/', defaultMessage: '2' })}
          title={intl.formatMessage({ id: '/', defaultMessage: 'Создание среды' })}
          divider={1}
        />
        <Item
          quantity={intl.formatMessage({ id: '/', defaultMessage: '3' })}
          title={intl.formatMessage({ id: '/', defaultMessage: 'Изучение технологий' })}
          divider={1}
        />
        <Item
          quantity={intl.formatMessage({ id: '/', defaultMessage: '4' })}
          title={intl.formatMessage({ id: '/', defaultMessage: 'Практика изученого' })}
          divider={1}
        />
        <Item
          quantity={intl.formatMessage({ id: '/', defaultMessage: '5' })}
          title={intl.formatMessage({ id: '/', defaultMessage: 'Интеграция в проект' })}
        />
        <Box display={['none', 'flex']} position='absolute' marginLeft='640px' marginTop='320px'>
          <PlugIcon width={400} height={400} />
        </Box>
        <Layout flexBasis={[0, 112]} />
      </Column>
      <Layout flexBasis={[20, 80]}/>
    </Row>
  )
}
