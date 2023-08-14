import React          from 'react'

import { Divider }    from '@ui/divider'
import { Layout }     from '@ui/layout'
import { Column }     from '@ui/layout'
import { Row }        from '@ui/layout'

import { Line }       from './line'
import { useRunline } from './data'

export const RunLine = () => {
  const runline = useRunline()

  return (
    <Column>
      <Layout flexBasis={[32, 64]} />
      <Divider weight={1} backgroundColor='background.ghorsWhite' />
      <Layout flexBasis={[36, 64]} />
      <Row overflow='hidden'>
        <Line
          technology={runline?.data?.skills.nodes
            .slice(3)
            .map((el, index) => ({ index, title: el.title }))}
          font='primary'
        />
      </Row>
      <Layout flexBasis={[36, 64]} />
      <Row overflow='hidden'>
        <Line
          technology={runline?.data?.skills.nodes
            .slice(0, 3)
            .map((el, index) => ({ index, title: el.title }))}
          font='gella'
        />
      </Row>
      <Layout flexBasis={[36, 64]} />
      <Divider weight={1} backgroundColor='background.ghorsWhite' />
      <Layout flexBasis={[32, 64]} />
    </Column>
  )
}
