import React             from 'react'

import { Divider }       from '@ui/divider'
import { Layout }        from '@ui/layout'
import { Column }        from '@ui/layout'
import { Row }           from '@ui/layout'

import { Line }          from './line'
import { TechnologyKit } from './technology'

export const Ticker = () => (
  <Column>
    <Layout flexBasis={[0, 64]} />
    <Divider weight={1} backgroundColor='divider.transparent' />
    <Layout flexBasis={[36, 64]} />
    <Row overflow='hidden'>
      <Line tech={TechnologyKit.webDevelopment.split(',')} font='primary' />
    </Row>
    <Layout flexBasis={[36, 64]} />
    <Row overflow='hidden'>
      <Line tech={TechnologyKit.workspace.split(',')} font='gellaDisplay' />
    </Row>
    <Layout flexBasis={[36, 64]} />
    <Divider weight={1} backgroundColor='divider.transparent' />
    <Layout flexBasis={[36, 64]} />
  </Column>
)
