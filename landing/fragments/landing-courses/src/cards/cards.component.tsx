import React                from 'react'

import { Card }             from '@ui/card'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'

import { Details }          from './details'
import { WideScreenCards }  from './wideScreen'
import { TransitionCard }   from './wideScreen'
import { useCourses }       from '../data'
import { getGap }           from './helpers'
import { getWidthCategory } from './helpers'

export const Cards = () => {
  const card = useCourses()

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
            key={element.title}
          >
            <Column width={index < 2 ? '100%' : 560} flexGrow='1'>
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
          <TransitionCard />
        </Row>
      </Row>
      <Layout flexBasis={[0, 40]} />
      <Details />
      <Layout flexBasis={[40, 0]} />
    </Box>
  )
}
