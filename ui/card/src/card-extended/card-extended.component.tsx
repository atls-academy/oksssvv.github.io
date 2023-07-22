import React                 from 'react'
import { FC }                from 'react'

import { Background }        from '@ui/background'
import { Image }             from '@ui/image'
import { Box }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Text }              from '@ui/text'
import { useHover }          from '@ui/utils'

import { CardExtendedProps } from './card-extended.interfaces'

export const CardExtended: FC<CardExtendedProps> = ({
  category,
  gap,
  title,
  description,
  descriptionMobile,
  srcImage,
}) => {
  const [hover, hoverProps] = useHover()

  return (
    <Box
      width={{ _: 335, standard: 1160, wide: 879, ultra: 1025 }}
      borderRadius={[16, 24]}
      overflow='hidden'
      {...hoverProps}
      position='relative'
      boxShadow={hover ? '0px 0px 30px 4px rgba(123, 84, 233, 0.20)' : '0'}
    >
      <Background backgroundColor='lightPurpleRadial' width='100%' display='flex'>
        <Layout flexBasis={[16, 40]} />
        <Column>
          <Layout flexBasis={[16, 40]} />
          <Box
            width={{ _: 80, standard: 104, ultra: 156 }}
            height={{ _: 27, standard: 38, ultra: 57 }}
            alignItems='center'
            justifyContent='center'
            backgroundColor='white'
            borderRadius={8}
          >
            <Text
              fontSize={{ _: 'small', standard: 'medium', ultra: 'regular' }}
              textTransform='uppercase'
            >
              {category}
            </Text>
          </Box>
          <Box position='absolute' top={40} right={34}>
            <Image src={srcImage} width={360} />
          </Box>
          <Layout flexBasis={gap} />
          <Box>
            <Text fontSize={{ _: 'enlarged', standard: 'large', ultra: 'enormous' }}>{title}</Text>
          </Box>
          <Layout flexBasis={[12, 16]} />
          <Box display={['none', 'flex']} maxWidth={{ standard: 693, ultra: 945 }}>
            <Text
              fontSize={{ standard: 'regular', ultra: 'mid' }}
              lineHeight='medium'
              color='text.secondary'
            >
              {description}
            </Text>
          </Box>
          <Box display={['flex', 'none']} width={295}>
            <Text fontSize='medium' lineHeight='large' color='text.secondary'>
              {descriptionMobile}
            </Text>
          </Box>
          <Layout flexBasis={[16, 40]} />
        </Column>
        <Layout flexBasis={[16, 40]} />
      </Background>
    </Box>
  )
}
