import React        from 'react'

import { Image }    from '@ui/image'
import { Layout }   from '@ui/layout'
import { Column }   from '@ui/layout'
import { Row }      from '@ui/layout'
import { Box }      from '@ui/layout'

import { Item }     from './item'
import { useSteps } from './data'

export const Steps = () => {
  const steps = useSteps()

  const getSteps = steps?.data?.processes.nodes.map((el, index) => ({
    quantity: index + 1,
    title: el.process.title,
    description: el.process.description,
  }))

  return (
    <Row justifyContent='center'>
      <Layout flexBasis={[20, 80]} />
      <Column width={{ _: 335, standard: 1760, wide: 2100, ultra: 2600 }}>
        <Layout flexBasis={{ _: 36, standard: 112, ultra: 310 }} />

        {getSteps?.map((el, index) => (
          <Item
            // eslint-disable-next-line
            key={index}
            quantity={el.quantity}
            title={el.title}
            description={el.description}
            divider={index === getSteps.length - 1 ? 0 : 1}
          />
        ))}

        <Layout flexBasis={[0, 112]} />
      </Column>

      <Box
        display={['none', 'flex']}
        position='absolute'
        top={{ standard: 340, wide: 70, ultra: 255 }}
      >
        <Image src='/cubes.png' width={{ standard: 400, wide: 880, ultra: 1100 }} />
      </Box>

      <Layout flexBasis={[20, 80]} />
    </Row>
  )
}
