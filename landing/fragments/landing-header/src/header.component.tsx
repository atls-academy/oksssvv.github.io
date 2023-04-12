import React from 'react';

import { Layout } from '@ui/layout'
import { Box } from '@ui/layout'
import { Row } from '@ui/layout'
import { Logo } from '@ui/logo'

const HeaderBlock = () => {
  return(
    <>
      <Box>
        <Layout>
          <Row>
            <Logo />
          </Row>
        </Layout>
      </Box>
    </>
  )
}

export { HeaderBlock }