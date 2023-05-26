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

export const Line: FC<LineProps> = ({ tech, font }) => {
  const infntLine = useMemo(
    () => keyframes`0% { transform: translateX(0) } 100% { transform: translate(-50%) }`,
    []
  )
  const AnimBox = useMemo(
    () => styled(Box)({ animation: `${infntLine} 400s linear infinite` }),
    [infntLine]
  )

  const techEl = useMemo(
    () =>
      tech.map((el) => (
        <>
          <Delimiter />
          <Text
            color='white'
            textTransform='uppercase'
            fontSize={['greater', 'big']}
            fontFamily={font}
            lineHeight='small'
            whiteSpace='nowrap'
          >
            {el}
          </Text>
        </>
      )),
    [tech, font]
  )

  return (
    <Box>
      <AnimBox>
        <Repeater quantity={50}>{() => techEl}</Repeater>
      </AnimBox>
    </Box>
  )
}
