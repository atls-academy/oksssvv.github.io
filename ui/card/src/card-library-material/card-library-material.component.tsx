import React                        from 'react'
import { FC }                       from 'react'
import { FormattedMessage }         from 'react-intl'

import { Divider }                  from '@ui/divider'
import { ArrowRightIcon }           from '@ui/icon'
import { Box }                      from '@ui/layout'
import { Column }                   from '@ui/layout'
import { Layout }                   from '@ui/layout'
import { Row }                      from '@ui/layout'
import { Text }                     from '@ui/text'
import { useHover }                 from '@ui/utils'
import { usePressed }               from '@ui/utils'

import { CardLibraryMaterialProps } from './card-library-material.interfaces'

export const CardLibraryMaterial: FC<CardLibraryMaterialProps> = ({ ...props }) => {
  const [hover, hoverProps] = useHover()
  const [pressed, pressedProps] = usePressed()

  const colors = () => {
    if (pressed) {
      return 'rgba(114, 108, 182, 1)'
    }
    if (hover) {
      return 'rgba(77, 60, 242, 1)'
    }
    return 'rgba(27, 26, 51, 1)'
  }

  return (
    <Column {...hoverProps} {...pressedProps}>
      <Divider weight={1} backgroundColor='background.ghostGray' />
      <Row>
        <Column width='100%'>
          <Layout flexBasis={32} />
          <Box width={[335, 785]}>
            <Text
              color={colors()}
              fontSize={['large', 'solid']}
              lineHeight={['normal', 'small']}
              cursor='pointer'
            >
              {props.title}
            </Text>
          </Box>
          <Layout flexBasis={20} />
          <Box maxWidth={['335', '530']} display='inline'>
            {props.technology}
          </Box>
          <Layout flexBasis={20} />
          <Box maxWidth={600}>
            <Text color='text.grayPrimary' fontSize='middle' lineHeight={['large', 'small']}>
              <FormattedMessage
                id='/'
                defaultMessage='Комплексный учебный материал, разработанный для студентов и всех, кто интересуется сферой дизайна,
      созданием веб-интерфейсов и применением математики в процессе проектирования.'
              />
            </Text>
          </Box>
          <Layout flexBasis={32} />
        </Column>
        <Layout flexBasis={619} />
        <Box alignItems='center' display={['none', 'flex']}>
          <ArrowRightIcon color={colors()} width={21} height={42} />
        </Box>
      </Row>
    </Column>
  )
}
