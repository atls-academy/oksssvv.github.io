import React               from 'react'
import { FC }              from 'react'

import { Box }             from '@ui/layout'

import { AttachmentProps } from './attachment.interface'

const IconAttachment: FC<AttachmentProps> = ({
  icon,
  valueWidthIcon,
  valueHeightIcon,
  valueBackgroundIcon,
  valueRadiusIcon,
}) => (
  <Box
    width={valueWidthIcon}
    height={valueHeightIcon}
    backgroundColor={valueBackgroundIcon}
    borderRadius={valueRadiusIcon}
    justifyContent='center'
    alignItems='center'
    flexShrink='0'
  >
    {icon}
  </Box>
)

export { IconAttachment }
