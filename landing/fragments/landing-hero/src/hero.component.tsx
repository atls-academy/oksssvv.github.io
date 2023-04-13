import React from 'react'

import { Header } from '@landing/header-fragment'
import { Block1 } from '@landing/block1-fragment'

import { Box } from "@ui/layout"
import { Layout } from "@ui/layout"
import { Column } from "@ui/layout"
import { Row } from "@ui/layout"
import { Text } from '@ui/text'
import { Button } from '@ui/button'

const Hero = () => {
  return(
    <>
      <Box width='100%'>
        <Column width='100%'>
          <Header />
          <Block1 />
        </Column>
      </Box>

    </>
  )
}

export { Hero }