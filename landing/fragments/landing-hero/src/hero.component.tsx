import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Divider }          from '@ui/divider'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Text }             from '@ui/text'
import { Space }            from '@ui/text'

import { SocialLinks }      from './social-links'

export const Hero = () => (
  <Row justifyContent='center'>
    <Layout flexBasis={{ _: 20, standard: 230, wide: 230, ultra: 620 }} />
    <Column>
      <Layout flexBasis={{ _: 80, standard: 403, wide: 256, ultra: 428 }} />
      <Box
        flexWrap='wrap'
        maxWidth={{ _: 335, standard: 1460, wide: 1460, ultra: 2060 }}
        flexGrow='1'
      >
        <Box width={{ standard: 1166, ultra: 1750 }}>
          <Text
            color='white'
            fontSize={{ _: 'major', standard: 'huge', wide: 'huge', ultra: 'super' }}
            lineHeight={['medium', 'normal']}
          >
            <FormattedMessage id='hero.train-professionals' />
          </Text>
        </Box>
        <Text
          color='white'
          fontSize={{ _: 'major', standard: 'huge', wide: 'huge', ultra: 'super' }}
          lineHeight={['medium', 'normal']}
        >
          <FormattedMessage id='hero.for-revolution-in' />
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
            <FormattedMessage id='hero.it' />
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
          <FormattedMessage id='hero.we-not-teach-programming' />
        </Text>
        <Space count={2} />
        <Text
          color='white'
          fontSize={{ _: 'medium', standard: 'regular', wide: 'regular', ultra: 'mid' }}
          lineHeight='medium'
          letterSpacing={['-0.008em', '0']}
          display={['flex', 'inline']}
        >
          <FormattedMessage id='hero.we-teach-thinking' />
        </Text>
      </Box>
      <Layout flexBasis={[20, 0]} />
      <Row display={{ _: 'flex', standard: 'none', wide: 'none', ultra: 'none' }}>
        <SocialLinks buttonSize='smallSizeBigPadding' iconWidth={18} iconHeight={15} gap={12} />
      </Row>
      <Layout flexBasis={[20, 50]} />
    </Column>
    <Layout flexBasis={{ standard: 120, wide: 855, ultra: 1140 }} />
    <Column display={{ _: 'none', standard: 'flex', wide: 'none', ultra: 'none' }}>
      <Layout flexBasis={700} />
      <SocialLinks buttonSize='smallSizeSmallPadding' iconWidth={18} iconHeight={15} gap={16} />
    </Column>
    <Layout flexBasis={{ _: 20, standard: 39, wide: 0, ultra: 0 }} />
  </Row>
)
