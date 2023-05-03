import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Button }           from '@ui/button'
import { Divider }          from '@ui/divider'
import { IconScroll }       from '@ui/icon'
import { Box }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Column }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

const AboutUs = () => (
  <Box width={['none', 1166]}>
    <Column>
      <Box>
        <Text
          fontFamily='primary'
          fontSize={['large', 'huge']}
          lineHeight='normal'
          color='text.white'
        >
          <FormattedMessage
            id='landing_hero.teach_professionals'
            defaultMessage='Обучаем профессионалов'
          />
        </Text>
      </Box>
      <Box flexWrap='wrap'>
        <Box>
          <Text
            fontFamily='primary'
            fontSize={['large', 'huge']}
            lineHeight='normal'
            color='text.primary'
          >
            <FormattedMessage id='landing_hero.for_revolution' defaultMessage='для революции' />
          </Text>
        </Box>
        <Layout flexBasis={[30, 28]} />
        <Box>
          <Text
            fontFamily='primary'
            fontSize={['large', 'huge']}
            lineHeight='normal'
            color='text.white'
          >
            <FormattedMessage id='landing_hero.in' defaultMessage='в' />
          </Text>
        </Box>
        <Layout flexBasis={[12, 28]} />
        <Box display={['none', 'flex']}
        alignItems='center' 
        justifyContent='center'
        width='148px' 
        height='115px' 
        backgroundColor='background.transparent'
        borderRadius='24px'>
            <Text fontFamily='primary' fontSize='big' lineHeight='normal' color='text.white'>
              <FormattedMessage id='landing_hero.it' defaultMessage='IT' />
            </Text>
        </Box>
        <Box display={['flex', 'none']} alignItems='center'>
          <Text fontFamily='primary' fontSize='large' lineHeight='normal' color='text.white'>
            <FormattedMessage id='landing_hero.it' defaultMessage='IT' />
          </Text>
        </Box>
      </Box>
      <Layout flexBasis={[24, 48]} />
      <Box width={[335, 1160]}>
        <Divider />
      </Box>
      <Layout flexBasis={[24, 48]} />
      <Row>
        <Box width={['100%', 640]} flexShrink='0'>
          <Text
            fontFamily='primary'
            lineHeight='medium'
            fontSize={['medium', 'regular']}
            color='text.white'
          >
            <FormattedMessage
              id='landing_hero.we_dont_teach_programming'
              defaultMessage='Мы не учим программированию и дизайну, мы учим мышлению, способному реализовывывать невозможные идеи.'
            />
          </Text>
        </Box>
        <Layout flexBasis={448} />
        <Box display={['none', 'flex']} alignItems='center'>
          <Button size='bigPaddingMediumHeight' variant='transparentBorder'>
            <IconScroll />
          </Button>
        </Box>
      </Row>
    </Column>
  </Box>
)

export { AboutUs }
