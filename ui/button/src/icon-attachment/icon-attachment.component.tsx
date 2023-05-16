import React                   from 'react'
import { FC }                  from 'react'

import { Box }                 from '@ui/layout'

import { IconAttachmentProps } from './icon-attachment.interface'

const IconAttachment: FC<IconAttachmentProps> = ({
  iconSVG,
  iconRadius,
  iconWidth,
  iconHeight,
}) => (
  <Box
    width={iconWidth}
    height={iconHeight}
    justifyContent='center'
    alignItems='center'
    borderRadius={iconRadius}
  >
    {iconSVG}
  </Box>
)

export { IconAttachment }
