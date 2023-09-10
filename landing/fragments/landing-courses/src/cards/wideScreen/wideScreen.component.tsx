import React          from 'react'

import { Card }       from '@ui/card'
import { Column }     from '@ui/layout'
import { Layout }     from '@ui/layout'

import { useCourses } from '../../data'

export const WideScreenCards = () => {
  const card = useCourses()

  const getId = (id) => card?.data?.courses.nodes.find((obj) => obj.id === id)

  const CardContainer = ({ title, indent }) => (
    <>
      <Column width={{ wide: 570, ultra: 668 }} height={370}>
        <Card
          widthCategory={{ wide: 180, ultra: 250 }}
          сategory={getId('cG9zdDoyMzk=')?.course.label[0].title}
          gap={{ wide: 110, ultra: 45 }}
          title={title}
        />
        <Layout flexBasis={40} />
      </Column>
      <Layout flexBasis={indent} />
    </>
  )

  const title = (index) =>
    index < 3 ? getId('cG9zdDoyMzk=')?.course.title : getId('cG9zdDoyNDY=')?.course.title

  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <CardContainer
          key={index} /*eslint-disable-line */
          title={title(index)}
          indent={index === 2 ? 0 : 40}
        />
      ))}
    </>
  )
}
