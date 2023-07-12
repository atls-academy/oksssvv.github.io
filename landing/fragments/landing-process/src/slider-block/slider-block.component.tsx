import React                   from 'react'
import { FormattedMessage }    from 'react-intl'

import { Background }          from '@ui/background'
import { Button }              from '@ui/button'
import { SmallArrowLeftIcon }  from '@ui/icon'
import { SmallArrowRightIcon } from '@ui/icon'
import { Layout }              from '@ui/layout'
import { Box }                 from '@ui/layout'
import { Slider }              from '@ui/slider'
import { TimeLine }            from '@ui/slider'
import { Text }                from '@ui/text'

import { sliderImages }        from './slider-block.images'

export const SliderBlock = () => (
  <>
    <Background
      display='flex'
      width={[155, 960]}
      height={[323, 540]}
      variant='lightGray'
      position='relative'
      border='ghostGray'
      borderRadius={[20, 24]}
    >
      <Background
        width={[137, 936]}
        height={[307, 516]}
        display='flex'
        variant='radialGray'
        position='absolute'
        top={[9, 12]}
        left={[9, 12]}
        borderRadius={[12]}
      >
        <Slider images={sliderImages} widthImg='80%' heightImg='100%' />
      </Background>
    </Background>

    <Layout flexBasis={[26, 32]} />
    <Box width={[335, 960]} height={[64]} alignItems='center'>
      <Button size='smallSize' variant='ghost'>
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
        height={[64]}
        border='ghostGray'
        borderRadius={12}
      >
        <Layout flexBasis={[28, 0]} />
        <Box justifyContent='center' width={[175, 700]}>
          <Text
            color='white'
            fontSize={['little', 'middle']}
            lineHeight={['interim', 'large']}
            textAlign='center'
          >
            <FormattedMessage
              id='/'
              defaultMessage='Формирование системы базовых фрагментов и компонентов'
            />
          </Text>
        </Box>
        <TimeLine />
        <Layout flexBasis={[28, 0]} />
      </Box>
      <Layout flexBasis={[12, 16]} />
      <Button size='smallSize' variant='ghost'>
        <SmallArrowRightIcon />
      </Button>
    </Box>
  </>
)
