import React                from 'react'

import { Background }       from '@ui/background'
import { ArrowPointerIcon } from '@ui/icon'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'
import { useHover }         from '@ui/utils'

import { useCourses }       from '../../../data'

export const TransitionCard = () => {
  const transition = useCourses()
  const [hover, hoverProps] = useHover()
  return (
    <NextLink path={transition?.data?.navigationBy.navigation.linkName}>
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
              {transition?.data?.navigationBy.title}
            </Text>
            <Layout flexBasis={{ wide: 15, ultra: 20 }} />
            <ArrowPointerIcon width={50} height={50} />
          </Row>
        </Column>
      </Background>
    </NextLink>
  )
}
