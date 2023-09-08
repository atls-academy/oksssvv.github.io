import React          from 'react'

import { Box }        from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Text }       from '@ui/text'
import { Space }      from '@ui/text'

import { useCourses } from '../data'

export const About = () => {
  const courses = useCourses()

  const getIdSections = (id) => courses?.data?.sections.nodes.find((obj) => obj.id === id)

  const atlantisInfo = getIdSections('cG9zdDoyMjc=')?.content.split('.')[0].split(' ')
  const educationInfo = getIdSections('cG9zdDoyMjc=')?.content.split('.')[1].split(' ')

  return (
    <Box flexDirection={['column', 'row']}>
      <Box maxWidth={{ _: 335, standard: 710, ultra: 1065 }} display='inline' flexWrap='wrap'>
        <Text
          fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
          lineHeight='medium'
        >
          {atlantisInfo?.slice(0, 3).join(' ')}
        </Text>
        <Space count={2} />
        <Text
          fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
          lineHeight='medium'
          color='text.accent'
        >
          {atlantisInfo?.slice(3, 4).join(' ')}
        </Text>
        <Space count={2} />
        <Text
          display='inline'
          fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
          lineHeight='medium'
        >
          {atlantisInfo?.slice(4, 7).join(' ')}
        </Text>
        <Space count={2} />
        <Text
          fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
          lineHeight='medium'
          color='text.accent'
        >
          {atlantisInfo?.slice(7, 9).join(' ')}
        </Text>
        <Box display={['none', 'inline']}>
          <Space count={2} />
        </Box>
        <Text
          display='inline'
          fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
          lineHeight='medium'
        >
          {atlantisInfo?.slice(9, 13).join(' ')}
        </Text>
        <Space count={2} />
        <Text
          fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
          lineHeight='medium'
          color='text.accent'
        >
          {atlantisInfo?.slice(13, 15).join(' ')}
        </Text>
      </Box>
      <Layout flexBasis={{ _: 20, standard: 341, wide: 980, ultra: 696 }} />
      <Box maxWidth={{ _: 335, standard: 559, ultra: 838 }} display='inline'>
        <Text
          fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
          lineHeight='medium'
          display='inline'
        >
          {educationInfo?.slice(0, 5).join(' ')}
        </Text>
        <Space count={2} />
        <Text
          fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
          lineHeight='medium'
          color='text.accent'
        >
          {educationInfo?.slice(5, 6).join(' ')}
        </Text>
        <Space count={2} />
        <Text
          fontSize={{ _: 'regular', standard: 'normal', ultra: 'secondary' }}
          lineHeight='medium'
          display='inline'
        >
          {educationInfo?.slice(6, 9).join(' ')}
        </Text>
      </Box>
    </Box>
  )
}
