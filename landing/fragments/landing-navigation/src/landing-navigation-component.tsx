import React from 'react';

import { Box } from "@ui/layout"
import { Layout } from "@ui/layout"
import { Column } from "@ui/layout"
import { Row } from "@ui/layout"
import { Logo } from "@ui/logo";

const LandingNavigation = () => {
  return(
    <>
      <Box backgroundColor='#616161'>
        <Column width='100%'>
          <Layout flexBasis={[35]}/>
          <Box width='100%'>
            <Layout flexBasis={[40]}/>
            <Row>
              <Box
                width={[56]}
                height={[50]}
                alignItems='center'
              >
                <Logo/>
              </Box>
            </Row>
          </Box>
          <Layout flexBasis={[35]}/>
        </Column>
      </Box>
    </>
  )
}

export { LandingNavigation }
