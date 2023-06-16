import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }          from '@ui/divider'
import { SmallPlusIcon }    from '@ui/icon'
import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

export const Item = (divider) => (
  <Column width={[343, 1610]}>
    <Layout flexBasis={[16, 40]} flexShrink='0' />
    <Row alignItems='center'>
      <Box order={[1, 0]}>
        <SmallPlusIcon width={12} height={12} />
      </Box>
      <Layout flexBasis={[0, 26]} flexShrink='0' />
      <Box width={[303, 740]} order={[0, 1]}>
        <Text fontSize={['regular', 'normal']} lineHeight='medium'>
          <FormattedMessage id='/' defaultMessage='Подойдёт ли мне профессия?' />
        </Text>
      </Box>
      <Layout flexBasis={[26, 0]} flexShrink='0' />
    </Row>
    <Layout flexBasis={[16, 40]} flexShrink='0' />
    <Divider weight={divider} backgroundColor='black' />
  </Column>
)
