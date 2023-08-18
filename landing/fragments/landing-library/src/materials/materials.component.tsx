import React          from 'react'

import { Box }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Text }       from '@ui/text'

import { Item }       from './item'
import { useLibrary } from '../data'

export const Materials = () => {
  const material = useLibrary()

  return material?.data?.allTutorials.nodes
    .map((element) => (
      <Item
        key={element.title}
        title={element.title}
        technology={element.learningMaterials.skills.map((skills) => (
          <Column key={skills.title}>
            <Box
              border='ghostPrimary'
              borderRadius='little'
              padding='microYSmallX'
              marginRight='micro'
            >
              <Text color='text.blueDark' fontSize='little' textTransform='uppercase'>
                {skills.title}
              </Text>
            </Box>
            <Layout flexBasis={12} />
          </Column>
        ))}
        description={element.learningMaterials.description}
      />
    ))
    .reverse()
}
