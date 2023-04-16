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
      <Box width='1160px' >
        <Column>
        <Row>
          <Text fontFamily={'Helvetica'} fontSize={96} color={'white'}>
            Обучаем
          </Text>
        </Row>
        <Row>
          <Text fontFamily={'Helvetica'} fontSize={96} color={'white'}>
            профессионалов
          </Text>
        </Row>
        <Row>
          <Text fontFamily={'Helvetica'} fontSize={96} color={'white'}>
            для революции в
          </Text>
          <Layout flexBasis={28}/>
          <Button shape='formPaddingRounding' appearance='formBackgroundGhost' >
            <Text fontFamily={'Helvetica'} fontSize={80} color={'white'}>
              IT
            </Text>
          </Button>
        </Row>
        <Layout flexBasis={[48]}/>
        <Box width='1160px' maxWidth={1160}>
          <Divider />
        </Box>
        <Layout flexBasis={[48]}/>
        <Row>
          <Column flexBasis={640}>
            <Text fontFamily={'Helvetica'} fontSize={20} lineHeight={'28px'}  color={'white'}>
              Мы не учим программированию и дизайну, мы учим мышлению способному релизовывывать невозможные идеи.
            </Text>
          </Column>
          <Layout flexBasis={[448]}/>
          <Column justifyContent={'center'}>
            <Box>
              <Button shape='formBorder' appearance='formBorder'>
                <IconScroll/>
              </Button>
            </Box>
          </Column>
        </Row>
        <Layout flexBasis={[48]}/>
        </Column>
      </Box>
    </>
  )
}

export { Lead }
