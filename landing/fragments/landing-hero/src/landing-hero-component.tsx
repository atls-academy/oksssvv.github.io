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
      <Box height='960px' backgroundColor='lightGray'>
        <Layout flexBasis={[230]}/>
        <Column>
          <Layout flexBasis={[415]}/>
          <Box width='1160px' height='497px' backgroundColor='gray'>
            <Lead/>
          </Box>
        </Column>
        <Layout flexBasis={[394]}/>
        <Column>
          <Layout flexBasis={[712]}/>
          <Box width='56px' height='200px' backgroundColor='gray'>
            <SocialLink/>
          </Box>
      </Column>
      <Layout flexBasis={[80]}/>
      </Box>
    </>
  )
}

export { LandingHero }