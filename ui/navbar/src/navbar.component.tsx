import { Scrollspy }    from '@makotot/ghostui'

import React            from 'react'

import { Box }          from '@ui/layout'

import { Item }         from './item'
import { useNavbar }    from './data'
import { getColorLine } from './helpers'

export const Navbar = ({ sectionRefs }) => {
  const navigation = useNavbar()

  const getId = (id) => navigation?.data?.allNavigation.nodes.find((obj) => obj.id === id)
  const idCollection = ['cG9zdDoyMjE=', 'cG9zdDoyMjI=', 'cG9zdDoyMjQ=', 'cG9zdDoyMjU=']

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
            {idCollection.map((id, index) => (
              <Item
                key={id}
                index={index}
                id={getId(id)?.id}
                title={getId(id)?.title}
                selected={active}
              />
            ))}
          </>
        )}
      </Scrollspy>
    </Box>
  )
}
