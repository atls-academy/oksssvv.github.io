import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useState }         from 'react'
import { useIntl }          from 'react-intl'

import { Button }           from '@ui/button'
import { ArrowDownIcon }    from '@ui/icon'
import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Logo }             from '@ui/logo'
import { Text }             from '@ui/text'

import { DrawerContainer }  from './drawer'
import { Item }             from './item'

export const Navigation = () => {
  const intl = useIntl()
  const [visible, setVisible] = useState(false)

  return (
    <>
      <DrawerContainer active={visible} onClose={() => setVisible(false)} />
      <Column alignItems='center' height={[80, 128]}>
        <Layout flexBasis={{ _: 22, standard: 35, wide: 10, ultra: 0 }} />
        <Row width='100%' justifyContent='center'>
          <Layout flexBasis={{ _: 20, standard: 40, ultra: 600 }} />
          <Box width={{ _: 40, standard: 56, wide: 56, ultra: 84 }} flexShrink='0'>
            <Logo fill='white' />
          </Box>
          <Layout flexBasis={{ standard: 400, wide: 715, ultra: 500 }} />

          <Row display={['none', 'flex']} justifyContent='center' alignItems='center' width={1290}>
            <Item title={intl.formatMessage({ id: 'navigation.academy' })} path='Academy' />
            <Layout flexBasis={{ standsrd: 20, ultra: 30 }} />
            <Item title={intl.formatMessage({ id: 'navigation.courses' })} path='Courses' />
            <Layout flexBasis={{ standsrd: 20, ultra: 30 }} />
            <Item title={intl.formatMessage({ id: 'navigation.education' })} path='Education' />
            <Layout flexBasis={{ standsrd: 20, ultra: 30 }} />
            <Item title={intl.formatMessage({ id: 'navigation.faq' })} path='FAQ' />
          </Row>

          <Layout flexBasis={{ _: 195, standard: 400, wide: 715, ultra: 500 }} />
          <Box
            width={163}
            display={{ _: 'none', standard: 'flex', wide: 'flex', ultra: 'none' }}
            alignItems='center'
            flexShrink='0'
          >
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
          <Box display={['flex', 'none']} width={100} alignItems='center' flexShrink='0'>
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
          <Box
            width={203}
            display={{ _: 'none', standard: 'none', wide: 'none', ultra: 'flex' }}
            alignItems='center'
            flexShrink='0'
          >
            <Button
              variant='ghost'
              size='bigSizeBigPadding'
              gap={30}
              icon={<ArrowDownIcon width={18} height={9} />}
              widthIcon={60}
              heightIcon={60}
              backgroundIcon='background.white'
              radiusIcon='massive'
              fill
              onClick={() => setVisible(true)}
            >
              <Text color='white' fontSize='averaged'>
                <FormattedMessage id='navigation.courses' />
              </Text>
            </Button>
          </Box>
          <Layout flexBasis={{ _: 20, standard: 40, ultra: 600 }} />
        </Row>
        <Layout flexBasis={[22, 35]} />
      </Column>
    </>
  )
}
