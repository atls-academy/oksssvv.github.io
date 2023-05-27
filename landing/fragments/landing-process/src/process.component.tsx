import React       from 'react'
import { useIntl } from 'react-intl'

import { Divider } from '@ui/divider'
import { Layout }  from '@ui/layout'
import { Column }  from '@ui/layout'
import { Row }     from '@ui/layout'

import { Items }   from './items'

export const Process = () => {
  const intl = useIntl()
  return (
    <Row width='100%' justifyContent='center'>
      <Layout flexBasis={[20, 80]} flexShrink='0'/>
      <Column width={[335, 1760]}>
        <Layout flexBasis={[64, 160]} />
        <Items
          quantity={intl.formatMessage({ id: '/', defaultMessage: '1' })}
          title={intl.formatMessage({ id: '/', defaultMessage: 'Интеграция в команду' })}
        />
        <Layout flexBasis={[28, 48]} />
        <Divider weight={1} backgroundColor='divider.transparent' />
        <Layout flexBasis={[28, 48]} />
        <Items
          quantity={intl.formatMessage({ id: '/', defaultMessage: '2' })}
          title={intl.formatMessage({ id: '/', defaultMessage: 'Создание среды' })}
        />
        <Layout flexBasis={[28, 48]} />
        <Divider weight={1} backgroundColor='divider.transparent' />
        <Layout flexBasis={[28, 48]} />
        <Items
          quantity={intl.formatMessage({ id: '/', defaultMessage: '3' })}
          title={intl.formatMessage({ id: '/', defaultMessage: 'Изучение технологий' })}
        />
        <Layout flexBasis={[28, 48]} />
        <Divider weight={1} backgroundColor='divider.transparent' />
        <Layout flexBasis={[28, 48]} />
        <Items
          quantity={intl.formatMessage({ id: '/', defaultMessage: '4' })}
          title={intl.formatMessage({ id: '/', defaultMessage: 'Практика изученого' })}
        />
        <Layout flexBasis={[28, 48]} />
        <Divider weight={1} backgroundColor='divider.transparent' />
        <Layout flexBasis={[28, 48]} />
        <Items
          quantity={intl.formatMessage({ id: '/', defaultMessage: '5' })}
          title={intl.formatMessage({ id: '/', defaultMessage: 'Интеграция в проект' })}
        />
        <Layout flexBasis={[56, 160]} />
      </Column>
      <Layout flexBasis={[20,80]} flexShrink='0'/>
    </Row>
  )
}
