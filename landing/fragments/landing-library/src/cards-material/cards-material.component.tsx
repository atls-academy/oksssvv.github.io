import React                   from 'react'

import { CardLibraryMaterial } from '@ui/card'
import { Divider }             from '@ui/divider'
import { Box }                 from '@ui/layout'
import { Column }              from '@ui/layout'
import { Layout }               from '@ui/layout'
import { Text }                from '@ui/text'

import { materialTechnology }  from '../data-material'
import { materialTitle }       from '../data-material'

export const CardsMaterial = (divider) => (
  <Column>
    {materialTitle.map((item) => (
      <CardLibraryMaterial
        key={item.index} /*eslint-disable-line */
        title={item.name}
        technology={materialTechnology.map((element) => (
          <Column key={element.index}>
            <Box
              display='inline-flex'
              border='ghostPrimary'
              marginRight={10}
              padding='10px 12px 10px 12px'
              borderRadius='little'
            >
              <Text color='text.blueDark' fontSize='little' textTransform='uppercase'>
                {element.name}
              </Text>
            </Box>
            <Layout flexBasis={12} />
          </Column>
        ))}
      />
    ))}
    <Divider weight={divider} backgroundColor='background.ghostGray' />
  </Column>
)
