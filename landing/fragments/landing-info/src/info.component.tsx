import React           from 'react'

import { SocialLinks } from '@landing/hero-fragment'
import { Box }         from '@ui/layout'
import { Row }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Column }      from '@ui/layout'
import { Text }        from '@ui/text'

import { Sphere }      from './sphere'
import { useInfo }     from './data'

export const Info = () => {
  const info = useInfo()

  return (
    <Row height={{ _: 450, standard: 710, wide: 800, ultra: 900 }} justifyContent='center'>
      <Layout flexBasis={{ _: 20, standard: 230, wide: 230, ultra: 620 }} />
      <Column maxWidth={{ _: 335, standard: 1460, ultra: 2190 }}>
        <Layout flexBasis={{ _: 64, standard: 160, wide: 46 }} flexShrink='0' />

        <Box display={['none', 'inline']}>
          <Text
            display='inline'
            color='text.white'
            fontSize={{ standard: 'great', ultra: 'massive' }}
            lineHeight='medium'
          >
            {info?.split('.').slice(0, 1, 2)}
          </Text>
          <Sphere />
          <Text
            display='inline'
            color='text.white'
            fontSize={{ standard: 'great', ultra: 'massive' }}
            lineHeight='medium'
          >
            {info?.split('.').slice(1, 2)}
          </Text>
          <Sphere />
        </Box>
        <Layout display={['none', 'flex']} flexBasis={40} flexShrink='0' />
        <Box display={['none', 'inline']}>
          <Text
            display='inline'
            color='text.white'
            fontSize={{ standard: 'great', ultra: 'massive' }}
            lineHeight='medium'
          >
            {info?.split('.').slice(2)}
          </Text>
          <Sphere />
        </Box>

        <Box display={['flex', 'none']}>
          <Text color='text.white' fontSize='regular' lineHeight='interim'>
            {info?.split('.').slice(0, 2)}
          </Text>
        </Box>
        <Layout flexBasis={20} />
        <Box display={['flex', 'none']}>
          <Text color='text.white' fontSize='regular' lineHeight='interim'>
            {info?.split('.').slice(2)}
          </Text>
        </Box>

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
