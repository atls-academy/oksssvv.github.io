import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { Item }             from '@landing/navigation-fragment'
import { Button }           from '@ui/button'
import { Drawer }           from '@ui/drawer'
import { ArrowUpIcon }      from '@ui/icon'
import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Logo }             from '@ui/logo'
import { Text }             from '@ui/text'

import { CardsDesktop }     from './cards'
import { CardsMobile }      from './cards'

export const DrawerContainer = ({ active, onClose }) => {
  const intl = useIntl()
  return (
    <Drawer heightDrawer={[495, 610]} active={active}>
      <Layout flexBasis={[22, 35]} />
      <Row>
        <Layout flexBasis={[20, 40]} />
        <Box width={[40, 56]}>
          <Logo fill='rgba(58, 55, 93, 1)' />
        </Box>
        <Layout display={['flex', 'none']} flexBasis={195} />
        <Row display={['none', 'flex']} justifyContent='center' alignItems='center'>
          <Item
            backColor='light'
            title={intl.formatMessage({ id: 'navigation.academy' })}
            path='/'
          />
          <Layout flexBasis={20} />
          <Item
            backColor='light'
            title={intl.formatMessage({ id: 'navigation.courses' })}
            path='/'
          />
          <Layout flexBasis={20} />
          <Item
            backColor='light'
            title={intl.formatMessage({ id: 'navigation.education' })}
            path='/'
          />
          <Layout flexBasis={20} />
          <Item backColor='light' title={intl.formatMessage({ id: 'navigation.faq' })} path='/' />
        </Row>
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
              <FormattedMessage id='navigation.courses' />
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
              <FormattedMessage id='navigation.courses' />
            </Text>
          </Button>
        </Box>
        <Layout flexBasis={[20, 40]} />
      </Row>
      <Layout flexBasis={[78, 50]} />
      <Row display={['none', 'flex']} height={430} maxWidth={1840}>
        <CardsDesktop />
      </Row>
      <Column display={['flex', 'none']} height={337} maxWidth={335}>
        <CardsMobile />
      </Column>
    </Drawer>
  )
}
