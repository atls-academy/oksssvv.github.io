import React                from 'react'
import { AnimatePresence }  from 'framer-motion'
import { FormattedMessage } from 'react-intl'
import { motion }           from 'framer-motion'
import { useState }         from 'react'

import { Item }             from '@landing/questions-fragment'
import { Condition }        from '@ui/condition'
import { Divider }          from '@ui/divider'
import { SmallMinusIcon }   from '@ui/icon'
import { SmallPlusIcon }    from '@ui/icon'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Text }             from '@ui/text'
import { useWindow }        from '@ui/utils'

export const Accordion = ({ screen }) => {
  const [selected, setSelected] = useState<number | null>(null)
  const items = () => (screen === 'wide' ? Array.from({ length: 3 }) : Array.from({ length: 6 }))
  const { isMobile, isDesktop } = useWindow()
  return (
    <Column width='100%'>
      {items().map((_, index) => (
        <motion.div
          onClick={() => setSelected(selected === index ? null : index)}
          key={`item-${index}`} /*eslint-disable-line */
        >
          <Condition match={isDesktop}>
            <Box alignItems='center'>
              <motion.div>
                {selected === index ? (
                  <SmallMinusIcon width={22} height={22} />
                ) : (
                  <SmallPlusIcon width={22} height={22} />
                )}
              </motion.div>
              <Item />
            </Box>
          </Condition>

          <Condition match={isMobile}>
            <Box alignItems='center'>
              <Item />
              <motion.div>
                {selected === index ? (
                  <SmallMinusIcon width={12} height={12} />
                ) : (
                  <SmallPlusIcon width={12} height={12} />
                )}
              </motion.div>
            </Box>
          </Condition>

          <AnimatePresence>
            {selected === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: screen === 'wide' ? 200 : 105 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, easeIn: 1 }}
              >
                <Box maxWidth={{ _: 325, standard: 784, wide: 900 }}>
                  <Text
                    fontSize={{ _: 'medium', standard: 'standard', wide: 'major', ultra: 'major' }}
                    lineHeight='large'
                  >
                    <FormattedMessage id='questions.accordion.how-do-it' />
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
