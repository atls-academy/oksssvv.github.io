import React               from 'react'
import { AnimatePresence } from 'framer-motion'
import { motion }          from 'framer-motion'

import { Box }             from '@ui/layout'
import { Text }            from '@ui/text'

export const Answer = ({ index, answer, screen, selected }) => (
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
            {answer}
          </Text>
        </Box>
      </motion.div>
    )}
  </AnimatePresence>
)
