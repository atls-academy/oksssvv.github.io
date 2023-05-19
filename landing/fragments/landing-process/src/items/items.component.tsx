import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Text }             from '@ui/text'

import { ItemsProps }       from './items.interface'

const Items: FC<ItemsProps> = ({ quantity, title }) => (
  <Box>
    <Box
      width={[35, 64]}
      height={[35, 64]}
      borderRadius={['normal', 'large']}
      backgroundColor='background.transparent'
      border='lightWhite'
      justifyContent='center'
      alignItems='center'
    >
      <Text fontSize={['standart', 'enlarged']} color='white'>
        {quantity}
      </Text>
    </Box>
    <Layout flexBasis={[12, 32]} />
    <Box flexDirection={['column', 'row']} alignItems='center'>
      <Box width={[288, 420]} flexShrink='0'>
        <Text color='white' fontSize={['enlarged', 'large']}>
          {title}
        </Text>
      </Box>
      <Layout flexBasis={[0, 684]} flexShrink='0' />
      <Box width={[288, 560]} flexShrink='0' alignItems='center'>
        <Text
          color='white'
          fontSize={['medium', 'enlarged']}
          lineHeight='medium'
          opacity={['0.7', '1']}
        >
          <FormattedMessage
            id='/'
            defaultMessage='Являясь серым кардиналом Atlantis имеет влияние на сферу IT и неограниченные.'
          />
        </Text>
      </Box>
    </Box>
  </Box>
)

export { Items }
