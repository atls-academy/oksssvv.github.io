import { Scrollspy }              from '@makotot/ghostui'

import React                      from 'react'
import { Link }                   from 'react-scroll'

import { Box }                    from '@ui/layout'
import { Column }                 from '@ui/layout'
import { Layout }                 from '@ui/layout'
import { Text }                   from '@ui/text'

import { useNavbar }              from './data'
import { getColor }               from './helpers'
import { getColorLineBackground } from './helpers'
import { getColorDotBackground }  from './helpers'

export const Navbar = ({ sectionRefs }) => {
  const navigation = useNavbar()

  const getLinks = navigation?.data?.allNavigation.nodes.map((el, index) => ({
    index,
    name: el.title,
    id: el.id,
  }))

  const reverseLinks = getLinks?.reverse()

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
      <Scrollspy sectionRefs={sectionRefs} offset={350}>
        {({ currentElementIndexInViewport }) => (
          <>
            <Box
              position='absolute'
              backgroundColor={getColorLineBackground(currentElementIndexInViewport)}
              width={2}
              height={165}
            />
            {reverseLinks?.map((element, index) => (
              // eslint-disable-next-line
              <Column key={index} marginLeft='regular'>
                <Link to={element.id} spy smooth duration={1000} style={{ marginTop: -5 }}>
                  <Text
                    fontSize='medium'
                    cursor='pointer'
                    color={getColor(currentElementIndexInViewport, element)}
                    style={{ transition: '0.5s' }}
                  >
                    {element.name
                      ? element.name.charAt(0).toUpperCase() + element.name.slice(1)
                      : ''}
                  </Text>
                </Link>
                <Layout flexBasis={index > 3 ? 0 : 20} />
                <Box
                  opacity={currentElementIndexInViewport === element.index ? 1 : 0}
                  style={{ transition: '0.2s' }}
                  position='absolute'
                  width={8}
                  height={8}
                  borderRadius='small'
                  backgroundColor={getColorDotBackground(currentElementIndexInViewport)}
                  left={-3.5}
                />
              </Column>
            ))}
          </>
        )}
      </Scrollspy>
    </Box>
  )
}
