import React        from 'react'

import { PlugIcon } from '@ui/icon'
import { Box }      from '@ui/layout'
import { Space }    from '@ui/text'

export const Sphere = () => (
  <>
    <Space count={3} />
    <Box
      display={['none', 'inline-flex']}
      width={76}
      height={52}
      justifyContent='center'
      alignItems='center'
      backgroundColor='background.ghost'
      verticalAlign='sub'
      borderRadius='normal'
    >
      <PlugIcon width={40} height={40} />
    </Box>
    <Space count={3} />
  </>
)
