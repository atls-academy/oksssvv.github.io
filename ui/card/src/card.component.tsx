import React          from 'react'
import { FC }         from 'react'

import { Background } from '@ui/background'
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
      boxShadow={hover ? '0px 0px 30px 4px rgba(123, 84, 233, 0.20)' : '0'}
    >
      <Background backgroundColor='lightPurpleRadial' display='flex' width='100%'>
        <Layout flexBasis={[16, 40]} />
        <Column>
          <Layout flexBasis={[16, 40]} />
          <Box borderRadius='little' backgroundColor='white' width={props.widthCategory}>
            <Layout flexBasis={[8, 12]} />
            <Column>
              <Layout flexBasis={[8, 12]} />
              <Text fontSize={['small', 'medium']} textTransform='uppercase'>
                {props.сategory}
              </Text>
              <Layout flexBasis={[8, 12]} />
            </Column>
            <Layout flexBasis={[8, 12]} />
          </Box>
          <Layout flexBasis={props.gap} />
          <Box flexDirection='column' maxWidth={props.widthContent}>
            <Box>
              <Text fontSize={['enlarged', 'large']}>{props.title}</Text>
            </Box>
            <Layout flexBasis={props.description ? [12, 16] : 0} />
            <Box display={props.description ? 'flex' : 'none'}>
              <Text fontSize={['medium', 'regular']} lineHeight='medium'>
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
