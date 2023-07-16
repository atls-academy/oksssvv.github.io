import React      from 'react'
import { motion } from 'framer-motion'

import { Box }    from '@ui/layout'

export const TimeLine = () => (
  <Box width='100%' justifyContent='center' position='absolute' top={55}>
    <motion.div
      style={{
        height: '5px',
        width: '0',
        backgroundColor: 'white',
        marginTop: '0',
        transform: 'translate(0%, 100%)',
      }}
      animate={{ width: '100%' }}
      transition={{ duration: 10, repeat: Infinity }}
    />
  </Box>
)
