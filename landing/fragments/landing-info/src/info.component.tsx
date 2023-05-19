import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { ImageBlock }       from '@ui/image'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Text }             from '@ui/text'
import { Space }            from '@ui/text'

const Info = () => (
  <Box width='100%' flexDirection='column'>
    <Layout flexBasis={[64, 160]} flexShrink='0' />
    <Box>
      <Layout flexBasis={[20, 230]} flexShrink='0' />
      <Column>
        <Box width={['335px', '1460px']} flexShrink='0' display='inline'>
          <Text color='text.indigo' fontSize={['major', 'great']} lineHeight='medium'>
            <FormattedMessage id='landing_info.digital' defaultMessage='Digital' />
          </Text>
          <Space count={3} />
          <Text
            display='inline'
            color='text.white'
            fontSize={['major', 'great']}
            lineHeight='medium'
          >
            <FormattedMessage
              id='landing_info.getting_more_crowded'
              defaultMessage='становится всё более многолюдным, востребованность по направлениям при этом не снижается'
            />
          </Text>
          <Space count={3} />
          <Box
            display='inline-flex'
            width={['52px', '76px']}
            height={['36px', '52px']}
            backgroundColor='background.transparent'
            borderRadius={['10px', '12px']}
            justifyContent='center'
            alignItems='center'
          >
            <Box width={[28, 40]} height={[28, 40]}>
              <ImageBlock src='/sphere-white.png' />
            </Box>
          </Box>
          <Space count={3} />
          <Text
            display='inline'
            color='text.white'
            fontSize={['major', 'great']}
            lineHeight='medium'
          >
            <FormattedMessage id='landing_info.but' defaultMessage=' Но, ' />
          </Text>
          <Space count={3} />
          <Text color='text.indigo' fontSize={['major', 'great']} lineHeight='medium'>
            <FormattedMessage id='landing_info.specialists' defaultMessage='специалистов' />
          </Text>
          <Text
            display='inline'
            color='text.white'
            fontSize={['major', 'great']}
            lineHeight='medium'
          >
            <FormattedMessage
              id='landing_info.ready_take_responsibility'
              defaultMessage=', готовых нести ответсвенность за свои решения по прежднему мало'
            />
          </Text>
          <Space count={3} />
          <Box
            display='inline-flex'
            width={['52px', '76px']}
            height={['36px', '52px']}
            backgroundColor='background.transparent'
            borderRadius={['10px', '12px']}
            justifyContent='center'
            alignItems='center'
          >
            <Box width={[28, 40]} height={[28, 40]}>
              <ImageBlock src='/sphere-white.png' />
            </Box>
          </Box>
        </Box>
        <Layout flexBasis={[24, 40]} flexShrink='0' />
        <Box width={['335px', '1460px']} display='inline'>
          <Text
            color={['text.white', 'text.indigo']}
            fontSize={['major', 'great']}
            lineHeight='medium'
          >
            <FormattedMessage
              id='landing_info.atlantis_academy'
              defaultMessage='Atlantis Academy'
            />
          </Text>
          <Space count={3} />
          <Box display={['none', 'inline']}>
            <Text display='inline' color='text.white' fontSize='great' lineHeight='medium'>
              <FormattedMessage
                id='landing_info.teaches_and_shapes'
                defaultMessage='обучает и формирует'
              />
            </Text>
          </Box>
          <Space count={3} />
          <Box display={['inline', 'none']}>
            <Text display='inline' color='text.white' fontSize='major' lineHeight='medium'>
              <FormattedMessage id='landing_info.shapes' defaultMessage='формирует' />
            </Text>
            <Space count={3} />
          </Box>
          <Text color='text.indigo' fontSize={['major', 'great']} lineHeight='medium'>
            <FormattedMessage id='landing_info.engineers' defaultMessage='инженеров' />
          </Text>
          <Space count={3} />
          <Text
            display='inline'
            color='text.white'
            fontSize={['major', 'great']}
            lineHeight='medium'
          >
            <FormattedMessage id='landing_info.and' defaultMessage='и' />
          </Text>
          <Space count={3} />
          <Text color='text.indigo' fontSize={['major', 'great']} lineHeight='medium'>
            <FormattedMessage id='landing_info.architects' defaultMessage='архитекторов' />
          </Text>
          <Text
            display='inline'
            color='text.white'
            fontSize={['major', 'great']}
            lineHeight='medium'
          >
            <FormattedMessage
              id='landing_info.not_programmers_and_designers'
              defaultMessage=', а не программистов и дизайнеров'
            />
          </Text>
          <Space count={3} />
          <Box
            display='inline-flex'
            width={['52px', '76px']}
            height={['36px', '52px']}
            backgroundColor='background.transparent'
            borderRadius={['10px', '12px']}
            justifyContent='center'
            alignItems='center'
          >
            <Box width={[28, 40]} height={[28, 40]}>
              <ImageBlock src='/sphere-white.png' />
            </Box>
          </Box>
        </Box>
      </Column>
      <Layout flexBasis={[20, 230]} flexShrink='0' />
    </Box>
    <Layout flexBasis={[64, 160]} />
  </Box>
)

export { Info }
