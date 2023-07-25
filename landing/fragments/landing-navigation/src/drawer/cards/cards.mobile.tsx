import React       from 'react'
import { useIntl } from 'react-intl'

import { Divider } from '@ui/divider'
import { Layout }  from '@ui/layout'
import { Box }     from '@ui/layout'
import { Column }  from '@ui/layout'
import { Text }    from '@ui/text'

export const CardsMobile = () => {
  const intl = useIntl()

  const Card = ({ widthCategory, сategory, title, divider, gap }) => (
    <>
      <Box
        width={widthCategory}
        height={32}
        borderRadius='little'
        border='lightPrimary'
        justifyContent='center'
        alignItems='center'
      >
        <Text color='darkPurple' textTransform='uppercase' fontSize='little'>
          {сategory}
        </Text>
      </Box>
      <Layout flexBasis={8} />
      <Box>
        <Text color='darkPurple'>{title}</Text>
      </Box>
      <Layout flexBasis={20} />
      <Divider weight={divider} backgroundColor='background.ghostPrimary' />
      <Layout flexBasis={gap} />
    </>
  )

  return (
    <Column width={335}>
      {Array.from({ length: 3 }).map((_, index) => (
        <Card
          // eslint-disable-next-line
          key={index}
          widthCategory={index === 1 ? 122 : 87}
          сategory={
            index === 1
              ? intl.formatMessage({ id: 'navigation.card.advanced' })
              : intl.formatMessage({ id: 'navigation.card.base' })
          }
          title={
            index === 2
              ? intl.formatMessage({ id: 'navigation.card.backend-engineer' })
              : intl.formatMessage({ id: 'navigation.card.frontend-engineer' })
          }
          divider={index < 2 ? 1 : 0}
          gap={index < 2 ? 20 : 0}
        />
      ))}
    </Column>
  )
}
