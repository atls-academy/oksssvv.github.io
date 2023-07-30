import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { SocialLinks }      from '@landing/hero-fragment'
import { Condition }        from '@ui/condition'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Text }             from '@ui/text'
import { useWindow }        from '@ui/utils'

import { Sphere }           from './sphere'

export const Info = () => {
  const { isMobile, isDesktop } = useWindow()

  return (
    <Row height={{ _: 450, standard: 710, wide: 800, ultra: 900 }} justifyContent='center'>
      <Layout flexBasis={{ _: 20, standard: 230, wide: 230, ultra: 620 }} />
      <Column maxWidth={{ _: 335, standard: 1460, ultra: 2190 }}>
        <Layout flexBasis={{ _: 64, standard: 160, wide: 46 }} flexShrink='0' />
        <Condition match={isDesktop}>
          <Box display='inline'>
            <Text
              display='inline'
              color='text.white'
              fontSize={{ standard: 'great', ultra: 'massive' }}
              lineHeight='medium'
            >
              <FormattedMessage id='info.desktop.digital-is-becoming-more-and-more-crowded' />
            </Text>
            <Sphere />
            <Text
              display='inline'
              color='text.white'
              fontSize={{ standard: 'great', ultra: 'massive' }}
              lineHeight='medium'
            >
              <FormattedMessage id='info.desktop.but-there-are-still-few-specialists' />
            </Text>
            <Sphere />
          </Box>
          <Layout flexBasis={40} flexShrink='0' />
          <Box display='inline'>
            <Text
              display='inline'
              color='text.white'
              fontSize={{ standard: 'great', ultra: 'massive' }}
              lineHeight='medium'
            >
              <FormattedMessage id='info.desktop.atlantis-academy-trains-engineers' />
            </Text>
            <Sphere />
          </Box>
        </Condition>

        <Condition match={isMobile}>
          <Box display='inline' width={320}>
            <Text color='text.white' fontSize='regular' lineHeight='interim'>
              <FormattedMessage id='info.mobile.digital-is-becoming-more-and-more-crowded' />
            </Text>
            <Text color='text.white' fontSize='regular' lineHeight='interim'>
              <FormattedMessage id='info.mobile.does-not-decrease-but-specialists' />
            </Text>
            <Text color='text.white' fontSize='regular' lineHeight='interim'>
              <FormattedMessage id='info.mobile.for-their-decisions-is-still-not-enough' />
            </Text>
          </Box>
          <Layout flexBasis={20} />
          <Box display='inline'>
            <Text color='text.white' fontSize='regular' lineHeight='interim'>
              <FormattedMessage id='info.mobile.atlantis-academy-trains-engineers' />
            </Text>
            <Text color='text.white' fontSize='regular' lineHeight='interim'>
              <FormattedMessage id='info.mobile.not-programmers-and-designers' />
            </Text>
          </Box>
        </Condition>
        <Layout flexBasis={[64, 160]} flexShrink='0' />
      </Column>

      <Layout flexBasis={{ wide: 774, ultra: 326 }} />
      <Column display={{ _: 'none', standard: 'none', wide: 'flex', ultra: 'none' }}>
        <Layout flexBasis={230} />
        <SocialLinks buttonSize='smallSizeSmallPadding' iconWidth={18} iconHeight={15} gap={16} />
      </Column>
      <Column display={{ _: 'none', standard: 'none', wide: 'none', ultra: 'flex' }}>
        <Layout flexBasis={210} />
        <SocialLinks buttonSize='bigSizeBigRadii' iconWidth={27} iconHeight={27} gap={24} />
      </Column>
      <Layout flexBasis={{ _: 20, standard: 210, wide: 25, ultra: 600 }} />
    </Row>
  )
}
