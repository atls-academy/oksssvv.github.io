import React          from 'react'

import { Card }       from '@ui/card'
import { Column }     from '@ui/layout'
import { Layout }     from '@ui/layout'

import { useCourses } from '../../data'

export const WideScreenCards = () => {
  const card = useCourses()

  const CardContainer = ({ title, indent }) => (
    <>
      <Column width={{ wide: 570, ultra: 668 }}>
        <Card
          widthCategory={{ wide: 180, ultra: 250 }}
          сategory={card?.data?.courses.nodes[1].course.label[0].title}
          gap={{ wide: 110, ultra: 45 }}
          title={title}
        />
        <Layout flexBasis={40} />
      </Column>
      <Layout flexBasis={indent} />
    </>
  )

  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <CardContainer
          key={index} /*eslint-disable-line */
          title={
            index < 3
              ? card?.data?.courses.nodes[1].course.title
              : card?.data?.courses.nodes[0].course.title
          }
          indent={index === 2 ? 0 : 40}
        />
      ))}
    </>
  )
}
