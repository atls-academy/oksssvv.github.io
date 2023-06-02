import React            from 'react'

import { Divider }      from '@ui/divider'
import { Layout }       from '@ui/layout'
import { Column }       from '@ui/layout'
import { Row }          from '@ui/layout'

import { Line }         from './line'
import { KitWebDev }    from './technology'
import { KitWorkspace } from './technology'

export const Ticker = () => (
  <Column>
    <Layout flexBasis={[0, 64]} />
    <Divider weight={1} backgroundColor='divider.transparent' />
    <Layout flexBasis={[36, 64]} />
    <Row overflow='hidden'>
      <Line technology={KitWebDev} font='primary' />
    </Row>
    <Layout flexBasis={[36, 64]} />
    <Row overflow='hidden'>
      <Line technology={KitWorkspace} font='gellaDisplay' />
    </Row>
    <Layout flexBasis={[36, 64]} />
    <Divider weight={1} backgroundColor='divider.transparent' />
    <Layout flexBasis={[36, 64]} />
  </Column>
)
