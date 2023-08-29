import React           from 'react'
import { motion }      from 'framer-motion'
import { useState }    from 'react'

import { Condition }   from '@ui/condition'
import { Divider }     from '@ui/divider'
import { Column }      from '@ui/layout'
import { useViewport } from '@ui/utils'

import { Answer }      from './answer'
import { Question }    from './question'

export const Accordion = ({ screen, answer, item }) => {
  const [selected, setSelected] = useState<number | null>(null)
  const items = () => (screen === 'wide' ? Array.from({ length: 3 }) : Array.from({ length: 6 }))
  const { mobile, desktop } = useViewport()

  return (
    <Column width='100%'>
      {items().map((_, index) => (
        <motion.div
          onClick={() => setSelected(selected === index ? null : index)}
          key={`item-${index}`} /*eslint-disable-line */
        >
          <Condition match={desktop}>
            <Question selected={selected} width={22} height={22} index={index} item={item} />
          </Condition>
          <Condition match={mobile}>
            <Question selected={selected} width={12} height={12} index={index} item={item} />
          </Condition>
          <Answer index={index} selected={selected} answer={answer} screen={screen} />
          <Divider backgroundColor='background.ghostGray' weight={index < 5 ? 1 : undefined} />
        </motion.div>
      ))}
    </Column>
  )
}
