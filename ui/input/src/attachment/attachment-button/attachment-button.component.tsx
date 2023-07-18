import React                     from 'react'
import { FC }                    from 'react'

import { Button }                from '@ui/button'
import { Box }                   from '@ui/layout'
import { Text }                  from '@ui/text'

import { AttachmentButtonProps } from './attachment-button.interfaces'

export const ButtonAttachment: FC<AttachmentButtonProps> = ({
  attachmentButton,
  textButton,
  backgroundButton,
}) => (
  <Box
    display={attachmentButton ? 'flex' : 'none'}
    justifyContent='center'
    alignItems='center'
    flexShrink='0'
  >
    <Button size='smallSizeSamePadding' variant={backgroundButton}>
      <Text fontSize='middle' color='text.white'>
        {textButton}
      </Text>
    </Button>
  </Box>
)
