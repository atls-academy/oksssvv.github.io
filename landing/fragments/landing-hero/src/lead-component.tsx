import React          from 'react'

import { Button }     from '@ui/button'
import { Divider }    from '@ui/divider'
import { IconScroll } from '@ui/icon'
import { Box }        from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Column }     from '@ui/layout'
import { Row }        from '@ui/layout'
import { Text }       from '@ui/text'

const Lead = () => (
  <Box width={['none', 1166]}>
    <Column>
      <Row flexWrap={['wrap']}>
        <Text
          fontFamily='Helvetica'
          fontSize={[40, 96]}
          lineHeight={['48px', '115px']}
          color='white'
        >
          Обучаем профессионалов
        </Text>
      </Row>
      <Row flexWrap={['wrap']}>
        <Text
          fontFamily='Helvetica'
          fontSize={[40, 96]}
          lineHeight={['48px', '115px']}
          color='white'
        >
          для революции
        </Text>
        <Layout flexBasis={[30, 28]} />
        <Text
          fontFamily='Helvetica'
          fontSize={[40, 96]}
          lineHeight={['48px', '115px']}
          color='white'
        >
          в
        </Text>
        <Layout flexBasis={[12, 28]} />
        <Box display={['none', 'flex']}>
          <Button shape='formPaddingRounding' appearance='formBackgroundGhost'>
            <Text
              fontFamily='Helvetica'
              fontSize={[40, 80]}
              lineHeight={['48px', '96px']}
              color='white'
            >
              IT
            </Text>
          </Button>
        </Box>
        <Box display={['flex', 'none']}>
          <Text fontFamily='Helvetica' fontSize={[40]} lineHeight={['48px']} color='white'>
            IT
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
            fontFamily='Helvetica'
            lineHeight={['19.6px', '28px']}
            fontSize={[14, 20]}
            color='white'
          >
            Мы не учим программированию и дизайну, мы учим мышлению способному релизовывывать
            невозможные идеи.
          </Text>
        </Column>
        <Layout flexBasis={[448]} />
        <Column justifyContent='center'>
          <Box display={['none', 'flex']}>
            <Button shape='formBorder' appearance='formBorder'>
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
