import { Scrollspy }              from '@makotot/ghostui'

import React                      from 'react'
import { Link }                   from 'react-scroll'

import { Box }                    from '@ui/layout'
import { Column }                 from '@ui/layout'
import { Layout }                 from '@ui/layout'
import { Text }                   from '@ui/text'

import { sections }               from './data'
import { getColor }               from './helpers'
import { getColorLineBackground } from './helpers'
import { getColorDotBackground }  from './helpers'

export const Navbar = ({ sectionRefs }) => (
  <Box
    display={['none', 'flex']}
    position='fixed'
    height={210}
    width={138}
    top={540}
    left={40}
    zIndex={5}
    flexDirection='column'
  >
    <Scrollspy sectionRefs={sectionRefs} offset={-680}>
      {({ currentElementIndexInViewport }) => (
        <>
          <Box
            position='absolute'
            backgroundColor={getColorLineBackground(currentElementIndexInViewport)}
            width={2}
            height={180}
          />
          {sections.map((element) => (
            <Column key={element.name} marginLeft={20}>
              <Link to={element.name} spy smooth duration={1000} style={{ marginTop: -5 }}>
                <Text
                  fontSize='medium'
                  cursor='pointer'
                  color={getColor(currentElementIndexInViewport, element)}
                  style={{ transition: '0.5s' }}
                >
                  {element.name}
                </Text>
              </Link>
              <Layout flexBasis={element.index > 4 ? 0 : 20} />
              <Box
                opacity={currentElementIndexInViewport === element.index ? 1 : 0}
                style={{ transition: '0.2s' }}
                position='absolute'
                width={8}
                height={8}
                borderRadius={10}
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
