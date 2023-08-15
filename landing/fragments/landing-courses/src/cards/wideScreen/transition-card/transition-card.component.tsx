import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Background }       from '@ui/background'
import { ArrowPointerIcon } from '@ui/icon'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'
import { useHover }         from '@ui/utils'

export const TransitionCard = () => {
  const [hover, hoverProps] = useHover()
  return (
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
  )
}
