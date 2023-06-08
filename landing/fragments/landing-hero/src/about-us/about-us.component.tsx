import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }          from '@ui/divider'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Text }             from '@ui/text'
import { Space }            from '@ui/text'

export const AboutUs = () => (
  <Column width={[335, 1460]} flexShrink='0'>
    <Box display='inline' width={[335, 1166]}>
      <Text color='white' fontSize={['major', 'huge']} lineHeight={['medium', 'normal']}>
        <FormattedMessage id='/' defaultMessage='Обучаем профессионалов' />
      </Text>
      <Text color='white' fontSize={['major', 'huge']} lineHeight={['medium', 'normal']}>
        <FormattedMessage id='/' defaultMessage='для революции в' />
      </Text>
      <Space count={4} />
      <Text color='white' fontSize={['major', 'big']} lineHeight={['medium', 'normal']}>
        <FormattedMessage id='/' defaultMessage='IT' />
      </Text>
    </Box>
    <Layout flexBasis={[24, 48]} />
    <Divider weight={1} backgroundColor='white' />
    <Layout flexBasis={[24, 48]} />
    <Box width={[335, 640]}>
      <Text color='white' fontSize={['medium', 'regular']} lineHeight='medium'>
        <FormattedMessage
          id='/'
          defaultMessage='Мы не учим программированию и дизайну, мы учим мышлению, способному реализовывывать невозможные идеи.'
        />
      </Text>
    </Box>
  </Column>
)
