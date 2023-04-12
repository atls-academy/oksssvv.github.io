import React from 'react'

import { HeaderBlock } from '@landing/header-fragment'
import { Box } from '@ui/layout'
import { Layout } from '@ui/layout'
import { Row } from '@ui/layout'
import { Column } from '@ui/layout'
import { Text } from '@ui/text'
import { Button } from '@ui/button'

const Hero = () => {
  return(
    <>
      <Box>
        <Column>
          <Box>
              <HeaderBlock/>
          </Box>
          <Box>
            <Row>
              <Text/>
            </Row>
            <Row>
              <Box>
                <Button/>
                <Button/>
                <Button/>
              </Box>
            </Row>
          </Box>
        </Column>
      </Box>
    </>
  )
}

export { Hero }