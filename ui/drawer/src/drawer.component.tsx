import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { motion }           from 'framer-motion'
import { useIntl }          from 'react-intl'

import { Item }             from '@landing/navigation-fragment'
import { Button }           from '@ui/button'
import { ArrowUpIcon }      from '@ui/icon'
import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Logo }             from '@ui/logo'
import { Text }             from '@ui/text'

import { CardDesktop }      from './cards-desktop'
import { CardsMobile }      from './cards-mobile'
import { Renderer }         from './renderer'

export const Drawer = ({ active, onClose }) => {
  const intl = useIntl()
  const cards = Array.from({ length: 3 }).map((_, index) => (
    <CardDesktop key={`item-${index}`} gap={index < 2 ? 30 : 0} /> // eslint-disable-line
  ))

  return (
    <Renderer active={active}>
      <motion.div
        style={{ position: 'fixed', top: '-100%', width: '100%', zIndex: 5 }}
        animate={{ top: 0 }}
        exit={{ top: '-100%' }}
        transition={{ duration: 0.9 }}
      >
        <Box
          height={[495, 610]}
          backgroundColor='background.white'
          borderBottomLeftRadius={[24, 40]}
          borderBottomRightRadius={[24, 40]}
          flexDirection='column'
          alignItems='center'
        >
          <Layout flexBasis={[22, 35]} />
          <Row width={{ _: 375, standard: 1920, wide: 2560, ultra: 2800 }}>
            <Layout flexBasis={{ _: 20, standard: 40 }} />
            <Box width={{ _: 40, standard: 56, wide: 56, ultra: 84 }}>
              <Logo fill='rgba(58, 55, 93, 1)' />
            </Box>
            <Layout flexBasis={{ standard: 400, wide: 715, ultra: 500 }} />
            <Row
              display={['none', 'flex']}
              justifyContent='center'
              alignItems='center'
              width={{ ultra: 1290 }}
            >
              <Item
                backColor='light'
                title={intl.formatMessage({ id: '/', defaultMessage: 'Academy' })}
                path='/'
              />
              <Layout flexBasis={{ standsrd: 20, ultra: 30 }} />
              <Item
                backColor='light'
                title={intl.formatMessage({ id: '/', defaultMessage: 'Курсы' })}
                path='/'
              />
              <Layout flexBasis={{ standsrd: 20, ultra: 30 }} />
              <Item
                backColor='light'
                title={intl.formatMessage({ id: '/', defaultMessage: 'Обучение' })}
                path='/'
              />
              <Layout flexBasis={{ standsrd: 20, ultra: 30 }} />
              <Item
                backColor='light'
                title={intl.formatMessage({ id: '/', defaultMessage: 'FAQ' })}
                path='/'
              />
            </Row>
            <Layout flexBasis={{ _: 195, standard: 400, wide: 715, ultra: 500 }} />
            <Box width={163} display={['none', 'flex']} alignItems='center' flexShrink='0'>
              <Button
                variant='primary'
                size='normalSizeNormalPadding'
                gap={20}
                icon={<ArrowUpIcon width={12} height={6} />}
                widthIcon={48}
                heightIcon={48}
                backgroundIcon='background.white'
                radiusIcon='normal'
                fill
                onClick={onClose}
              >
                <Text color='white' fontSize='regular' lineHeight='small'>
                  <FormattedMessage id='/' defaultMessage='Курсы' />
                </Text>
              </Button>
            </Box>
            <Box width={100} display={['flex', 'none']} alignItems='center' flexShrink='0'>
              <Button
                variant='primary'
                size='normalSizeSmallPadding'
                gap={12}
                icon={<ArrowUpIcon width={9} height={4.5} />}
                widthIcon={28}
                heightIcon={28}
                backgroundIcon='background.white'
                radiusIcon='micro'
                fill
                onClick={onClose}
              >
                <Text color='white' fontSize='medium'>
                  <FormattedMessage id='/' defaultMessage='Курсы' />
                </Text>
              </Button>
            </Box>
            <Layout flexBasis={{ _: 0, standard: 40 }} />
          </Row>
          <Layout flexBasis={[78, 50]} />
          <Row display={['none', 'flex']} height={430} maxWidth={1840}>
            {cards}
          </Row>
          <Column display={['flex', 'none']} height={337} maxWidth={335}>
            <CardsMobile />
          </Column>
        </Box>
      </motion.div>
    </Renderer>
  )
}
