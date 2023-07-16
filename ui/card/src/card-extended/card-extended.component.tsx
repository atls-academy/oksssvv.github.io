import React                 from 'react'
import { FC }                from 'react'

import { Background }        from '@ui/background'
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
}) => {
  const [hover, hoverProps] = useHover()

  return (
    <Box
      maxWidth={[335, 1160]}
      borderRadius={[16, 24]}
      overflow='hidden'
      {...hoverProps}
      boxShadow={hover ? '0px 0px 30px 4px rgba(123, 84, 233, 0.20)' : '0'}
    >
      <Background backgroundColor='lightPurpleRadial' width='100%' display='flex'>
        <Layout flexBasis={[16, 42]} />
        <Column>
          <Layout flexBasis={[16, 42]} />
          <Box
            width={[80, 104]}
            height={[27, 38]}
            alignItems='center'
            justifyContent='center'
            backgroundColor='white'
            borderRadius={8}
          >
            <Text fontSize={['small', 'medium']} textTransform='uppercase'>
              {category}
            </Text>
          </Box>
          <Layout flexBasis={gap} />
          <Box>
            <Text fontSize={['enlarged', 'large']}>{title}</Text>
          </Box>
          <Layout flexBasis={[12, 16]} />
          <Box display={['none', 'flex']} maxWidth={693}>
            <Text fontSize='regular' lineHeight='medium' color='text.secondary'>
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
