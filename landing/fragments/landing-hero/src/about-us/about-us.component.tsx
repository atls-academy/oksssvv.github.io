import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }          from '@ui/divider'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Text }             from '@ui/text'
import { Space }            from '@ui/text'

export const AboutUs = () => (
  <Column height={{ _: 225, standard: 500, wide: 500, ultra: 750 }}>
    <Box flexWrap='wrap' width={{ _: 335, standard: 1460, wide: 1460, ultra: 2060 }}>
      <Box width={{ ultra: 1750 }}>
        <Text
          color='white'
          fontSize={{ _: 'major', standard: 'huge', wide: 'huge', ultra: 'super' }}
          lineHeight={['medium', 'normal']}
        >
          <FormattedMessage id='/' defaultMessage='Обучаем профессионалов' />
        </Text>
      </Box>
      <Text
        color='white'
        fontSize={{ _: 'major', standard: 'huge', wide: 'huge', ultra: 'super' }}
        lineHeight={['medium', 'normal']}
      >
        <FormattedMessage id='/' defaultMessage='для революции в' />
      </Text>
      <Space count={4} />

      <Box
        display='inline-flex'
        width={{ _: 49, standard: 134, wide: 134, ultra: 200 }}
        height={{ _: 39, standard: 116, wide: 116, ultra: 144 }}
        justifyContent='center'
        alignItems='center'
        backgroundColor='background.ghost'
        borderRadius={{ _: 'small', standard: 'big', wide: 'big', ultra: 'mega' }}
      >
        <Text
          color='white'
          fontSize={{ _: 'major', standard: 'big', wide: 'big', ultra: 'largest' }}
          lineHeight={['medium', 'normal']}
        >
          <FormattedMessage id='/' defaultMessage='IT' />
        </Text>
      </Box>
    </Box>
    <Layout flexBasis={[24, 48]} />
    <Divider weight={1} backgroundColor='background.ghorsWhite' />
    <Layout flexBasis={[24, 48]} />
    <Box width={{ _: 335, standard: 640, wide: 640, ultra: 960 }} display='inline'>
      <Text
        color='white'
        fontSize={{ _: 'medium', standard: 'regular', wide: 'regular', ultra: 'mid' }}
        lineHeight='medium'
      >
        <FormattedMessage id='/' defaultMessage='Мы не учим программированию и дизайну,' />
      </Text>
      <Space count={2} />
      <Text
        color='white'
        fontSize={{ _: 'medium', standard: 'regular', wide: 'regular', ultra: 'mid' }}
        lineHeight='medium'
        letterSpacing={['-0.008em', '0']}
        display={['flex', 'inline']}
      >
        <FormattedMessage
          id='/'
          defaultMessage='мы учим мышлению, способному реализовывывать невозможные идеи.'
        />
      </Text>
    </Box>
  </Column>
)
