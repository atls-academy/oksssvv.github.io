import React from 'react';

import { Box } from '@ui/layout'
import { Row } from '@ui/layout'
import { Logo } from '@ui/logo'

const HeaderBlock = () => {
  return(
    <>
      <Box>
        <Row>
          <Logo />
        </Row>
      </Box>
    </>
  )
}

export { HeaderBlock }