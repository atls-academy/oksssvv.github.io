import React                   from 'react'
import { FC }                  from 'react'
import { FormattedMessage }    from 'react-intl'
import { motion }              from 'framer-motion'
import { useEffect }           from 'react'
import { useState }            from 'react'

import { Background }          from '@ui/background'
import { Button }              from '@ui/button'
import { SmallArrowLeftIcon }  from '@ui/icon'
import { SmallArrowRightIcon } from '@ui/icon'
import { Image }               from '@ui/image'
import { Layout }              from '@ui/layout'
import { Column }              from '@ui/layout'
import { Box }                 from '@ui/layout'
import { Text }                from '@ui/text'

import { SliderProps }         from './slider.interfaces'

export const Slider: FC<SliderProps> = ({ images, display }) => {
  const [index, setIndex] = useState(0)
  const [animation, setAnimation] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((index + 1) % images.length)
    }, 10000)
    return () => clearTimeout(timer)
  })

  const leftClick = () => {
    setIndex((index - 1 + images.length) % images.length)
    setAnimation(animation + 1)
  }

  const rightClick = () => {
    setIndex((index + 1) % images.length)
    setAnimation(animation + 1)
  }

  return (
    <Column display={display} alignItems='center'>
      <Background
        display='flex'
        width={{ _: 155, standard: 960, wide: 1280, ultra: 1300 }}
        height={{ _: 323, standard: 540, wide: 720, ultra: 730 }}
        backgroundColor='lightGray'
        position='relative'
        border='ghostGray'
        borderRadius={['large', 'big']}
      >
        <Background
          width={{ _: 148, standard: 936, wide: 1255, ultra: 1280 }}
          height={{ _: 317, standard: 516, wide: 695, ultra: 708 }}
          display='flex'
          backgroundColor='radialGray'
          position='absolute'
          top={[3, 12]}
          left={[3, 12]}
          borderRadius={{ _: 'regular', standard: 'normal', ultra: 'regular' }}
        >
          <Box width='100%' alignItems='center' flexDirection='column' position='relative'>
            <Box display={['none', 'flex']}>
              <Image src='/toolbar.png' width='100%' />
            </Box>
            <Box display={['flex', 'none']}>
              <Image src='/mobilePanel.png' />
            </Box>
            <Box
              width={{ _: 140, standard: 750, wide: 960, ultra: 1000 }}
              justifyContent='center'
              position='absolute'
              top={[-5, -15]}
            >
              <motion.img
                key={index}
                src={images[index]}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                width='100%'
                height='100%'
              />
            </Box>
          </Box>
        </Background>
      </Background>

      <Layout flexBasis={[26, 32]} />
      <Box
        width={{ _: 335, standard: 960, wide: 1280, ultra: 1310 }}
        height={{ _: 64, standard: 64, wide: 85, ultra: 86 }}
        alignItems='center'
      >
        <Box display={{ _: 'flex', standard: 'flex', wide: 'flex', ultra: 'none' }}>
          <Button size='smallSize' variant='ghost' onClick={leftClick}>
            <SmallArrowLeftIcon />
          </Button>
        </Box>
        <Box display={{ _: 'none', standard: 'none', wide: 'none', ultra: 'flex' }}>
          <Button size='bigSizeNormalRadii' variant='ghost' onClick={rightClick}>
            <SmallArrowLeftIcon />
          </Button>
        </Box>
        <Layout flexBasis={{ _: 12, standard: 16, ultra: 22 }} />
        <Box
          position='relative'
          overflow='hidden'
          flexDirection='column'
          width='100%'
          justifyContent='center'
          alignItems='center'
          height={{ _: 64, standard: 64, ultra: 86 }}
          border='ghostGray'
          borderRadius={{ _: 'normal', standard: 'normal', ultra: 'medium' }}
        >
          <Layout flexBasis={[28, 0]} />
          <Box justifyContent='center' width={[175, 700]}>
            <Text
              color='white'
              fontSize={{ _: 'little', standard: 'middle', ultra: 'averaged' }}
              lineHeight={['interim', 'large']}
              textAlign='center'
            >
              <FormattedMessage id='process.slider.formation-of-system-of-basic-fragments' />
            </Text>
          </Box>

          <Box
            width='100%'
            justifyContent='center'
            position='absolute'
            top={{ _: 55, standard: 55, ultra: 75 }}
          >
            <motion.div
              style={{
                height: '5px',
                backgroundColor: 'white',
                transform: 'translate(0%, 100%)',
              }}
              animate={{ width: '100%' }}
              transition={{ duration: 10, repeat: Infinity }}
              key={animation}
            />
          </Box>

          <Layout flexBasis={[28, 0]} />
        </Box>
        <Layout flexBasis={{ _: 12, standard: 16, ultra: 22 }} />
        <Box display={{ _: 'flex', standard: 'flex', wide: 'flex', ultra: 'none' }}>
          <Button size='smallSize' variant='ghost' onClick={rightClick}>
            <SmallArrowRightIcon />
          </Button>
        </Box>
        <Box display={{ _: 'none', standard: 'none', wide: 'none', ultra: 'flex' }}>
          <Button size='bigSizeNormalRadii' variant='ghost' onClick={rightClick}>
            <SmallArrowRightIcon />
          </Button>
        </Box>
      </Box>
    </Column>
  )
}
