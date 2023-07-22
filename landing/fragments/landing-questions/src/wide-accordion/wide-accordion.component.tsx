import React         from 'react'

import { Accordion } from '@ui/accordion'
import { Layout }    from '@ui/layout'
import { Row }       from '@ui/layout'

export const WideAccordion = () => (
  <Row display={{ _: 'none', standard: 'none', wide: 'flex', ultra: 'flex' }}>
    <Accordion screen='wide' />
    <Layout flexBasis={200} />
    <Accordion screen='wide' />
  </Row>
)
