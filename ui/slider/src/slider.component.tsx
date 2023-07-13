import React           from 'react'
import { FC }          from 'react'
import { motion }      from 'framer-motion'
import { useEffect }   from 'react'
import { useState }    from 'react'

import { Box }         from '@ui/layout'

import { SliderProps } from './slider.interfaces'

export const Slider: FC<SliderProps> = ({ widthImg, heightImg, images, display }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex(() => (index + 1) % images.length)
    }, 10000)
    return () => clearTimeout(timer)
  })

  return (
    <Box
      width='100%'
      justifyContent='center'
      alignItems='center'
      overflow='hidden'
      display={display}
    >
      <motion.img
        key={index}
        src={images[index]}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        width={widthImg}
        height={heightImg}
      />
    </Box>
  )
}
