import React from 'react';

import { Box } from "@ui/layout"
import { Layout } from "@ui/layout"
import { Column } from "@ui/layout"
import { Row } from "@ui/layout"
import { Logo } from "@ui/logo";

const Header = () => {
  return(
    <>
      <Box>
        <Column width='100%' alignItems='center'>
          <Layout flexBasis={[35]}/>
          <Box width='100%'>
            <Layout flexBasis={[40]}/>
            <Row justifyContent={['space-between']} alignItems=''>
              <Box width={[56]} flexShrink={0}>
                *Logo*
              </Box>
            </Row>
            <Layout flexBasis={[40]}/>
          </Box>
          <Layout flexBasis={[35]}/>
        </Column>
      </Box>
    </>
  )
}

export { Header }