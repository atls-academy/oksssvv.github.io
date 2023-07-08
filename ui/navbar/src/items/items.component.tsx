import React        from 'react'
import { useState } from 'react'

import { Box }      from '@ui/layout'
import { Column }   from '@ui/layout'
import { Layout }   from '@ui/layout'
import { Text }     from '@ui/text'

export const Items = ({ section }) => {
  const [selected, setSelected] = useState(false)

  return section.map((el) => (
    <Column key={el.index}>
      <Box height={15} onClick={() => setSelected(el.index)}>
        <Text
          cursor='pointer'
          fontSize='medium'
          color={selected === el.index ? 'text.white' : 'text.light'}
        >
          {el.section}
        </Text>
      </Box>
      <Layout flexBasis={el.index > 4 ? 0 : 20} />
      <Box
        display={selected === el.index ? 'flex' : 'none'}
        position='absolute'
        width={8}
        height={8}
        backgroundColor='white'
        borderRadius='50%'
        left='-3px'
      />
    </Column>
  ))
}
