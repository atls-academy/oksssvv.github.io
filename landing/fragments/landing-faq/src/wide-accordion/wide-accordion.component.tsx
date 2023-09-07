import React         from 'react'

import { Accordion } from '@ui/accordion'
import { Layout }    from '@ui/layout'
import { Row }       from '@ui/layout'

import { Item }      from '../item'
import { useFaq }    from '../data'

export const WideAccordion = () => {
  const faq = useFaq()
  return (
    <Row display={{ _: 'none', standard: 'none', wide: 'flex', ultra: 'flex' }}>
      <Accordion screen='wide' question={<Item />} answer={faq?.data?.allFAQ.nodes[0].faq.answer} />
      <Layout flexBasis={200} />
      <Accordion screen='wide' question={<Item />} answer={faq?.data?.allFAQ.nodes[0].faq.answer} />
    </Row>
  )
}
