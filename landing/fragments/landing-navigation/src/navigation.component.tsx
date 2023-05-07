import React      from 'react'

import { Box }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Column } from '@ui/layout'
import { Row }    from '@ui/layout'
import { Logo }   from '@ui/logo'

const Navigation = () => (
  <Box backgroundColor='background.darkGray'>
    <Column width='100%'>
      <Layout flexBasis={[22, 35]} />
      <Row>
        <Layout flexBasis={[20, 40]} />
        <Row>
          <Box width={[40, 56]} flexShrink={0} alignItems='center'>
            <Logo />
          </Box>
        </Row>
        <Layout flexBasis={[20, 40]} />
      </Row>
      <Layout flexBasis={[22, 35]} />
    </Column>
  </Box>
)

export { Navigation }
