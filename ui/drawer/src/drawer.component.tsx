import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { motion }           from 'framer-motion'

import { Button }           from '@ui/button'
import { IconArrowUp }      from '@ui/icon'
import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Logo }             from '@ui/logo'
import { Text }             from '@ui/text'

import { Backdrop }         from './backdrop'
import { DrawerProps }      from './drawer.interface'
import { Renderer }         from './renderer'

export const Drawer: FC<DrawerProps> = ({ active, onClose }) => (
  <Renderer active={active}>
    <motion.div
      style={{ position: 'fixed', left: 0, top: 0, width: '100%', height: '100%', zIndex: 1 }}
      initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
      animate={{ opacity: 1, backdropFilter: 'blur(12px)' }}
      exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
      transition={{ duration: 0.01 }}
    >
      <Backdrop onClick={onClose} />
    </motion.div>
    <motion.div
      style={{ position: 'fixed', left: 0, top: '-100%', width: '100%', zIndex: 2 }}
      animate={{ top: 0 }}
      exit={{ top: '-100%' }}
      transition={{ duration: 0.01 }}
      id='drawer'
    >
      <Box
        height={[495, 600]}
        backgroundColor='background.white'
        borderBottomLeftRadius={[24, 40]}
        borderBottomRightRadius={[24, 40]}
      >
        <Layout flexBasis={[255, 40]} flexShrink='0' />
        <Column width='100%'>
          <Layout flexBasis={[23, 35]} />
          <Row alignItems='center' justifyContent='center'>
            <Box display={['none', 'flex']} width={56}>
              <Logo color='rgba(58, 55, 93, 1)' />
            </Box>
            <Layout flexBasis={[0, 1636]} />
            <Box width={136} display={['none', 'flex']}>
              <Button
                size='wideButtonSmallPaddingNormalHeight'
                variant='darkPurpleBackground'
                iconSVG={<IconArrowUp />}
                gap={20}
                iconRadius='12'
                iconWidth={40}
                iconHeight={40}
                onClick={onClose}
                fill
              >
                <Text fontSize='middle'>
                  <FormattedMessage id='/' defaultMessage='Курсы' />
                </Text>
              </Button>
            </Box>
            <Box width={100} display={['flex', 'none']}>
              <Button
                size='wideButtonSmallPaddingMediumHeight'
                variant='darkPurpleBackground'
                iconSVG={<IconArrowUp />}
                gap={12}
                iconRadius='6'
                iconWidth={28}
                iconHeight={28}
                onClick={onClose}
                fill
              >
                <Text fontSize='medium'>
                  <FormattedMessage id='/' defaultMessage='Курсы' />
                </Text>
              </Button>
            </Box>
          </Row>
        </Column>
        <Layout flexBasis={[40, 40]} flexShrink='0' />
      </Box>
    </motion.div>
  </Renderer>
)
