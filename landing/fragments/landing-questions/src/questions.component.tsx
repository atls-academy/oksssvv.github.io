import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Accordion }        from '@ui/accordion'
import { Button }           from '@ui/button'
import { EnvelopeIcon }     from '@ui/icon'
import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

export const Questions = () => (
  <Row justifyContent='center'>
    <Layout flexBasis={[16, 230]} />
    <Column width={[343, 1610]}>
      <Layout flexBasis={[80, 160]} />
      <Row>
        <Box width={[335, 915]}>
          <Text fontSize={['normal', 'huge']} lineHeight='regular'>
            <FormattedMessage id='/' defaultMessage='Вопросы и ответы' />
          </Text>
        </Box>
        <Layout flexBasis={[0, 555]} />
        <Box width={247} display={['none', 'flex']} alignItems='center' flexShrink='0'>
          <Button
            variant='primary'
            size='bigSizeNormalPadding'
            gap={24}
            icon={<EnvelopeIcon width={12} height={10} />}
            valueWidth={48}
            valueHeight={48}
            valueBackground='rgba(255, 255, 255, 1)'
            valueRadius={16}
            fill
          >
            <Text fontSize='regular' color='text.white'>
              <FormattedMessage id='/' defaultMessage='Задать вопрос' />
            </Text>
          </Button>
        </Box>
      </Row>
      <Layout flexBasis={[60, 80]} />
      <Accordion />
      <Layout flexBasis={[60, 0]} />
      <Box width={335} display={['flex', 'none']} flexShrink='0'>
        <Button
          variant='primary'
          size='SmallSizeNormalPadding'
          gap={163}
          icon={<EnvelopeIcon width={12} height={10} />}
          valueWidth={32}
          valueHeight={32}
          valueBackground='rgba(255, 255, 255, 1)'
          valueRadius={8}
          fill
        >
          <Text fontSize='middle' color='text.white'>
            <FormattedMessage id='/' defaultMessage='Задать вопрос' />
          </Text>
        </Button>
      </Box>
      <Layout flexBasis={[80, 160]} />
    </Column>
    <Layout flexBasis={[16, 80]} />
  </Row>
)
