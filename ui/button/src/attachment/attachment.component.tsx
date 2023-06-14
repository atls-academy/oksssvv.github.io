import React                   from 'react'
import { FC }                  from 'react'

import { Box }                 from '@ui/layout'

import { AttachmentProps } from './attachment.interface'

const IconAttachment: FC<AttachmentProps> = ({
  icon,
  containerWidth,
  containerHeight,
  containerColor
}) => (
  <Box
    width={containerWidth}
    height={containerHeight}
    backgroundColor={containerColor}
    justifyContent='center'
    alignItems='center'
    flexShrink='0'
  >
    {icon}
  </Box>
)

export { IconAttachment }
