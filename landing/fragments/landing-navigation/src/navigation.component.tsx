import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useState }         from 'react'
import { useIntl }          from 'react-intl'

import { Button }           from '@ui/button'
import { Drawer }           from '@ui/drawer'
import { ArrowDownIcon }    from '@ui/icon'
import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Logo }             from '@ui/logo'
import { Text }             from '@ui/text'

import { Item }             from './item'

export const Navigation = () => {
  const intl = useIntl()

  const [visible, setVisible] = useState(false)

  return (
    <>
      <Drawer active={visible} onClose={() => setVisible(false)} />
      <Column height={[80, 128]}>
        <Layout flexBasis={[22, 35]} />
        <Row justifyContent='center'>
          <Layout flexBasis={[0, 40]} />
          <Box width={[40, 56]}>
            <Logo fill='white' />
          </Box>
          <Row display={['none', 'flex']} justifyContent='center' alignItems='center'>
            <Item title={intl.formatMessage({ id: 'navigation.academy' })} path='/' />
            <Layout flexBasis={20} />
            <Item title={intl.formatMessage({ id: 'navigation.courses' })} path='/' />
            <Layout flexBasis={20} />
            <Item title={intl.formatMessage({ id: 'navigation.education' })} path='/' />
            <Layout flexBasis={20} />
            <Item title={intl.formatMessage({ id: 'navigation.faq' })} path='/' />
          </Row>
          <Box width={163} display={['none', 'flex']} alignItems='center' flexShrink='0'>
            <Button
              variant='ghost'
              size='normalSizeNormalPadding'
              gap={20}
              icon={<ArrowDownIcon width={12} height={6} />}
              widthIcon={48}
              heightIcon={48}
              backgroundIcon='background.white'
              radiusIcon='normal'
              fill
              onClick={() => setVisible(true)}
            >
              <Text color='white' fontSize='regular'>
                <FormattedMessage id='navigation.courses' />
              </Text>
            </Button>
          </Box>
          <Layout display={['flex', 'none']} flexBasis={195} />
          <Box width={100} display={['flex', 'none']} alignItems='center' flexShrink='0'>
            <Button
              variant='ghost'
              size='normalSizeSmallPadding'
              gap={12}
              icon={<ArrowDownIcon width={9} height={4.5} />}
              widthIcon={28}
              heightIcon={28}
              backgroundIcon='background.white'
              radiusIcon='micro'
              fill
              onClick={() => setVisible(true)}
            >
              <Text color='white' fontSize='medium'>
                <FormattedMessage id='navigation.courses' />
              </Text>
            </Button>
          </Box>
          <Layout flexBasis={[0, 40]} />
        </Row>
        <Layout flexBasis={[22, 35]} />
      </Column>
    </>
  )
}
