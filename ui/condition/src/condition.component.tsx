import React               from 'react'
import { AnimatePresence } from 'framer-motion'
import { motion }          from 'framer-motion'

import { AnimationStyle }  from './animation-style'
import { ConditionProps }  from './condition.interface'

export const Condition = ({
  match,
  smooth = false,
  smoothOptions = AnimationStyle,
  children,
}: ConditionProps) => {
  if (smooth) {
    if (smoothOptions.pattern === 'in-and-out') {
      return (
        <AnimatePresence>
          {match && (
            <motion.div
              style={{ display: 'flex', width: '100%', height: '100%' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: smoothOptions.duration }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      )
    }
    if (smoothOptions.pattern === 'in') {
      return (
        match && (
          <motion.div
            style={{ display: 'flex', width: '100%', height: '100%' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: smoothOptions.duration }}
          >
            {children}
          </motion.div>
        )
      )
    }
    if (smoothOptions.pattern === 'out') {
      return (
        <AnimatePresence>
          {match && (
            <motion.div
              style={{ display: 'flex', width: '100%', height: '100%' }}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: smoothOptions.duration }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      )
    }
  }
  return children
}
