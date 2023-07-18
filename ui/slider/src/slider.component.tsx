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

export const Slider: FC<SliderProps> = ({ widthImg, heightImg, images, display }) => {
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
        width={[155, 960]}
        height={[323, 540]}
        backgroundColor='lightGray'
        position='relative'
        border='ghostGray'
        borderRadius={['large', 'big']}
      >
        <Background
          width={[148, 936]}
          height={[315, 516]}
          display='flex'
          backgroundColor='radialGray'
          position='absolute'
          top={[1, 12]}
          left={[1, 12]}
          borderRadius={['regular', 'normal']}
        >
          <Box width='100%' justifyContent='center' alignItems='center' flexDirection='column'>
            <Image src='/toolbar.png' display={['none', 'flex']} />
            <Image src='/mobilePanel.png' display={['flex', 'none']} />
            <motion.img
              key={index}
              src={images[index]}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              width={widthImg}
              height={heightImg}
            />
          </Box>
        </Background>
      </Background>

      <Layout flexBasis={[26, 32]} />
      <Box width={[335, 960]} height={[64]} alignItems='center'>
        <Button size='smallSize' variant='ghost' onClick={leftClick}>
          <SmallArrowLeftIcon />
        </Button>
        <Layout flexBasis={[12, 16]} />
        <Box
          position='relative'
          overflow='hidden'
          flexDirection='column'
          width='100%'
          justifyContent='center'
          alignItems='center'
          height={64}
          border='ghostGray'
          borderRadius='normal'
        >
          <Layout flexBasis={[28, 0]} />
          <Box justifyContent='center' width={[175, 700]}>
            <Text
              color='white'
              fontSize={['little', 'middle']}
              lineHeight={['interim', 'large']}
              textAlign='center'
            >
              <FormattedMessage id='process.slider.formation-of-system-of-basic-fragments' />
            </Text>
          </Box>

          <Box width='100%' justifyContent='center' position='absolute' top={55}>
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
        <Layout flexBasis={[12, 16]} />
        <Button size='smallSize' variant='ghost' onClick={rightClick}>
          <SmallArrowRightIcon />
        </Button>
      </Box>
    </Column>
  )
}
