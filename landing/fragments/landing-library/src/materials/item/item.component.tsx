import React              from 'react'
import { FC }             from 'react'

import { Divider }        from '@ui/divider'
import { ArrowRightIcon } from '@ui/icon'
import { Box }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Row }            from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Text }           from '@ui/text'
import { useHover }       from '@ui/utils'
import { usePressed }     from '@ui/utils'

import { ItemProps }      from './item.interfaces'

export const Item: FC<ItemProps> = ({ ...props }) => {
  const [hover, hoverProps] = useHover()
  const [pressed, pressedProps] = usePressed()

  const getColor = () => {
    if (pressed) {
      return 'lightPurple'
    }
    if (hover) {
      return 'lilac'
    }
    return 'darkPurple'
  }

  return (
    <Column {...hoverProps} {...pressedProps}>
      <Divider weight={1} backgroundColor='background.ghostGray' />
      <Row>
        <Column width='100%'>
          <Layout flexBasis={32} />
          <Box width={[335, 785]}>
            <Text
              color={getColor()}
              fontSize={['large', 'solid']}
              lineHeight={['normal', 'small']}
              cursor='pointer'
            >
              {props.title}
            </Text>
          </Box>
          <Layout flexBasis={20} />
          <Box maxWidth={['335', '530']} flexWrap='wrap'>
            {props.technology}
          </Box>
          <Layout flexBasis={8} />
          <Box maxWidth={600}>
            <Text color='text.grayPrimary' fontSize='middle' lineHeight='large'>
              {props.description}
            </Text>
          </Box>
          <Layout flexBasis={32} />
        </Column>
        <Layout flexBasis={619} />
        <Box alignItems='center' display={['none', 'flex']}>
          <ArrowRightIcon color={getColor()} width={21} height={42} />
        </Box>
      </Row>
    </Column>
  )
}
