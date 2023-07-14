import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useState }         from 'react'

import { Accordion }        from '@ui/accordion'
import { Button }           from '@ui/button'
import { EnvelopeIcon }     from '@ui/icon'
import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

import { Window }           from './modal'

export const Questions = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  return (
    <Row justifyContent='center'>
      <Window open={modalOpen} onClose={() => setModalOpen(false)} />
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
              gap='9%'
              icon={<EnvelopeIcon width={12} height={10} />}
              containerWidth={48}
              containerHeight={48}
              containerColor='rgba(255, 255, 255, 1)'
              containerRadius={16}
              fill
              onClick={() => setModalOpen(true)}
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
        <Box width={343} display={['flex', 'none']} flexShrink='0'>
          <Button
            variant='primary'
            size='SmallSizeNormalPadding'
            gap='45%'
            icon={<EnvelopeIcon width={12} height={10} />}
            containerWidth={32}
            containerHeight={32}
            containerColor='rgba(255, 255, 255, 1)'
            containerRadius={8}
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
