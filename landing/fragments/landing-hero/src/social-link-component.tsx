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
      <Box width={['100%']} justifyContent='center'>
      <Box width={[335,56]} height={[44,200]}  justifyContent='space-between' >
        <Column alignItems='center' width={['100%']}>
          <Box flexDirection={['row','column']} width={['100%']} justifyContent={['space-between']} >
            <Link href='https://telegram.org/' target='_blank'>
              <Button shape='iconPaddingRounding' appearance='iconBackgroundGhost'>
                <IconTelegram />
              </Button>
            </Link>
            <Layout flexBasis={[16]}/>
            <Link href='https://github.com/atls-academy' target='_blank'>
              <Button shape='iconPaddingRounding' appearance='iconBackgroundGhost'>
                <IconGitHub />
              </Button>
            </Link>
            <Layout flexBasis={[16]}/>
            <Link href='mailto:me@atls.academy' target='_blank'>
              <Button shape='iconPaddingRounding' appearance='iconBackgroundGhost' >
                <IconEmail />
              </Button>
            </Link>
          </Box>
        </Column>
      </Box>
    </Box>
    </>
  )
}

export { SocialLink }
