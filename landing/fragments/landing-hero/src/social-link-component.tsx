import React from "react"

import { Box } from "@ui/layout"
import { Layout } from "@ui/layout"
import { Column } from "@ui/layout"
import { Link } from "@ui/link"
import { Button } from "@ui/button"
import { IconTelegram } from "@ui/icon"
import { IconGitHub } from "@ui/icon"
import { IconEmail } from "@ui/icon"

const SocialLink = () => {
  return(
    <>
      <Box width='56px' height='200px'>
        <Column alignItems='center'>
          <Box width={[56]} height={[56]} alignItems='center' justifyContent='center'>
            <Link href='https://telegram.org/' target='_blank'>
              <Button shape='iconPaddingRounding' appearance='iconBackgroundGhost'>
                <IconTelegram />
              </Button>
            </Link>
          </Box>
          <Layout flexBasis={[16]}/>
          <Box width={[56]} height={[56]} alignItems='center' justifyContent='center'>
            <Link href='https://github.com/atls-academy' target='_blank'>
              <Button shape='iconPaddingRounding' appearance='iconBackgroundGhost'>
                <IconGitHub />
              </Button>
            </Link>
          </Box>
          <Layout flexBasis={[16]}/>
          <Box width={[56]} height={[56]} alignItems='center' justifyContent='center'>
            <Link href='mailto:me@atls.academy' target='_blank'>
              <Button shape='iconPaddingRounding' appearance='iconBackgroundGhost' >
                <IconEmail />
              </Button>
            </Link>
          </Box>
        </Column>
      </Box>
    </>
  )
}

export { SocialLink }
