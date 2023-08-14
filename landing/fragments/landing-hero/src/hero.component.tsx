import React           from 'react'

import { Divider }     from '@ui/divider'
import { Box }         from '@ui/layout'
import { Row }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Column }      from '@ui/layout'
import { Text }        from '@ui/text'

import { SocialLinks } from './social-links'
import { useHero }     from './data'

export const Hero = () => {
  const hero = useHero()
  return (
    <Row justifyContent='center'>
      <Layout flexBasis={{ _: 20, standard: 230, wide: 230, ultra: 620 }} />
      <Column width={{ _: 335, standard: 1460, ultra: 2190 }}>
        <Layout flexBasis={{ _: 80, standard: 403, wide: 256, ultra: 428 }} />
        <Box width={{ _: 280, standard: 930, ultra: 1400 }} alignItems='end'>
          <Text
            color='white'
            fontSize={{ _: 'major', standard: 'huge', wide: 'huge', ultra: 'super' }}
            lineHeight={['medium', 'normal']}
          >
            {hero?.data?.sections.nodes[5].sections.title.split(' ').slice(0, -1).join(' ')}
          </Text>
          <Box
            flexShrink='0'
            display='flex'
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
              textTransform='uppercase'
            >
              {hero?.data?.sections.nodes[5].sections.title.split(' ').slice(5)}
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
            {hero?.data?.sections.nodes[5].content.split('.').slice(3, 4)}
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
}
