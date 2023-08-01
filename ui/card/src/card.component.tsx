import React          from 'react'
import { FC }         from 'react'

import { Background } from '@ui/background'
import { Image }      from '@ui/image'
import { Box }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Text }       from '@ui/text'
import { useHover }   from '@ui/utils'

import { CardProps }  from './card.interfaces'

export const Card: FC<CardProps> = ({ ...props }) => {
  const [hover, hoverProps] = useHover()

  return (
    <Box
      width='100%'
      {...hoverProps}
      borderRadius={['medium', 'big']}
      overflow='hidden'
      boxShadow={hover ? 'normalBlurDarkPurple' : ''}
      position='relative'
    >
      {props.image ? (
        <Image
          src={props.image}
          position='absolute'
          right={34}
          top={40}
          display={{ _: 'none', standard: 'none', wide: 'flex', ultra: 'flex' }}
        />
      ) : (
        ''
      )}
      <Background backgroundColor='lightPurpleRadial' display='flex' width='100%'>
        <Layout flexBasis={[16, 40]} />
        <Column width='100%'>
          <Layout flexBasis={[16, 40]} />
          <Box
            backgroundColor='white'
            width={props.widthCategory}
            borderRadius={{ _: 'little', standard: 'little', ultra: 'normal' }}
          >
            <Layout flexBasis={{ _: 8, standard: 12, ultra: 18 }} />
            <Column>
              <Layout flexBasis={{ _: 8, standard: 12, ultra: 18 }} />
              <Text
                fontSize={{ _: 'small', standard: 'medium', ultra: 'regular' }}
                textTransform='uppercase'
              >
                {props.сategory}
              </Text>
              <Layout flexBasis={{ _: 8, standard: 12, ultra: 18 }} />
            </Column>

            <Layout flexBasis={{ _: 8, standard: 12, ultra: 18 }} />
          </Box>
          <Layout flexBasis={props.gap} />
          <Box flexDirection='column' maxWidth={props.widthContent}>
            <Box>
              <Text fontSize={{ _: 'enlarged', standard: 'large', ultra: 'enormous' }}>
                {props.title}
              </Text>
            </Box>
            <Layout flexBasis={props.description ? [12, 16] : 0} />
            <Box display={props.description ? 'flex' : 'none'}>
              <Text
                fontSize={{ _: 'medium', standard: 'regular', ultra: 'mid' }}
                lineHeight='medium'
              >
                {props.description}
              </Text>
            </Box>
          </Box>
          <Layout flexBasis={[16, 40]} />
        </Column>
        <Layout flexBasis={[16, 40]} />
      </Background>
    </Box>
  )
}
