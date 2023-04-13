import React from "react"

import { Box } from "@ui/layout"
import { Layout } from "@ui/layout"
import { Column } from "@ui/layout"
import { Row } from "@ui/layout"
import { Text } from "@ui/text"
import { Button } from "@ui/button"

const Block1 = () => {
  return(
    <>
      <Box height={['100%']}>
        <Layout flexBasis={[230]}/>
        <Layout
        width='100%'
        height='100%'
        >
          <Column width={[1160]}>
            <Layout flexBasis={[415]}/>
            <Box>
              *Text*
            </Box>
          </Column>
          <Layout flexBasis={[394]}/>
          <Column justifyContent='flex-end'>
            <Layout flexBasis={[415]}/>
            *Button*
            <Layout flexBasis={[48]}/>
          </Column>
        </Layout>
        <Layout/>
      </Box>
    </>
  )
}

export { Block1 }