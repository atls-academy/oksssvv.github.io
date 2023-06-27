import React            from 'react'
import { motion }       from 'framer-motion'
import { useScroll }    from 'framer-motion'
import { useTransform } from 'framer-motion'

export const Layer = ({ children, heightSizes }) => {
  const { scrollY } = useScroll()
  const offsetY = [0, 2200]
  const height = useTransform(scrollY, offsetY, heightSizes)

  return <motion.div style={{ height, overflow: 'hidden' }}>{children}</motion.div>
}
