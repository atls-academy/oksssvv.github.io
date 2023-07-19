import React                   from 'react'

import { CardLibraryMaterial } from '@ui/card'
import { Divider }             from '@ui/divider'
import { Box }                 from '@ui/layout'
import { Column }              from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Text }                from '@ui/text'

import { materialTechnology }  from '../data-material'
import { materialTitle }       from '../data-material'

export const CardsMaterial = (divider) => (
  <>
    {materialTitle.map((item) => (
      <CardLibraryMaterial
        key={item.index} /*eslint-disable-line */
        title={item.name}
        technology={materialTechnology.map((element) => (
          <Box>
            <Column key={element.index}>
              <Box
                border='ghostPrimary'
                borderRadius='little'
                padding='microYSmallX'
                marginRight='micro'
              >
                <Text color='text.blueDark' fontSize='little' textTransform='uppercase'>
                  {element.name}
                </Text>
              </Box>
              <Layout flexBasis={12} />
            </Column>
          </Box>
        ))}
      />
    ))}
    <Divider weight={divider} backgroundColor='background.ghostGray' />
  </>
)
