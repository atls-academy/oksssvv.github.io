import React            from 'react'

import { Divider }      from '@ui/divider'
import { Layout }       from '@ui/layout'
import { Column }       from '@ui/layout'
import { Row }          from '@ui/layout'

import { Line }         from './line'
import { KitWorkspace } from './technology'
import { useRunline }   from './data'

export const RunLine = () => {
  const runline = useRunline()

  return (
    <Column>
      <Layout flexBasis={[32, 64]} />
      <Divider weight={1} backgroundColor='background.ghorsWhite' />
      <Layout flexBasis={[36, 64]} />
      <Row overflow='hidden'>
        <Line
          technology={runline?.data?.skills.nodes.map((el, index: number) => ({
            index,
            title: el.title,
          }))}
          font='primary'
        />
      </Row>
      <Layout flexBasis={[36, 64]} />
      <Row overflow='hidden'>
        <Line technology={KitWorkspace} font='gella' />
      </Row>
      <Layout flexBasis={[36, 64]} />
      <Divider weight={1} backgroundColor='background.ghorsWhite' />
      <Layout flexBasis={[32, 64]} />
    </Column>
  )
}
