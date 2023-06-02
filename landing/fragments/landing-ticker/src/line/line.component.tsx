import styled        from '@emotion/styled'
import { keyframes } from '@emotion/react'

import React         from 'react'
import { FC }        from 'react'
import { useMemo }   from 'react'

import { Box }       from '@ui/layout'
import { Text }      from '@ui/text'
import { Repeater }  from '@ui/utils'

import { Delimiter } from './delimiter'
import { LineProps } from './line.interface'

export const Line: FC<LineProps> = ({ technology, font }) => {
  const infinityLine = useMemo(
    () => keyframes`0% { transform: translateX(0) } 100% { transform: translate(-50%) }`,
    []
  )
  const AnimationBox = useMemo(
    () => styled(Box)({ animation: `${infinityLine} 400s linear infinite` }),
    [infinityLine]
  )

  const technologyElement = useMemo(
    () =>
      technology.map((item) => (
        <Box key={item.id}>
          <Delimiter />
          <Text
            color='white'
            textTransform='uppercase'
            fontSize={['greater', 'big']}
            fontFamily={font}
            lineHeight='small'
            whiteSpace='nowrap'
          >
            {item.name}
          </Text>
        </Box>
      )),
    [technology, font]
  )

  return (
    <Box>
      <AnimationBox>
        <Repeater quantity={50}>{() => technologyElement}</Repeater>
      </AnimationBox>
    </Box>
  )
}
