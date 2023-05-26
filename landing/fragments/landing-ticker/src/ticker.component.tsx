import React       from 'react'

import { Divider } from '@ui/divider'
import { Layout }  from '@ui/layout'
import { Column }  from '@ui/layout'
import { Row }     from '@ui/layout'

import { Line }    from './line'

export const Ticker = () => (
  <Column>
    <Layout flexBasis={[0, 64]} />
    <Divider weight={1} backgroundColor='divider.transparent' />
    <Layout flexBasis={[36, 64]} />
    <Row overflow='hidden'>
      <Line tech={'JavaScript,HTML,CSS,SASS,Vanilla JS,Jade'.split(',')} font='primary' />
    </Row>
    <Layout flexBasis={[36, 64]} />
    <Row overflow='hidden'>
      <Line tech={'Github,Atom,Figma'.split(',')} font='gellaDisplay' />
    </Row>
    <Layout flexBasis={[36, 64]} />
    <Divider weight={1} backgroundColor='divider.transparent' />
    <Layout flexBasis={[36, 64]} />
  </Column>
)
