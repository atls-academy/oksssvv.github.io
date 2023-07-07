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
        <Box width={[303, 740]} order={[0, 1]}>
          <Text
            cursor='pointer'
            fontSize={['regular', 'normal']}
            lineHeight='medium'
            color={hover ? 'text.accent' : 'text.primary'}
          >
            <FormattedMessage id='/' defaultMessage='Подойдёт ли мне профессия?' />
          </Text>
        </Box>
        <Layout flexBasis={[26, 0]} />
      </Row>
      <Layout flexBasis={[16, 40]} />
    </Column>
  )
}
