import { Scrollspy }    from '@makotot/ghostui'

import React            from 'react'

import { Box }          from '@ui/layout'

import { Item }         from './item'
import { useNavbar }    from './data'
import { getColorLine } from './helpers'

export const Navbar = ({ sectionRefs }) => {
  const navigation = useNavbar()

  const element = navigation?.data?.allNavigation.nodes

  return (
    <Box
      display={{ _: 'none', standard: 'flex', wide: 'flex', ultra: 'none' }}
      position='fixed'
      height={210}
      width={138}
      top={{ standard: 540, wide: 420 }}
      left={40}
      zIndex={5}
      flexDirection='column'
    >
      <Scrollspy sectionRefs={sectionRefs} offset={-680}>
        {({ currentElementIndexInViewport: active }) => (
          <>
            <Box
              position='absolute'
              backgroundColor={getColorLine(active)}
              width={2}
              height={165}
            />
            <Item index={0} id={element?.[5]?.id} title={element?.[5]?.title} selected={active} />
            <Item index={1} id={element?.[4]?.id} title={element?.[4]?.title} selected={active} />
            <Item index={2} id={element?.[3]?.id} title={element?.[3]?.title} selected={active} />
            <Item index={3} id={element?.[2]?.id} title={element?.[2]?.title} selected={active} />
          </>
        )}
      </Scrollspy>
    </Box>
  )
}
