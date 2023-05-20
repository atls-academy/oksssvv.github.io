import React             from 'react'
import { FC }            from 'react'

import { Box }           from '@ui/layout'
import { Link }          from '@ui/link'
import { Text }          from '@ui/text'

import { NavBlockProps } from './nav-block.inteface'

export const NavBlock: FC<NavBlockProps> = ({ title, link }) => (
  <Box
    width={217}
    height={55}
    justifyContent='center'
    alignItems='center'
    borderBottom='transparentWhite'
    flexShrink='0'
  >
    <Link href={link}>
      <Text fontSize='standard' lineHeight='small' color='text.white'>
        {title}
      </Text>
    </Link>
  </Box>
)
