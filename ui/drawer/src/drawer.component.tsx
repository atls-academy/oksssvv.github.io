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
import { Logo }             from '@ui/logo'
import { Text }             from '@ui/text'

import { Card }             from './card'
import { Renderer }         from './renderer'

export const Drawer = ({ active, onClose }) => {
  const intl = useIntl()
  const cards = Array.from({ length: 3 }).map((_, index) => (
    <Card key={`item-${index}`} gap={index < 2 ? 30 : 0} /> // eslint-disable-line
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
          height={[0, 600]}
          backgroundColor='background.white'
          borderBottomLeftRadius={[0, 40]}
          borderBottomRightRadius={[0, 40]}
          flexDirection='column'
          alignItems='center'
        >
          <Layout flexBasis={[22, 35]} />
          <Row>
            <Layout flexBasis={[0, 40]} />
            <Box width={[40, 56]}>
              <Logo fill='rgba(58, 55, 93, 1)' />
            </Box>
            <Row display={['none', 'flex']} justifyContent='center' alignItems='center'>
              <Item
                backColor='light'
                title={intl.formatMessage({ id: '/', defaultMessage: 'Academy' })}
                path='/'
              />
              <Layout flexBasis={20} />
              <Item
                backColor='light'
                title={intl.formatMessage({ id: '/', defaultMessage: 'Курсы' })}
                path='/'
              />
              <Layout flexBasis={20} />
              <Item
                backColor='light'
                title={intl.formatMessage({ id: '/', defaultMessage: 'Обучение' })}
                path='/'
              />
              <Layout flexBasis={20} />
              <Item
                backColor='light'
                title={intl.formatMessage({ id: '/', defaultMessage: 'FAQ' })}
                path='/'
              />
            </Row>
            <Box width={163} display={['none', 'flex']} alignItems='center' flexShrink='0'>
              <Button
                pressed
                variant='primary'
                size='normalSizeNormalPadding'
                gap='14%'
                icon={<ArrowUpIcon width={12} height={6} />}
                containerWidth={48}
                containerHeight={48}
                containerColor='rgba(255, 255, 255, 1)'
                containerRadius={12}
                fill
                onClick={onClose}
              >
                <Text color='white' fontSize='regular' lineHeight='small'>
                  <FormattedMessage id='/' defaultMessage='Курсы' />
                </Text>
              </Button>
            </Box>
            <Layout flexBasis={[0, 40]} />
          </Row>
          <Layout flexBasis={[22, 50]} />
          <Row height={430} maxWidth={1840}>
            {cards}
          </Row>
        </Box>
      </motion.div>
    </Renderer>
  )
}
