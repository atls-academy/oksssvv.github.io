import React              from 'react'
import { FC }             from 'react'
import { motion }         from 'framer-motion'

import { SmallMinusIcon } from '@ui/icon'
import { SmallPlusIcon }  from '@ui/icon'
import { Box }            from '@ui/layout'

import { QuestionProps }  from './question.interfaces'

export const Question: FC<QuestionProps> = ({ selected, width, height, index, question }) => (
  <Box alignItems='center'>
    <motion.div>
      {selected === index ? (
        <SmallMinusIcon width={width} height={height} />
      ) : (
        <SmallPlusIcon width={width} height={height} />
      )}
    </motion.div>
    {question}
  </Box>
)
