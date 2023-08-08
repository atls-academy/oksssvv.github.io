import React        from 'react'

import { Layout }   from '@ui/layout'
import { Box }      from '@ui/layout'
import { Column }   from '@ui/layout'
import { Row }      from '@ui/layout'
import { Text }     from '@ui/text'
import { useHover } from '@ui/utils'

import { useFaq }   from '../data'

export const Item = () => {
  const [hover, hoverProps] = useHover()
  const question = useFaq()

  return (
    <Column {...hoverProps}>
      <Layout flexBasis={[16, 40]} />
      <Row alignItems='center'>
        <Layout flexBasis={[0, 26]} />
        <Box width={{ _: 310, standard: 740, wide: 1000, ultra: 1200 }}>
          <Text
            cursor='pointer'
            fontSize={{ _: 'regular', standard: 'normal', wide: 'secondary', ultra: 'secondary' }}
            lineHeight='medium'
            color={hover ? 'text.accent' : 'text.primary'}
            whiteSpace='nowrap'
          >
            {question.data?.allFAQ.nodes[0].faq.question}
          </Text>
        </Box>
        <Layout flexBasis={[26, 0]} />
      </Row>
      <Layout flexBasis={[16, 40]} />
    </Column>
  )
}
