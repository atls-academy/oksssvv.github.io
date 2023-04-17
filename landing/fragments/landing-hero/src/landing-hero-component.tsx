import React from "react"

import { Lead } from "./lead-component";
import { SocialLink } from "./social-link-component";

import { Box } from "@ui/layout"
import { Layout } from "@ui/layout"
import { Column } from "@ui/layout"
import { Row } from "@ui/layout"

const LandingHero = () => {
  return(
    <>
      <Box width={['100%']} backgroundColor='#616161' flexDirection={['column']}>
      <Column >
        <Layout flexBasis={[252,415]}/>
      </Column>
      <Row width={['100%']}>
      <Box width={['100%']} flexDirection={['column','row']} backgroundColor='#616161'>
        <Layout flexBasis={[0,230]}/>
        <Box>
          <Layout flexBasis={[20,0]} flexShrink={[0]}/>
            <Lead/>
          <Layout flexBasis={[20,0]} flexShrink={[0]}/>
        </Box>
        <Layout flexBasis={[24,394]}/>
        <Box>
          <SocialLink/>
        </Box>
      <Layout flexBasis={[20,80]}/>
      </Box>
      </Row>
    </Box>
    </>
  )
}

export { LandingHero }
