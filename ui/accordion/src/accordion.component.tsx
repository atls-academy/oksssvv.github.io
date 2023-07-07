import React                from 'react'
import { AnimatePresence }  from 'framer-motion'
import { FormattedMessage } from 'react-intl'
import { motion }           from 'framer-motion'
import { useState }         from 'react'

import { Item }             from '@landing/questions-fragment'
import { Divider }          from '@ui/divider'
import { SmallMinusIcon }   from '@ui/icon'
import { SmallPlusIcon }    from '@ui/icon'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Text }             from '@ui/text'

export const Accordion = () => {
  const [selected, setSelected] = useState<number | null>(null)
  const items = Array.from({ length: 6 })

  return (
    <Column>
      {items.map((_, index) => (
        <motion.div
          onClick={() => setSelected(selected === index ? null : index)}
          key={`item-${index}`} /*eslint-disable-line */
        >
          <Box alignItems='center'>
            <motion.div>{selected === index ? <SmallMinusIcon /> : <SmallPlusIcon />}</motion.div>
            <Item />
          </Box>
          <AnimatePresence>
            {selected === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 100 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, easeIn: 1 }}
              >
                <Box maxWidth={784} height={58}>
                  <Text fontSize='standard' lineHeight='large'>
                    <FormattedMessage
                      id='/'
                      defaultMessage='Как это сделать подскажет Наставник или сотрудник поддержки. Ещё при таком переходе произойдёт зачет некоторых темам по дисциплинам.'
                    />
                  </Text>
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
          <Divider backgroundColor='background.ghostGray' weight={index < 5 ? 1 : undefined} />
        </motion.div>
      ))}
    </Column>
  )
}
