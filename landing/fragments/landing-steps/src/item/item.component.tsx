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
        <Box
          width={[35, 64]}
          height={[35, 64]}
          justifyContent='center'
          alignItems='center'
          backgroundColor='background.ghost'
          border='ghostGray'
          borderRadius={[12, 20]}
        >
          <Text fontSize={['standart', 'enlarged']} color='white'>
            {quantity}
          </Text>
        </Box>
      </Column>
      <Layout flexBasis={[12, 32]} />
      <Row flexDirection={['column', 'row']} alignItems='center'>
        <Box width={[288, 420]}>
          <Text color='white' fontSize={['enlarged', 'large']}>
            {title}
          </Text>
        </Box>
        <Layout flexBasis={[8, 700]} />
        <Box width={[288, 560]}>
          <Text color='white' fontSize={['medium', 'enlarged']} lineHeight='medium'>
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
