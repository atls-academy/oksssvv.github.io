import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }          from '@ui/divider'
import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

import { ItemProps }        from './item.interfaces'

export const Item: FC<ItemProps> = ({ quantity, title, divider }) => (
  <Column>
    <Layout flexBasis={[28, 48]} />
    <Row>
      <Column justifyContent='center' alignItems={['start', 'center']}>
        <Layout flexBasis={{ ultra: 10 }} />
        <Box
          width={{ _: 35, standard: 64, ultra: 76 }}
          height={{ _: 35, standard: 64, ultra: 76 }}
          justifyContent='center'
          alignItems='center'
          backgroundColor='background.ghost'
          border='ghostGray'
          borderRadius={['normal', 'large']}
        >
          <Text fontSize={['standart', 'enlarged']} color='white'>
            {quantity}
          </Text>
        </Box>
      </Column>
      <Layout flexBasis={[12, 32]} />
      <Row flexDirection={['column', 'row']} alignItems='center'>
        <Box width={{ _: 288, standard: 426, wide: 426, ultra: 630 }}>
          <Text
            color='white'
            fontSize={{ _: 'enlarged', standard: 'large', wide: 'large', ultra: 'enormous' }}
          >
            {title}
          </Text>
        </Box>
        <Layout flexBasis={{ _: 8, standard: 700, wide: 1060, ultra: 1100 }} />
        <Box width={{ _: 288, standard: 560, wide: 560, ultra: 750 }}>
          <Text
            color='white'
            fontSize={{ _: 'medium', standard: 'enlarged', wide: 'enlarged', ultra: 'normalize' }}
            lineHeight='medium'
          >
            <FormattedMessage
              id='/'
              defaultMessage='Являясь серым кардиналом, Atlantis имеет влияние на сферу IT и неограниченные.'
            />
          </Text>
        </Box>
      </Row>
    </Row>
    <Layout flexBasis={[28, 48]} />
    <Divider weight={divider} backgroundColor='background.ghorsWhite' />
  </Column>
)
