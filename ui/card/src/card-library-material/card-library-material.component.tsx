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

import { CardLibraryMaterialProps } from './card-library-material.interfaces'

export const CardLibraryMaterial: FC<CardLibraryMaterialProps> = ({ ...props }) => (
  <Column>
    <Divider weight={1} backgroundColor='background.ghostGray' />
    <Row>
      <Column width='100%'>
        <Layout flexBasis={32} />
        <Box width={785}>
          <Text color='text.blueDark' fontSize='solid'>
            {props.title}
          </Text>
        </Box>
        <Layout flexBasis={20} />
        <Box>
          <Text color='text.blueDark' fontSize='little' textTransform='uppercase'>
            {props.technology}
          </Text>
        </Box>
        <Layout flexBasis={20} />
        <Box maxWidth={600}>
          <Text color='text.grayPrimary' fontSize='middle'>
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
      <Box alignItems='center'>
        <ArrowRightIcon width={21} height={42} />
      </Box>
    </Row>
  </Column>
)
