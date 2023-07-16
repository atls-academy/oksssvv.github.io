import React               from 'react'
import { FC }              from 'react'

import { Box }             from '@ui/layout'

import { AttachmentProps } from './attachment.interface'

const IconAttachment: FC<AttachmentProps> = ({
  icon,
  widthIcon,
  heightIcon,
  backgroundIcon,
  radiusIcon,
}) => (
  <Box
    width={widthIcon}
    height={heightIcon}
    backgroundColor={backgroundIcon}
    borderRadius={radiusIcon}
    justifyContent='center'
    alignItems='center'
    flexShrink='0'
  >
    {icon}
  </Box>
)

export { IconAttachment }
