import React        from 'react'
import { motion }   from 'framer-motion'

import { Box }      from '@ui/layout'

import { Renderer } from './renderer'

export const Drawer = ({ active, children, heightDrawer }) => (
  <Renderer active={active}>
    <motion.div
      style={{ position: 'fixed', top: '-100%', width: '100%', zIndex: 5 }}
      animate={{ top: 0 }}
      exit={{ top: '-100%' }}
      transition={{ duration: 0.9 }}
    >
      <Box
        height={heightDrawer}
        backgroundColor='background.white'
        borderRadius={['normalBottom', 'bigBottom']}
        flexDirection='column'
        alignItems='center'
      >
        {children}
      </Box>
    </motion.div>
  </Renderer>
)
