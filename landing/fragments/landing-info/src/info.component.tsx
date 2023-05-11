import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { ImageBlock }       from '@ui/image'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Text }             from '@ui/text'

const Info = () => (
  <Box width='100%' flexDirection='column'>
    <Layout flexBasis={[64, 160]} flexShrink='0' />
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
            display={['none', 'inline-flex']}
            width={['52px', '76px']}
            height={['36px', '52px']}
            backgroundColor='background.transparent'
            borderRadius={['10px', '12px']}
            justifyContent='center'
            alignItems='center'
            verticalAlign='sub'
          >
            <ImageBlock src='/info-icon-sphere.png' width={40} height={40} />
          </Box>
          <Box
            display={['inline-flex', 'none']}
            width={['52px', '76px']}
            height={['36px', '52px']}
            backgroundColor='background.transparent'
            borderRadius={['10px', '12px']}
            justifyContent='center'
            alignItems='center'
            verticalAlign='sub'
          >
            <ImageBlock src='/info-icon-sphere.png' width={28} height={28} />
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
            display={['none', 'inline-flex']}
            width={['52px', '76px']}
            height={['36px', '52px']}
            backgroundColor='background.transparent'
            borderRadius={['10px', '12px']}
            justifyContent='center'
            alignItems='center'
            verticalAlign='sub'
          >
            <ImageBlock src='/info-icon-sphere.png' width={40} height={40} />
          </Box>
          <Box
            display={['inline-flex', 'none']}
            width={['52px', '76px']}
            height={['36px', '52px']}
            backgroundColor='background.transparent'
            borderRadius={['10px', '12px']}
            justifyContent='center'
            alignItems='center'
            verticalAlign='sub'
          >
            <ImageBlock src='/info-icon-sphere.png' width={28} height={28} />
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
          <Box display={['none', 'inline']}>
            <Text
              display='inline'
              fontFamily='primary'
              fontSize={['major', 'great']}
              lineHeight='medium'
              color='text.white'
            >
              <FormattedMessage id='landing_info.' defaultMessage=' обучает и формирует ' />
            </Text>
          </Box>
          <Box display={['inline', 'none']}>
            <Text
              display='inline'
              fontFamily='primary'
              fontSize={['major', 'great']}
              lineHeight='medium'
              color='text.white'
            >
              <FormattedMessage id='landing_info.' defaultMessage=' формирует ' />
            </Text>
          </Box>
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
            display={['none', 'inline-flex']}
            width={['52px', '76px']}
            height={['36px', '52px']}
            backgroundColor='background.transparent'
            borderRadius={['10px', '12px']}
            justifyContent='center'
            alignItems='center'
            verticalAlign='sub'
          >
            <ImageBlock src='/info-icon-sphere.png' width={40} height={40} />
          </Box>
          <Box
            display={['inline-flex', 'none']}
            width={['52px', '76px']}
            height={['36px', '52px']}
            backgroundColor='background.transparent'
            borderRadius={['10px', '12px']}
            justifyContent='center'
            alignItems='center'
            verticalAlign='sub'
          >
            <ImageBlock src='/info-icon-sphere.png' width={28} height={28} />
          </Box>
        </Box>
      </Column>
      <Layout flexBasis={[20, 230]} flexShrink='0' />
    </Box>
    <Layout flexBasis={[64, 160]} />
  </Box>
)

export { Info }
