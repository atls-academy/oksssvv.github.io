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
          <FormattedMessage id='/' defaultMessage='Процесс создания' />
        </Text>
      </Box>
      <Layout flexBasis={[16, 24]} />
      <Box display={['none', 'inline']}>
        <Text color='white' fontSize='large'>
          <FormattedMessage id='/' defaultMessage='Любой процесс перестаёт' />
        </Text>
        <Space count={3} />
        <Text color='white' fontSize='large' opacity={0.5}>
          <FormattedMessage id='/' defaultMessage='быть' />
        </Text>
        <Space count={3} />
        <Text color='white' fontSize='large'>
          <FormattedMessage id='/' defaultMessage='сложным,' />
        </Text>
      </Box>
      <Box display={['none', 'inline']}>
        <Text color='white' fontSize='large'>
          <FormattedMessage id='/' defaultMessage='когда' />
        </Text>
        <Space count={3} />
        <Text color='white' fontSize='large' opacity={0.5}>
          <FormattedMessage id='/' defaultMessage='знаешь' />
        </Text>
        <Space count={3} />
        <Text color='white' fontSize='large'>
          <FormattedMessage id='/' defaultMessage='как он протекает' />
        </Text>
      </Box>
      <Box display={['inline', 'none']}>
        <Text color='white' fontSize='enlarged'>
          <FormattedMessage id='/' defaultMessage='Любой процесс перестает' />
        </Text>
      </Box>
      <Box display={['inline', 'none']}>
        <Text color='white' fontSize='enlarged' opacity={0.5}>
          <FormattedMessage id='/' defaultMessage='быть' />
        </Text>
        <Space count={2} />
        <Text color='white' fontSize='enlarged'>
          <FormattedMessage id='/' defaultMessage='сложным, когда' />
        </Text>
        <Space count={2} />
        <Text color='white' fontSize='enlarged' opacity={0.5}>
          <FormattedMessage id='/' defaultMessage='знаешь' />
        </Text>
      </Box>
      <Box display={['inline', 'none']}>
        <Text color='white' fontSize='enlarged'>
          <FormattedMessage id='/' defaultMessage='как он протекает' />
        </Text>
      </Box>
      <Layout flexBasis={[24, 50]} />

      <SliderBlock />

      <Layout flexBasis={[100, 240]} />
    </Column>
    <Layout flexBasis={[0, 492]} />
  </Row>
)
