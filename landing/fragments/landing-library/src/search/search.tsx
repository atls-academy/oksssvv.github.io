import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Button }           from '@ui/button'
import { Box }              from '@ui/layout'
import { Text }             from '@ui/text'

export const Search = (
  <Box width={102} flexShrink='0'>
    <Button variant='accent' size='smallSizeSamePadding'>
      <Text color='text.white' fontSize='middle'>
        <FormattedMessage id='library.input.text-button.search' />
      </Text>
    </Button>
  </Box>
)
