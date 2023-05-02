import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Background }       from '@ui/background'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Text }             from '@ui/text'

const Info = () => (
  <Background
    position='relative'
    display='flex'
    gradient='bgInfoDesktop'
    backgroundSize='cover'
    backgroundRepeat='no-repeat'
    backgroundPosition=''
  >
    <Box width='100%' flexDirection='column'>
      <Layout flexBasis={[0, 160]} flexShrink='0' />
      <Box>
        <Layout flexBasis={[20, 230]} flexShrink='0' />
        <Column>
          <Box width={['335px', '1460px']} display='inline' flexShrink='0'>
            <Text
              fontFamily='primary'
              fontSize={['major', 'great']}
              lineHeight='medium'
              color='text.primary'
            >
              <FormattedMessage id='landing_info.digital' defaultMessage='Digital' />
            </Text>
            <Text
              display='inline'
              fontFamily='primary'
              fontSize={['major', 'great']}
              lineHeight='medium'
              color='text.white'
            >
              <FormattedMessage
                id='landing_info.'
                defaultMessage=' становится всё более многолюдным, востребованность по направлениям при этом не снижается '
              />
            </Text>
            <Box
              display='inline-block'
              width={[52, 76]}
              height={[36, 52]}
              backgroundColor='background.transparent'
              borderRadius={['10px', '12px']}
              verticalAlign='top'
            >
              O
            </Box>
            <Text
              display='inline'
              fontFamily='primary'
              fontSize={['major', 'great']}
              lineHeight='medium'
              color='text.white'
            >
              <FormattedMessage id='landing_info.' defaultMessage=' Но, ' />
            </Text>
            <Text
              fontFamily='primary'
              fontSize={['major', 'great']}
              lineHeight='medium'
              color='text.primary'
            >
              <FormattedMessage id='landing_info.' defaultMessage='специалистов' />
            </Text>
            <Text
              display='inline'
              fontFamily='primary'
              fontSize={['major', 'great']}
              lineHeight='medium'
              color='text.white'
            >
              <FormattedMessage
                id='landing_info.'
                defaultMessage=', готовых нести ответсвенность за свои решения по прежднему мало '
              />
            </Text>
            <Box
              display='inline-block'
              width={[52, 76]}
              height={[36, 52]}
              backgroundColor='background.transparent'
              borderRadius={['10px', '12px']}
              verticalAlign='top'
            >
              O
            </Box>
          </Box>
          <Layout flexBasis={[24, 40]} flexShrink='0' />
          <Box width={['335px', '1460px']} display='inline'>
            <Text
              fontFamily='primary'
              fontSize={['major', 'great']}
              lineHeight='medium'
              color={['text.white', 'text.primary']}
            >
              <FormattedMessage id='landing_info.' defaultMessage='Atlantis Academy' />
            </Text>
            <Text
              display={['none', 'inline']}
              fontFamily='primary'
              fontSize={['major', 'great']}
              lineHeight='medium'
              color='text.white'
            >
              <FormattedMessage id='landing_info.' defaultMessage=' обучает и формирует ' />
            </Text>
            <Text
              display={['inline', 'none']}
              fontFamily='primary'
              fontSize={['major', 'great']}
              lineHeight='medium'
              color='text.white'
            >
              <FormattedMessage id='landing_info.' defaultMessage=' формирует ' />
            </Text>
            <Text
              fontFamily='primary'
              fontSize={['major', 'great']}
              lineHeight='medium'
              color='text.primary'
            >
              <FormattedMessage id='landing_info.' defaultMessage='инженеров' />
            </Text>
            <Text
              display='inline'
              fontFamily='primary'
              fontSize={['major', 'great']}
              lineHeight='medium'
              color='text.white'
            >
              <FormattedMessage id='landing_info.' defaultMessage=' и ' />
            </Text>
            <Text
              fontFamily='primary'
              fontSize={['major', 'great']}
              lineHeight='medium'
              color='text.primary'
            >
              <FormattedMessage id='landing_info.' defaultMessage='архитекторов' />
            </Text>
            <Text
              display='inline'
              fontFamily='primary'
              fontSize={['major', 'great']}
              lineHeight='medium'
              color='text.white'
            >
              <FormattedMessage
                id='landing_info.'
                defaultMessage=', а не программистов и дизайнеров '
              />
            </Text>
            <Box
              display='inline-block'
              width={[52, 76]}
              height={[36, 52]}
              backgroundColor='background.transparent'
              borderRadius={['10px', '12px']}
              verticalAlign='top'
            >
              O
            </Box>
          </Box>
        </Column>
        <Layout flexBasis={[20, 230]} flexShrink='0' />
      </Box>
      <Layout flexBasis={[64, 160]} />
    </Box>
  </Background>
)

export { Info }
