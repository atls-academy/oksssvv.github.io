import React from 'react'

import { HeaderBlock } from '@landing/header-fragment'
import { Box } from '@ui/layout'
import { Row } from '@ui/layout'
import { Column } from '@ui/layout'
import { Text } from '@ui/text'
import { Button } from '@ui/button'

const Hero = () => {
  return(
    <>
      <Box>
        <Column>
          <HeaderBlock/>
          <Box>
            <Row>
              <Box>
                <Column>
                  <Text></Text>
                  <Text></Text>
                </Column>
              </Box>
              <Box>
                <Column>
                  <Button></Button>
                  <Button></Button>
                  <Button></Button>
                </Column>
              </Box>
            </Row>
          </Box>
        </Column>
      </Box>


    </>
  )
}

export { Hero }