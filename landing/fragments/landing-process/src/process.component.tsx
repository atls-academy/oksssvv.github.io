import React               from 'react'

import { Layout }          from '@ui/layout'
import { Box }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { Row }             from '@ui/layout'
import { Text }            from '@ui/text'
import { Space }           from '@ui/text'

import { SliderContainer } from './slider'
import { useProcess }      from './data'

export const Process = () => {
  const process = useProcess()

  const getId = (id) => process?.data?.sections.nodes.find((obj) => obj.id === id)

  const createProcess = getId('cG9zdDoyMzA=')?.sections.title

  const title = getId('cG9zdDoyMzA=')?.content.split(' ')

  return (
    <Row justifyContent='center'>
      <Layout flexBasis={[0, 492]} />
      <Column alignItems='center'>
        <Layout flexBasis={[24, 160]} />
        <Box justifyContent='center'>
          <Text
            color='white'
            fontSize={['small', 'medium']}
            lineHeight='small'
            textTransform='uppercase'
            opacity={0.5}
          >
            {createProcess}
          </Text>
        </Box>
        <Layout flexBasis={[16, 24]} />

        <Box display={['none', 'flex']}>
          <Text color='white' fontSize={{ standard: 'large', wide: 'mega' }}>
            {title?.slice(0, 3).join(' ')}
          </Text>
          <Space count={3} />
          <Text color='white' fontSize={{ standard: 'large', wide: 'mega' }} opacity={0.5}>
            {title?.slice(3, 4)}
          </Text>
          <Space count={3} />
          <Text color='white' fontSize={{ standard: 'large', wide: 'mega' }}>
            {title?.slice(4, 5)}
          </Text>
        </Box>
        <Box display={['none', 'flex']} justifyContent='center'>
          <Text color='white' fontSize={{ standard: 'large', wide: 'mega' }}>
            {title?.slice(5, 6)}
          </Text>
          <Space count={3} />
          <Text color='white' fontSize={{ standard: 'large', wide: 'mega' }} opacity={0.5}>
            {title?.slice(6, 7)}
          </Text>
          <Space count={3} />
          <Text color='white' fontSize={{ standard: 'large', wide: 'mega' }}>
            {title?.slice(7, 10).join(' ')}
          </Text>
        </Box>

        <Box display={['flex', 'none']} justifyContent='center'>
          <Text color='white' fontSize='enlarged'>
            {title?.slice(0, 3).join(' ')}
          </Text>
        </Box>
        <Box display={['flex', 'none']} justifyContent='center'>
          <Text color='white' fontSize='enlarged' opacity={0.5}>
            {title?.slice(3, 4)}
          </Text>
          <Space count={2} />
          <Text color='white' fontSize='enlarged'>
            {title?.slice(4, 6).join(' ')}
          </Text>
          <Space count={2} />
          <Text color='white' fontSize='enlarged' opacity={0.5}>
            {title?.slice(6, 7)}
          </Text>
        </Box>
        <Box display={['flex', 'none']} justifyContent='center'>
          <Text color='white' fontSize='enlarged'>
            {title?.slice(7, 10).join(' ')}
          </Text>
        </Box>

        <Layout flexBasis={[24, 50]} />
        <SliderContainer />
        <Layout flexBasis={{ _: 100, standard: 240, wide: 300, ultra: 430 }} />
      </Column>
      <Layout flexBasis={[0, 492]} />
    </Row>
  )
}
