import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'
import { Space }            from '@ui/text'

import { SliderBlock }      from './slider-block'

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
      <Box display={['none', 'inline']}>
        <Text color='white' fontSize='large'>
          <FormattedMessage id='propcess.any-process-stops' />
        </Text>
        <Space count={3} />
        <Text color='white' fontSize='large' opacity={0.5}>
          <FormattedMessage id='propcess.be' />
        </Text>
        <Space count={3} />
        <Text color='white' fontSize='large'>
          <FormattedMessage id='propcess.hard' />
        </Text>
      </Box>
      <Box display={['none', 'inline']}>
        <Text color='white' fontSize='large'>
          <FormattedMessage id='propcess.when' />
        </Text>
        <Space count={3} />
        <Text color='white' fontSize='large' opacity={0.5}>
          <FormattedMessage id='propcess.know' />
        </Text>
        <Space count={3} />
        <Text color='white' fontSize='large'>
          <FormattedMessage id='propcess.how-going' />
        </Text>
      </Box>
      <Box display={['inline', 'none']}>
        <Text color='white' fontSize='enlarged'>
          <FormattedMessage id='propcess.any-process-stops' />
        </Text>
      </Box>
      <Box display={['inline', 'none']}>
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
      <Box display={['inline', 'none']}>
        <Text color='white' fontSize='enlarged'>
          <FormattedMessage id='propcess.how-going' />
        </Text>
      </Box>
      <Layout flexBasis={[24, 50]} />

      <SliderBlock />

      <Layout flexBasis={[100, 240]} />
    </Column>
    <Layout flexBasis={[0, 492]} />
  </Row>
)
