import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useState }         from 'react'

import { Accordion }        from '@ui/accordion'
import { Button }           from '@ui/button'
import { Condition }        from '@ui/condition'
import { EnvelopeIcon }     from '@ui/icon'
import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'
import { useWindow }        from '@ui/utils'

import { Feedback }         from './feedback'
import { WideAccordion }    from './wide-accordion'

export const Questions = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const { isMobile } = useWindow()
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
              <FormattedMessage id='questions.questions-and-answel' />
            </Text>
          </Box>
          <Layout flexBasis={{ _: 0, standard: 555, wide: 1088, ultra: 1000 }} />
          <Box
            width={247}
            display={{ _: 'none', standard: 'flex', wide: 'flex', ultra: 'none' }}
            alignItems='center'
            flexShrink='0'
          >
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
                <FormattedMessage id='questions.ask-question' />
              </Text>
            </Button>
          </Box>
          <Box
            width={371}
            display={{ _: 'none', standard: 'none', wide: 'none', ultra: 'flex' }}
            alignItems='center'
            flexShrink='0'
          >
            <Button
              variant='primary'
              size='largeSizeNormalPadding'
              gap={52}
              icon={<EnvelopeIcon width={18} height={15} />}
              widthIcon={72}
              heightIcon={72}
              backgroundIcon='background.white'
              radiusIcon='big'
              fill
              onClick={() => setModalOpen(true)}
            >
              <Text fontSize='major' color='text.white'>
                <FormattedMessage id='questions.ask-question' />
              </Text>
            </Button>
          </Box>
        </Row>
        <Layout flexBasis={[60, 80]} />
        <Box display={{ _: 'flex', standard: 'flex', wide: 'none', ultra: 'none' }}>
          <Accordion screen='standard' />
        </Box>
        <WideAccordion />
        <Layout flexBasis={[60, 0]} />
        <Condition match={isMobile}>
          <Box width={335} flexShrink='0'>
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
                <FormattedMessage id='questions.ask-question' />
              </Text>
            </Button>
          </Box>
        </Condition>
        <Layout flexBasis={{ _: 80, standard: 160, wide: 200, ultra: 200 }} />
      </Column>
      <Layout flexBasis={[16, 80]} />
    </Row>
  )
}
