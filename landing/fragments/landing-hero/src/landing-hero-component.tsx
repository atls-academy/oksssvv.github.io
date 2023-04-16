import React from "react"

import { Lead } from "./lead-component";
import { SocialLink } from "./social-link-component";

import { Box } from "@ui/layout"
import { Layout } from "@ui/layout"
import { Column } from "@ui/layout"

const LandingHero = () => {
  return(
    <>
      <Box height='960px' backgroundColor='#616161'>
        <Layout flexBasis={[230]}/>
        <Column>
          <Layout flexBasis={[415]}/>
          <Lead/>
        </Column>
        <Layout flexBasis={[394]}/>
        <Column>
          <Layout flexBasis={[712]}/>
          <SocialLink/>
        </Column>
      <Layout flexBasis={[80]}/>
      </Box>
    </>
  )
}

export { LandingHero }
