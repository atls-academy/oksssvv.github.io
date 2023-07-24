import React            from 'react'

import { Divider }      from '@ui/divider'
import { Box }          from '@ui/layout'
import { Column }       from '@ui/layout'
import { Layout }       from '@ui/layout'
import { Text }         from '@ui/text'

import { Headlines }    from './data'
import { Technologies } from './data'
import { Item }          from './item'

export const Materials = (divider) => (
  <>
    {Headlines.map((title) => (
      <Item
        key={title.index} /*eslint-disable-line */
        title={title.name}
        technology={Technologies.map((technology) => (
          <Column key={technology.index}>
            <Box
              border='ghostPrimary'
              borderRadius='little'
              padding='microYSmallX'
              marginRight='micro'
            >
              <Text color='text.blueDark' fontSize='little' textTransform='uppercase'>
                {technology.name}
              </Text>
            </Box>
            <Layout flexBasis={12} />
          </Column>
        ))}
      />
    ))}
    <Divider weight={divider} backgroundColor='background.ghostGray' />
  </>
)
