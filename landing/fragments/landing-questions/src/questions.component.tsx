import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Button }           from '@ui/button'
import { EnvelopeIcon }     from '@ui/icon'
import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

import { Item }             from './item'

export const Questions = () => {
  const items = Array.from({ length: 6 }).map((el, index) => (
    <Item key={`item-${index}`} divider={index < 5 ? 1 : undefined} /> // eslint-disable-line
  ))

  return (
    <Row justifyContent='center'>
      <Layout flexBasis={[16, 230]} />
      <Column width={[343, 1610]}>
        <Layout flexBasis={[80, 160]} />
        <Row>
          <Box width={[335, 915]} >
            <Text fontSize={['normal', 'huge']} lineHeight={['regular', 'medium']}>
              <FormattedMessage id='/' defaultMessage='Вопросы и ответы' />
            </Text>
          </Box>
          <Layout flexBasis={[0, 555]} />
          <Box width={247} display={['none', 'flex']} alignItems='center' flexShrink='0'>
            <Button
              variant='primary'
              size='bigSizeNormalPadding'
              gap='9%'
              icon={<EnvelopeIcon width={12} height={10} />}
              containerWidth={48}
              containerHeight={48}
              containerColor='rgba(255, 255, 255, 1)'
              fill
            >
              <Text fontSize='regular' color='text.white'>
                <FormattedMessage id='/' defaultMessage='Задать вопрос' />
              </Text>
            </Button>
          </Box>
        </Row>
        <Layout flexBasis={[60, 80]} />
        {items}
        <Layout flexBasis={[60, 0]} />
        <Box width={343} display={['flex', 'none']} flexShrink='0'>
          <Button
            variant='primary'
            size='bigSizeNormalPadding'
            gap='39%'
            icon={<EnvelopeIcon width={12} height={10} />}
            containerWidth={48}
            containerHeight={48}
            containerColor='rgba(255, 255, 255, 1)'
            fill
          >
            <Text fontSize='regular' color='text.white'>
              <FormattedMessage id='/' defaultMessage='Задать вопрос' />
            </Text>
          </Button>
        </Box>
        <Layout flexBasis={[80, 160]} />
      </Column>
      <Layout flexBasis={[16, 80]} />
    </Row>
  )
}
