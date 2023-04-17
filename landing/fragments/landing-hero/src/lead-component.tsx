import React from 'react'

import { Box } from "@ui/layout"
import { Layout } from "@ui/layout"
import { Column } from "@ui/layout"
import { Row } from "@ui/layout"
import { Text } from "@ui/text"
import { Divider } from "@ui/divider"
import { Button } from "@ui/button";
import { IconScroll } from "@ui/icon";


const Lead = () => {
  return(
    <>
      <Box width={['100%']}>
        <Column>
          <Row>
            <Text fontFamily={'Helvetica'} fontSize={[40,96]} color={'white'}>
              Обучаем
            </Text>
          </Row>
          <Row>
            <Text fontFamily={'Helvetica'} fontSize={[40,96]} color={'white'}>
              профессионалов
            </Text>
          </Row>
          <Row>
            <Text fontFamily={'Helvetica'} fontSize={[40,96]} color={'white'}>
              для революции
            </Text>
            <Layout flexBasis={28}/>
            <Text fontFamily={'Helvetica'} fontSize={[40,96]} color={'white'}>
              в
            </Text>
            <Layout flexBasis={28}/>
            <Button shape='formPaddingRounding' appearance='formBackgroundGhost' >
              <Text fontFamily={'Helvetica'} fontSize={[40,80]} color={'white'}>
                IT
              </Text>
            </Button>
          </Row>
          <Layout flexBasis={[24,48]}/>
          <Box width={[320,1160]}>
            <Divider />
          </Box>
          <Layout flexBasis={[24,48]}/>
          <Row>
            <Column flexBasis={[335,640]}>
              <Text fontFamily={'Helvetica'} lineHeight={['19,6px','28px']}  fontSize={[14,20]} color={'white'}>
                Мы не учим программированию и дизайну, мы учим мышлению способному релизовывывать невозможные идеи.
              </Text>
            </Column>
            <Layout flexBasis={[448]}/>
            <Column justifyContent={'center'}>
              <Box display={['none','flex']}>
                <Button shape='formBorder' appearance='formBorder'>
                  <IconScroll/>
                </Button>
              </Box>
            </Column>
          </Row>
          <Layout flexBasis={[0,48]}/>
        </Column>
      </Box>
    </>
  )
}

export { Lead }
