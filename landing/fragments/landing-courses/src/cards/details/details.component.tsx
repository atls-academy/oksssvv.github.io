import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { Link }             from 'react-scroll'

import { Background }       from '@ui/background'
import { Button }           from '@ui/button'
import { ScrollIcon }       from '@ui/icon'
import { Image }            from '@ui/image'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'

import { useCourses }       from '../../data'

export const Details = () => {
  const details = useCourses()

  return (
    <Column order={[0, 1]}>
      <Background
        backgroundColor='grayGradient'
        borderRadius={['medium', 'big']}
        border='lightGray'
        width={{ _: 335, standard: 410, ultra: 470 }}
        height={{ _: 212, standard: 660, ultra: 840 }}
        display='flex'
      >
        <Layout flexBasis={[16, 32]} />
        <Column>
          <Layout flexBasis={[16, 32]} />
          <Box width={{ _: 302, standard: 346, ultra: 406 }}>
            <Text
              fontSize={{ _: 'medium', standard: 'middle', ultra: 'enlarged' }}
              lineHeight={['medium', 'large']}
            >
              {details?.data?.courseBy.course.description}
            </Text>
          </Box>
          <Layout flexBasis={{ _: 0, standard: 74, ultra: 68 }} />
          <Box display={['none', 'flex']} justifyContent='center'>
            <Image src='/sphere-white.png' width={240} />
          </Box>
          <Layout flexBasis={{ _: 16, standard: 62, ultra: 68 }} />
          <Box
            height={[64, 116]}
            flexDirection={['row', 'column']}
            alignItems={['center', 'start']}
          >
            <Box>
              <Text
                fontSize={{ _: 'solid', standard: 'massive', ultra: 'huge' }}
                lineHeight='small'
                color='text.accent'
              >
                {details?.data?.courseBy.course.title}
              </Text>
            </Box>
            <Layout flexBasis={[12, 8]} />
            <Box width={{ _: 125, standard: 188, ultra: 282 }}>
              <Text
                fontSize={{ _: 'little', standard: 'medium', ultra: 'regular' }}
                lineHeight={['interim', 'large']}
              >
                {details?.data?.courseBy.content}
              </Text>
            </Box>
            <Layout flexBasis={[70, 0]} />
            <Box display={['flex', 'none']} justifyContent='center'>
              <Image src='/sphere-white.png' width={64} />
            </Box>
          </Box>
          <Layout flexBasis={[16, 32]} />
        </Column>
        <Layout flexBasis={[16, 32]} />
      </Background>
      <Layout flexBasis={[0, 20]} />
      <Link to='cG9zdDoyMjQ=' spy smooth duration={1000}>
        <Box
          width={[410]}
          display={{ _: 'none', standard: 'flex', ultra: 'none' }}
          alignItems='center'
          flexShrink='0'
        >
          <Button
            variant='primary'
            size='bigSizeNormalPadding'
            gap={121}
            icon={<ScrollIcon width={12} height={18} />}
            widthIcon={48}
            heightIcon={48}
            backgroundIcon='background.white'
            radiusIcon='medium'
            fill
          >
            <Text fontSize='regular' lineHeight='regular' color='text.white'>
              <FormattedMessage id='courses.button.process' />
            </Text>
          </Button>
        </Box>
      </Link>
      <Link to='cG9zdDoyMjQ=' spy smooth duration={1000}>
        <Box
          display={{ _: 'none', standard: 'none', wide: 'none', ultra: 'flex' }}
          width={[470]}
          flexShrink='0'
        >
          <Button
            variant='primary'
            size='largeSizeNormalPadding'
            gap={54}
            icon={<ScrollIcon width={18} height={27} />}
            widthIcon={72}
            heightIcon={72}
            backgroundIcon='background.white'
            radiusIcon='big'
            fill
          >
            <Text fontSize='major' lineHeight='regular' color='text.white'>
              <FormattedMessage id='courses.button.process' />
            </Text>
          </Button>
        </Box>
      </Link>
    </Column>
  )
}
