import React              from 'react'
import { motion }         from 'framer-motion'

import { SmallMinusIcon } from '@ui/icon'
import { SmallPlusIcon }  from '@ui/icon'
import { Box }            from '@ui/layout'

export const Question = ({ selected, width, height, index, item }) => (
  <Box alignItems='center'>
    <motion.div>
      {selected === index ? (
        <SmallMinusIcon width={width} height={height} />
      ) : (
        <SmallPlusIcon width={width} height={height} />
      )}
    </motion.div>
    {item}
  </Box>
)
