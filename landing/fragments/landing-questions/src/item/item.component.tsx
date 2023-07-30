import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'
import { useHover }         from '@ui/utils'

export const Item = () => {
  const [hover, hoverProps] = useHover()

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
            <FormattedMessage id='questions.profession-right-for-me' />
          </Text>
        </Box>
        <Layout flexBasis={[26, 0]} />
      </Row>
      <Layout flexBasis={[16, 40]} />
    </Column>
  )
}
