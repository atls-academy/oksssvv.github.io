import React            from 'react'
import { useIntl }      from 'react-intl'

import { Divider }      from '@ui/divider'
import { Box }          from '@ui/layout'
import { Column }       from '@ui/layout'
import { Layout }       from '@ui/layout'
import { Text }         from '@ui/text'

import { Technologies } from './data'
import { Item }         from './item'

export const Materials = (divider) => {
  const intl = useIntl()
  const technology = Technologies.map((item) => (
    <Column key={item.index}>
      <Box border='ghostPrimary' borderRadius='little' padding='microYSmallX' marginRight='micro'>
        <Text color='text.blueDark' fontSize='little' textTransform='uppercase'>
          {item.name}
        </Text>
      </Box>
      <Layout flexBasis={12} />
    </Column>
  ))

  return (
    <>
      <Item
        title={intl.formatMessage({ id: 'library.title.design-figma-math' })}
        technology={technology}
      />
      <Divider weight={divider} backgroundColor='background.ghostGray' />
      <Item
        title={intl.formatMessage({ id: 'library.title.how-use-libraries' })}
        technology={technology}
      />
      <Divider weight={divider} backgroundColor='background.ghostGray' />
      <Item
        title={intl.formatMessage({ id: 'library.hexagonal-architecture' })}
        technology={technology}
      />
      <Divider weight={divider} backgroundColor='background.ghostGray' />
    </>
  )
}
