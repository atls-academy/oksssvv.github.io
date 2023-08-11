import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { Link }             from 'react-scroll'
import { useIntl }          from 'react-intl'

import { Background }       from '@ui/background'
import { Button }           from '@ui/button'
import { Card }             from '@ui/card'
import { ScrollIcon }       from '@ui/icon'
import { ArrowPointerIcon } from '@ui/icon'
import { Image }            from '@ui/image'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'
import { useHover }         from '@ui/utils'

import { WideScreenCards }  from './wideScreen'
import { useCourses }       from '../data'

const getGap = (index) =>
  ({
    0: { _: 104, standard: 214, wide: 356, ultra: 222 },
    1: { _: 49, standard: 56, wide: 356, ultra: 222 },
  }[index] || 110)

const getWidthCategory = (index) =>
  ({
    0: { _: 80, standard: 104, ultra: 148 },
    1: { _: 87, standard: 112, ultra: 160 },
  }[index] || 180)

export const Cards = () => {
  const card = useCourses()
  const intl = useIntl()
  const [hover, hoverProps] = useHover()

  const getCards = card?.data?.courses.nodes.map((element) => ({
    label: element.course.label[0].title,
    title: element.course.title,
    description: element.course.description,
    image: element.course.image?.sourceUrl,
  }))

  const reversedCards = getCards?.reverse()

  return (
    <Box flexDirection={['column', 'row']}>
      <Row order={[1, 0]} flexWrap='wrap'>
        {reversedCards?.map((element, index) => (
          <Box
            display={
              index > 1 ? { _: 'none', standard: 'flex', wide: 'none', ultra: 'none' } : 'flex'
            }
            flexGrow='1'
            flexShrink='1'
            // eslint-disable-next-line
            key={index}
          >
            <Column width={index < 2 ? '100%' : 560} flexGrow='1' flexShrink='1'>
              <Card
                widthCategory={getWidthCategory(index)}
                сategory={element.label}
                image={element.image}
                gap={getGap(index)}
                widthContent={{ _: 303, standard: 694, ultra: 945 }}
                title={element.title}
                description={element.description}
              />
              <Layout flexBasis={{ _: 20, standard: 40 }} />
            </Column>
            <Layout
              flexBasis={index === reversedCards.length - 1 || index === 0 || index === 1 ? 0 : 40}
            />
            <Layout
              flexBasis={index === 1 ? 0 : 40}
              display={{ _: 'none', standard: 'none', wide: 'flex', ultra: 'flex' }}
            />
          </Box>
        ))}
        <Row display={{ _: 'none', standard: 'none', wide: 'flex', ultra: 'flex' }} flexWrap='wrap'>
          <WideScreenCards />
          <NextLink path='/library'>
            <Background
              width={{ wide: 572, ultra: 668 }}
              height={{ wide: 320, ultra: 326 }}
              backgroundColor={hover ? 'lilacGradient' : 'purpleGradient'}
              borderRadius='big'
              {...hoverProps}
            >
              <Column>
                <Layout flexBasis={{ wide: 232, ultra: 207 }} />
                <Row alignItems='center'>
                  <Layout flexBasis={{ wide: 40, ultra: 40 }} />
                  <Text fontSize={{ wide: 'large', ultra: 'enormous' }} color='text.white'>
                    <FormattedMessage id='courses.all-materials' />
                  </Text>
                  <Layout flexBasis={{ wide: 15, ultra: 20 }} />
                  <ArrowPointerIcon width={50} height={50} />
                </Row>
              </Column>
            </Background>
          </NextLink>
        </Row>
      </Row>

      <Layout flexBasis={[0, 40]} />
      <Column order={[0, 1]}>
        <Background
          backgroundColor='grayGradient'
          borderRadius={['medium', 'big']}
          border='lightGray'
          width={{ _: 335, standard: 410, ultra: 470 }}
          height={{ _: 212, standard: 660, ultra: 840 }}
          display='flex'
        >
          <Layout flexBasis={[16, 32]} />
          <Column>
            <Layout flexBasis={[16, 32]} />
            <Box width={{ _: 302, standard: 346, ultra: 406 }}>
              <Text
                fontSize={{ _: 'medium', standard: 'middle', ultra: 'enlarged' }}
                lineHeight={['medium', 'large']}
              >
                {intl.formatMessage({
                  id: 'courses.card.you-learn-fundamental-knowledge-field-it',
                })}
              </Text>
            </Box>
            <Layout flexBasis={{ _: 0, standard: 74, ultra: 68 }} />
            <Box display={['none', 'flex']} justifyContent='center'>
              <Image src='/sphere-white.png' width={240} />
            </Box>
            <Layout flexBasis={{ _: 16, standard: 62, ultra: 68 }} />
            <Box
              height={[64, 116]}
              flexDirection={['row', 'column']}
              alignItems={['center', 'start']}
            >
              <Box>
                <Text
                  fontSize={{ _: 'solid', standard: 'massive', ultra: 'huge' }}
                  lineHeight='small'
                  color='text.accent'
                >
                  {intl.formatMessage({ id: 'courses.card.five' })}
                </Text>
              </Box>
              <Layout flexBasis={[12, 8]} />
              <Box width={{ _: 125, standard: 188, ultra: 282 }}>
                <Text
                  fontSize={{ _: 'little', standard: 'medium', ultra: 'regular' }}
                  lineHeight={['interim', 'large']}
                >
                  {intl.formatMessage({
                    id: 'courses.card.student-education-one-group',
                  })}
                </Text>
              </Box>
              <Layout flexBasis={[70, 0]} />
              <Box display={['flex', 'none']} justifyContent='center'>
                <Image src='/sphere-white.png' width={64} />
              </Box>
            </Box>
            <Layout flexBasis={[16, 32]} />
          </Column>
          <Layout flexBasis={[16, 32]} />
        </Background>
        <Layout flexBasis={[0, 20]} />
        <Link to='Education' spy smooth duration={1000}>
          <Box
            width={[410]}
            display={{ _: 'none', standard: 'flex', ultra: 'none' }}
            alignItems='center'
            flexShrink='0'
          >
            <Button
              variant='primary'
              size='bigSizeNormalPadding'
              gap={121}
              icon={<ScrollIcon width={12} height={18} />}
              widthIcon={48}
              heightIcon={48}
              backgroundIcon='background.white'
              radiusIcon='medium'
              fill
            >
              <Text fontSize='regular' lineHeight='regular' color='text.white'>
                <FormattedMessage id='courses.button.process' />
              </Text>
            </Button>
          </Box>
        </Link>
        <Link to='Education' spy smooth duration={1000}>
          <Box
            display={{ _: 'none', standard: 'none', wide: 'none', ultra: 'flex' }}
            width={[470]}
            flexShrink='0'
          >
            <Button
              variant='primary'
              size='largeSizeNormalPadding'
              gap={54}
              icon={<ScrollIcon width={18} height={27} />}
              widthIcon={72}
              heightIcon={72}
              backgroundIcon='background.white'
              radiusIcon='big'
              fill
            >
              <Text fontSize='major' lineHeight='regular' color='text.white'>
                <FormattedMessage id='courses.button.process' />
              </Text>
            </Button>
          </Box>
        </Link>
      </Column>
      <Layout flexBasis={[40, 0]} />
    </Box>
  )
}
