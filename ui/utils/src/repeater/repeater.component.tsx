import React             from 'react'
import { FC }            from 'react'

import { Condition }     from '@ui/condition'

import { RepeaterProps } from './repeater.interface'

const Repeater: FC<RepeaterProps> = ({ quantity, item, children }) => {
  if (typeof children !== 'function') throw new Error('Repeater: children must be a function')

  return (
    <>
      <Condition match={quantity === undefined}>{item?.map(children)}</Condition>
      <Condition match={quantity !== undefined}>
        {[...new Array(quantity)]?.map(children)}
      </Condition>
    </>
  )
}

export { Repeater }
