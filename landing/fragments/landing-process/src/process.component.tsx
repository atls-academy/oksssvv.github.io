import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'
import { Space }            from '@ui/text'

import { SliderContainer }  from './slider'

export const Process = () => (
  <Row justifyContent='center'>
    <Layout flexBasis={[0, 492]} />
    <Column alignItems='center'>
      <Layout flexBasis={[24, 160]} />
      <Box justifyContent='center'>
        <Text
          color='white'
          fontSize={['small', 'medium']}
          lineHeight='small'
          textTransform='uppercase'
          opacity={0.5}
        >
          <FormattedMessage id='process.process-create' />
        </Text>
      </Box>
      <Layout flexBasis={[16, 24]} />

      <Box display={['none', 'flex']}>
        <Text color='white' fontSize={{ standard: 'large', wide: 'mega' }}>
          <FormattedMessage id='propcess.any-process-stops' />
        </Text>
        <Space count={3} />
        <Text color='white' fontSize={{ standard: 'large', wide: 'mega' }} opacity={0.5}>
          <FormattedMessage id='propcess.be' />
        </Text>
        <Space count={3} />
        <Text color='white' fontSize={{ standard: 'large', wide: 'mega' }}>
          <FormattedMessage id='propcess.hard' />
        </Text>
      </Box>
      <Box display={['none', 'flex']} justifyContent='center'>
        <Text color='white' fontSize={{ standard: 'large', wide: 'mega' }}>
          <FormattedMessage id='propcess.when' />
        </Text>
        <Space count={3} />
        <Text color='white' fontSize={{ standard: 'large', wide: 'mega' }} opacity={0.5}>
          <FormattedMessage id='propcess.know' />
        </Text>
        <Space count={3} />
        <Text color='white' fontSize={{ standard: 'large', wide: 'mega' }}>
          <FormattedMessage id='propcess.how-going' />
        </Text>
      </Box>

      <Box display={['flex', 'none']} justifyContent='center'>
        <Text color='white' fontSize='enlarged'>
          <FormattedMessage id='propcess.any-process-stops' />
        </Text>
      </Box>
      <Box display={['flex', 'none']} justifyContent='center'>
        <Text color='white' fontSize='enlarged' opacity={0.5}>
          <FormattedMessage id='propcess.be' />
        </Text>
        <Space count={2} />
        <Text color='white' fontSize='enlarged'>
          <FormattedMessage id='process.hard-when' />
        </Text>
        <Space count={2} />
        <Text color='white' fontSize='enlarged' opacity={0.5}>
          <FormattedMessage id='propcess.know' />
        </Text>
      </Box>
      <Box display={['flex', 'none']} justifyContent='center'>
        <Text color='white' fontSize='enlarged'>
          <FormattedMessage id='propcess.how-going' />
        </Text>
      </Box>

      <Layout flexBasis={[24, 50]} />
      <SliderContainer />
      <Layout flexBasis={{ _: 100, standard: 240, wide: 300, ultra: 430 }} />
    </Column>
    <Layout flexBasis={[0, 492]} />
  </Row>
)
