import React               from 'react'
import { FC }              from 'react'

import { Box }             from '@ui/layout'

import { AttachmentProps } from './attachment.interface'

const IconAttachment: FC<AttachmentProps> = ({
  icon,
  valueWidth,
  valueHeight,
  valueBackground,
  valueRadius,
}) => (
  <Box
    width={valueWidth}
    height={valueHeight}
    backgroundColor={valueBackground}
    borderRadius={valueRadius}
    justifyContent='center'
    alignItems='center'
    flexShrink='0'
  >
    {icon}
  </Box>
)

export { IconAttachment }
