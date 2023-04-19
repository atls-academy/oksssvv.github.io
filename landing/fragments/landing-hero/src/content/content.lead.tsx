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

const Lead = () => (
  <Box width={['none', 1166]}>
    <Column>
      <Row flexWrap={['wrap']}>
        <Text
          fontFamily='main'
          fontSize={['large', 'huge']}
          lineHeight={['medium', 'normal']}
          color='white'
        >
          <FormattedMessage
            id='landing_hero_lead.teach_professionals'
            defaultMessage='Обучаем профессионалов'
          />
        </Text>
      </Row>
      <Row flexWrap={['wrap']}>
        <Text
          fontFamily={['main']}
          fontSize={['large', 'huge']}
          lineHeight={['medium', 'normal']}
          color='white'
        >
          <FormattedMessage id='landing_hero_lead.for_revolution' defaultMessage='для революции' />
        </Text>
        <Layout flexBasis={[30, 28]} />
        <Text
          fontFamily='main'
          fontSize={['large', 'huge']}
          lineHeight={['medium', 'normal']}
          color='white'
        >
          <FormattedMessage id='landing_hero_lead.in' defaultMessage='в' />
        </Text>
        <Layout flexBasis={[12, 28]} />
        <Box display={['none', 'flex']}>
          <Button size='formBig' variant='iconTransparent'>
            <Text
              fontFamily='main'
              fontSize={['large', 'big']}
              lineHeight={['medium', 'normal']}
              color='white'
            >
              <FormattedMessage id='landing_hero_lead.it' defaultMessage='IT' />
            </Text>
          </Button>
        </Box>
        <Box display={['flex', 'none']}>
          <Text fontFamily='main' fontSize={['large']} lineHeight={['normal']} color='white'>
            <FormattedMessage id='landing_hero_lead.it' defaultMessage='IT' />
          </Text>
        </Box>
      </Row>
      <Layout flexBasis={[24, 48]} />
      <Box width={[335, 1160]}>
        <Divider />
      </Box>
      <Layout flexBasis={[24, 48]} />
      <Row>
        <Column flexBasis={['100%', 640]} flexShrink={[0]}>
          <Text
            fontFamily='main'
            lineHeight={['medium', 'medium']}
            fontSize={['small', 'medium']}
            color='white'
          >
            <FormattedMessage
              id='landing_hero_lead.we_dont_teach_programming'
              defaultMessage='Мы не учим программированию и дизайну, мы учим мышлению способному релизовывывать невозможные идеи.'
            />
          </Text>
        </Column>
        <Layout flexBasis={[448]} />
        <Column justifyContent='center'>
          <Box display={['none', 'flex']}>
            <Button size='formNormal' variant='iconBorder'>
              <IconScroll />
            </Button>
          </Box>
        </Column>
      </Row>
      <Layout flexBasis={[0, 48]} />
    </Column>
  </Box>
)

export { Lead }
