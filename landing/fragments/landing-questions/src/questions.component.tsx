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

import { Feedback }         from './feedback'

export const Questions = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  return (
    <Row justifyContent='center'>
      <Feedback open={modalOpen} onClose={() => setModalOpen(false)} />
      <Layout flexBasis={[16, 230]} />
      <Column width={{ _: 343, standard: 1610, wide: 2250, ultra: 2600 }}>
        <Layout flexBasis={[80, 160]} />
        <Row>
          <Box width={{ _: 335, standard: 915, wide: 915, ultra: 1372 }}>
            <Text
              fontSize={{ _: 'normal', standard: 'huge', wide: 'huge', ultra: 'super' }}
              lineHeight='regular'
            >
              <FormattedMessage id='/' defaultMessage='Вопросы и ответы' />
            </Text>
          </Box>
          <Layout flexBasis={{ _: 0, standard: 555, wide: 1088, ultra: 1000 }} />
          <Box width={247} display={['none', 'flex']} alignItems='center' flexShrink='0'>
            <Button
              variant='primary'
              size='bigSizeNormalPadding'
              gap={24}
              icon={<EnvelopeIcon width={12} height={10} />}
              widthIcon={48}
              heightIcon={48}
              backgroundIcon='background.white'
              radiusIcon='medium'
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
        <Box width={335} display={['flex', 'none']} flexShrink='0'>
          <Button
            variant='primary'
            size='smallSizeNormalPadding'
            gap={163}
            icon={<EnvelopeIcon width={12} height={10} />}
            widthIcon={32}
            heightIcon={32}
            backgroundIcon='background.white'
            radiusIcon='little'
            fill
            onClick={() => setModalOpen(true)}
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
}
