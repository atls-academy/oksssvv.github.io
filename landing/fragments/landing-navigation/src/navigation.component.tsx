import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Button }           from '@ui/button'
import { IconArrowDown }    from '@ui/icon'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Link }             from '@ui/link'
import { Logo }             from '@ui/logo'
import { Text }             from '@ui/text'

const Navigation = () => (
  <Column width='100%'>
    <Layout flexBasis={[22, 35]} />
    <Row>
      <Layout flexBasis={[20, 40]} flexShrink='0' />
      <Row>
        <Box width={[40, 56]} flexShrink={0} alignItems='center'>
          <Logo />
        </Box>
        <Layout flexBasis={[195, 241]} />
        <Box display={['flex', 'none']} width={100} alignItems='center'>
          <Button
            size='wideButtonSmallPaddingMediumHeight'
            variant='transparentLightBackground'
            gap={12}
            iconSVG={<IconArrowDown />}
            iconWidth={28}
            iconHeight={28}
            iconRadius='micro'
            fill
          >
            <Text fontSize='medium' lineHeight='small'>
              <FormattedMessage id='/' defaultMessage='Курсы' />
            </Text>
          </Button>
        </Box>
        <Box display={['none', 'flex']} width={1166} alignItems='end'>
          <Box
            width={217}
            height={55}
            justifyContent='center'
            alignItems='center'
            borderBottom='transparentWhite'
            flexShrink='0'
          >
            <Link href='/'>
              <Text fontSize='standard' lineHeight='small' color='text.white'>
                <FormattedMessage id='/' defaultMessage='Academy' />
              </Text>
            </Link>
          </Box>
          <Layout flexBasis={20} flexShrink='0' />
          <Box
            width={217}
            height={55}
            justifyContent='center'
            alignItems='center'
            borderBottom='transparentWhite'
            flexShrink='0'
          >
            <Link href='/'>
              <Text fontSize='standard' lineHeight='small' color='text.white'>
                <FormattedMessage id='/' defaultMessage='Курсы' />
              </Text>
            </Link>
          </Box>
          <Layout flexBasis={20} flexShrink='0' />
          <Box
            width={217}
            height={55}
            justifyContent='center'
            alignItems='center'
            borderBottom='transparentWhite'
            flexShrink='0'
          >
            <Link href='/'>
              <Text fontSize='standard' lineHeight='small' color='text.white'>
                <FormattedMessage id='/' defaultMessage='Обучение' />
              </Text>
            </Link>
          </Box>
          <Layout flexBasis={20} flexShrink='0' />
          <Box
            width={217}
            height={55}
            justifyContent='center'
            alignItems='center'
            borderBottom='transparentWhite'
            flexShrink='0'
          >
            <Link href='/'>
              <Text fontSize='standard' lineHeight='small' color='text.white'>
                <FormattedMessage id='/' defaultMessage='Стипендия' />
              </Text>
            </Link>
          </Box>
          <Layout flexBasis={20} flexShrink='0' />
          <Box
            width={217}
            height={55}
            justifyContent='center'
            alignItems='center'
            borderBottom='transparentWhite'
            flexShrink='0'
          >
            <Link href='/'>
              <Text fontSize='standard' lineHeight='small' color='text.white'>
                <FormattedMessage id='/' defaultMessage='FAQ' />
              </Text>
            </Link>
          </Box>
        </Box>
        <Layout display={['none', 'flex']} flexBasis={241} flexShrink='0' />
        <Box display={['none', 'flex']} width={136} alignItems='center'>
          <Button
            size='wideButtonSmallPaddingNormalHeight'
            variant='transparentLightBackground'
            gap={20}
            iconSVG={<IconArrowDown />}
            iconWidth={40}
            iconHeight={40}
            iconRadius='normal'
            fill
          >
            <Text fontSize='middle' lineHeight='small'>
              <FormattedMessage id='/' defaultMessage='Курсы' />
            </Text>
          </Button>
        </Box>
      </Row>
    </Row>
  </Column>
)

export { Navigation }
