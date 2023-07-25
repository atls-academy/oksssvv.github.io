import React       from 'react'
import { useIntl } from 'react-intl'

import { Image }   from '@ui/image'
import { Layout }  from '@ui/layout'
import { Column }  from '@ui/layout'
import { Row }     from '@ui/layout'
import { Box }     from '@ui/layout'

import { Item }    from './item'

export const Steps = () => {
  const intl = useIntl()
  return (
    <Row justifyContent='center'>
      <Layout flexBasis={[20, 80]} />
      <Column width={[335, 1760]}>
        <Layout flexBasis={[36, 112]} />
        <Item
          quantity={1}
          title={intl.formatMessage({ id: 'steps.integration-in-team' })}
          divider={1}
        />
        <Item quantity={2} title={intl.formatMessage({ id: 'steps.create' })} divider={1} />
        <Item quantity={3} title={intl.formatMessage({ id: 'steps.studying' })} divider={1} />
        <Item quantity={4} title={intl.formatMessage({ id: 'steps.practice' })} divider={1} />
        <Item quantity={5} title={intl.formatMessage({ id: 'steps.integration-in-project' })} />
        <Layout flexBasis={[0, 112]} />
      </Column>
      <Box display={['none', 'flex']} position='absolute' marginTop={340} marginLeft={-20}>
        <Image src='/cubes.png' width={400} />
      </Box>
      <Layout flexBasis={[20, 80]} />
    </Row>
  )
}
