import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Button }           from '@ui/button'
import { Divider }          from '@ui/divider'
import { ArrowRightIcon }   from '@ui/icon'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'

import { About }            from './about'
import { Cards }            from './cards'
import { MobileSwiper }     from './cards'
import { useCourses }       from './data'

export const Courses = () => {
  const courses = useCourses()

  const title = courses?.data?.sections.nodes.find((obj) => obj.id === 'cG9zdDoyMjc=')?.sections
    .title

  return (
    <>
      <Row justifyContent='center'>
        <Layout flexBasis={{ _: 20, standard: 230, ultra: 620 }} />
        <Column width={{ _: 335, standard: 1610, wide: 2250, ultra: 2600 }}>
          <Layout flexBasis={[64, 160]} />
          <Row>
            <Box width={{ _: 335, standard: 880, ultra: 1350 }}>
              <Text
                fontSize={{ _: 'large', standard: 'huge', ultra: 'super' }}
                lineHeight='regular'
              >
                {title}
              </Text>
            </Box>
            <Layout flexBasis={[464]} />

            <Box
              width={254}
              alignItems='center'
              display={{ _: 'none', standard: 'flex', wide: 'none', ultra: 'none' }}
              flexShrink='0'
            >
              <NextLink path='/library' width='100%'>
                <Button
                  variant='primary'
                  size='bigSizeNormalPadding'
                  gap={24}
                  icon={<ArrowRightIcon width={6} height={12} />}
                  widthIcon={48}
                  heightIcon={48}
                  backgroundIcon='background.white'
                  radiusIcon='medium'
                  fill
                >
                  <Text fontSize={['middle', 'regular']} color='text.white'>
                    <FormattedMessage id='courses.all-materials' />
                  </Text>
                </Button>
              </NextLink>
            </Box>
          </Row>
          <Layout flexBasis={[40, 80]} />
          <Divider weight={1} backgroundColor='background.primary' />
          <Layout flexBasis={[40, 80]} />
          <About />
          <Layout flexBasis={[40, 80]} />
          <Cards />
        </Column>
        <Layout flexBasis={{ _: 20, standard: 80, ultra: 620 }} />
      </Row>
      <Box display={['flex', 'none']} overflow='hidden' justifyContent='center'>
        <Layout flexBasis={20} flexShrink='0' />
        <Column>
          <MobileSwiper />
          <Layout flexBasis={40} />
          <Box width={335} flexShrink='0'>
            <NextLink path='/library' width='100%'>
              <Button
                variant='primary'
                size='smallSizeNormalPadding'
                gap={155}
                icon={<ArrowRightIcon width={6} height={12} />}
                widthIcon={32}
                heightIcon={32}
                backgroundIcon='background.white'
                radiusIcon='little'
                fill
              >
                <Text fontSize='middle' lineHeight='regular' color='text.white'>
                  <FormattedMessage id='courses.all-materials' />
                </Text>
              </Button>
            </NextLink>
          </Box>
        </Column>
      </Box>
    </>
  )
}
