import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useState }         from 'react'
import { useIntl }          from 'react-intl'

import { Button }           from '@ui/button'
import { Drawer }           from '@ui/drawer'
import { IconArrowDown }    from '@ui/icon'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Logo }             from '@ui/logo'
import { Text }             from '@ui/text'

import { NavBlock }         from './nav-block'

export const Navigation = () => {
  const intl = useIntl()
  const [visible, setVisible] = useState<boolean>(false)
  return (
    <>
      <Drawer active={visible} onClose={() => setVisible(false)} />
      <Column>
        <Layout flexBasis={[20, 35]} />
        <Row width='100%' justifyContent='center'>
          <Layout flexBasis={[20, 40]} flexShrink='0' />
          <Box width={[40, 56]} flexShrink={0} alignItems='center'>
            <Logo color='white' />
          </Box>
          <Layout flexBasis={[195, 241]} />
          <Box display={['flex', 'none']} width={100} alignItems='center' flexShrink='0'>
            <Button
              size='wideButtonSmallPaddingMediumHeight'
              variant='transparentLightBackground'
              gap={12}
              iconSVG={<IconArrowDown />}
              iconWidth={28}
              iconHeight={28}
              iconRadius='micro'
              onClick={() => setVisible(true)}
              fill
            >
              <Text fontSize='medium'>
                <FormattedMessage id='/' defaultMessage='Курсы' />
              </Text>
            </Button>
          </Box>
          <Layout flexBasis={[20, 0]} />
          <Box display={['none', 'flex']} alignItems='end'>
            <NavBlock title={intl.formatMessage({ id: '/', defaultMessage: 'Academy' })} link='/' />
            <Layout flexBasis={20} flexShrink='0' />
            <NavBlock title={intl.formatMessage({ id: '/', defaultMessage: 'Курсы' })} link='/' />
            <Layout flexBasis={20} flexShrink='0' />
            <NavBlock
              title={intl.formatMessage({ id: '/', defaultMessage: 'Обучение' })}
              link='/'
            />
            <Layout flexBasis={20} flexShrink='0' />
            <NavBlock
              title={intl.formatMessage({ id: '/', defaultMessage: 'Стипендия' })}
              link='/'
            />
            <Layout flexBasis={20} flexShrink='0' />
            <NavBlock title={intl.formatMessage({ id: '/', defaultMessage: 'FAQ' })} link='/' />
          </Box>
          <Layout flexBasis={[0, 310]} />
          <Box display={['none', 'flex']} width={136} alignItems='center' flexShrink='0'>
            <Button
              size='wideButtonSmallPaddingNormalHeight'
              variant='transparentLightBackground'
              gap='14%'
              iconSVG={<IconArrowDown />}
              iconWidth={40}
              iconHeight={40}
              iconRadius='normal'
              onClick={() => setVisible(true)}
              fill
            >
              <Text fontSize='middle' lineHeight='small'>
                <FormattedMessage id='/' defaultMessage='Курсы' />
              </Text>
            </Button>
          </Box>
          <Layout flexBasis={[0, 40]} flexShrink='0' />
        </Row>
      </Column>
    </>
  )
}
