import React      from 'react'

import { Box }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Column } from '@ui/layout'
import { Row }    from '@ui/layout'
import { Logo }   from '@ui/logo'

const Navigation = () => (
  <Box backgroundColor='background.darkGray'>
    <Row>
      <Column width='100%'>
        <Layout flexBasis={[22, 35]} />
        <Box width='100%'>
          <Layout flexBasis={[20, 40]} />
          <Row>
            <Box width={[40, 56]} flexShrink={0} alignItems='center'>
              <Logo />
            </Box>
          </Row>
          <Layout flexBasis={[20, 40]} />
        </Box>
        <Layout flexBasis={[22, 35]} />
      </Column>
    </Row>
  </Box>
)

export { Navigation }
