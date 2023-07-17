import React                   from 'react'
import { FC }                  from 'react'

import { Box }                 from '@ui/layout'

import { AttachmentIconProps } from './attachment-icon.interfaces'

export const IconAttachment: FC<AttachmentIconProps> = ({ attachmentIcon }) => (
  <Box justifyContent='center' alignItems='center' flexShrink='0'>
    {attachmentIcon}
  </Box>
)
