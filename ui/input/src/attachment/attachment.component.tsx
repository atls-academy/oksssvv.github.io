import React               from 'react'
import { FC }              from 'react'

import { Box }             from '@ui/layout'

import { AttachmentProps } from './attachment.interface'

const IconAttachment: FC<AttachmentProps> = ({ attachmentIcon }) => (
  <Box justifyContent='center' alignItems='center' flexShrink='0'>
    {attachmentIcon}
  </Box>
)

export { IconAttachment }
