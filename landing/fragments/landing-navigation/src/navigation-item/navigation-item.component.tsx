import React                   from 'react'
import { FC }                  from 'react'

import { Box }                 from '@ui/layout'
import { Link }                from '@ui/link'
import { Text }                from '@ui/text'

import { NavigationItemProps } from './navigation-item.inteface'

export const NavigationItem: FC<NavigationItemProps> = ({ title, link }) => (
  <Box width={200} height={18} justifyContent='center' alignItems='center' flexShrink='0'>
    <Link href={link}>
      <Text fontSize='standard' lineHeight='small' color='text.white'>
        {title}
      </Text>
    </Link>
  </Box>
)
