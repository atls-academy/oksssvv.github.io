import React          from 'react'
import { useState }   from 'react'

import { Divider }    from '@ui/divider'
import { SearchIcon } from '@ui/icon'
import { Input }      from '@ui/input'
import { Layout }     from '@ui/layout'
import { Box }        from '@ui/layout'
import { Row }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Text }       from '@ui/text'
import { useFocus }   from '@ui/utils'

import { Materials }  from './materials'
import { Search }     from './search'
import { useLibrary } from './data'

export const Library = () => {
  const [focus, focusProps] = useFocus()
  const [searchQuery, setSerchQuery] = useState('')
  const library = useLibrary()

  const getId = (id) => library?.data?.sections.nodes.find((obj) => obj.id === id)

  const materialsTriple = Array.from({ length: 3 }).map((_, index) => (
    <Materials key={index} /> /*eslint-disable-line */
  ))

  return (
    <Row justifyContent='center'>
      <Layout flexBasis={[20, 230]} />
      <Column>
        <Layout flexBasis={[80, 200]} />
        <Box maxWidth={[225, 1460]}>
          <Text color='text.white' fontSize={['major', 'huge']} lineHeight={['medium', 'small']}>
            {getId('cG9zdDozMDE=')?.sections.title}
          </Text>
        </Box>
        <Layout flexBasis={[24, 48]} />
        <Divider weight={1} backgroundColor='background.ghostLight' />
        <Layout flexBasis={[24, 48]} />
        <Box width={[335, 600]}>
          <Text color='text.white' fontSize={['medium', 'enlarged']} lineHeight='medium'>
            {getId('cG9zdDozMDE=')?.content.split('\n\n\n').slice(0, 1)}
          </Text>
        </Box>
        <Layout flexBasis={[24, 48]} />
        <Box
          flexShrink='0'
          width={[335, 600]}
          boxShadow={focus ? 'normalBlue' : ''}
          {...focusProps}
          borderRadius='regular'
        >
          <Input
            value={searchQuery}
            onChange={setSerchQuery}
            placeholder={getId('cG9zdDozMDE=')?.content.split('\n\n\n').slice(1)}
            size='normal'
            attachmentIcon={<SearchIcon />}
            addon={searchQuery ? Search : null}
            gap={12}
          />
        </Box>
        <Layout flexBasis={[120, 440]} />
        <Box
          backgroundColor='background.white'
          position='absolute'
          top={[450, 900]}
          left={0}
          borderRadius={['massiveTop', 'hugeTop']}
          width='100%'
          justifyContent='center'
        >
          <Layout flexBasis={[20, 230]} />
          <Column width={[335, 1460]}>
            <Layout flexBasis={[64, 160]} />
            {materialsTriple}
            <Divider weight={1} backgroundColor='background.ghostGray' />
            <Layout flexBasis={[144, 240]} />
          </Column>
          <Layout flexBasis={[20, 230]} />
        </Box>
      </Column>
      <Layout flexBasis={[20, 880]} />
    </Row>
  )
}
