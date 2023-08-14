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
import { WideAccordion }    from './wide-accordion'
import { useFaq }           from './data'

export const Faq = () => {
  const faq = useFaq()

  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const title = faq?.data?.section.sections.title

  return (
    <Row>
      <Feedback open={modalOpen} onClose={() => setModalOpen(false)} />
      <Layout flexBasis={{ _: 16, standard: 230, ultra: 695 }} />
      <Column width='100%' alignItems={['center', 'stretch']}>
        <Layout flexBasis={[80, 160]} />
        <Row justifyContent={['center', 'start']}>
          <Box width={{ _: 335, standard: 915, wide: 915, ultra: 1372 }}>
            <Text
              fontSize={{ _: 'normal', standard: 'huge', wide: 'huge', ultra: 'super' }}
              lineHeight='regular'
            >
              {title ? title.charAt(0).toUpperCase() + title.slice(1) : ''}
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
                <FormattedMessage id='faq.ask-question' />
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
                <FormattedMessage id='faq.ask-question' />
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
        <Box display={['flex', 'none']} width={335} flexShrink='0'>
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
              <FormattedMessage id='faq.ask-question' />
            </Text>
          </Button>
        </Box>
        <Layout flexBasis={{ _: 80, standard: 160, wide: 200, ultra: 300 }} />
      </Column>
      <Layout flexBasis={{ _: 16, standard: 80, ultra: 545 }} />
    </Row>
  )
}
