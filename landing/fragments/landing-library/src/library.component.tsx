import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useState }         from 'react'
import { useIntl }          from 'react-intl'

import { Divider }          from '@ui/divider'
import { SearchIcon }       from '@ui/icon'
import { Input }            from '@ui/input'
import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Text }             from '@ui/text'

import { CardsMaterial }    from './cards-material'

export const Library = () => {
  const increaseCardsMaterial = Array.from({ length: 3 }).map((_, index) => (
    <CardsMaterial divider={index > 1 ? 1 : 0} key={index} /> /*eslint-disable-line */
  ))

  const [searchQuery, setSerchQuery] = useState('')
  const intl = useIntl()

  return (
    <Row justifyContent='center'>
      <Layout flexBasis={[20, 230]} />
      <Column>
        <Layout flexBasis={[80, 200]} />
        <Box width={[225, 1460]}>
          <Text color='text.white' fontSize={['major', 'huge']} lineHeight={['medium', 'small']}>
            <FormattedMessage id='library.our-library' />
          </Text>
        </Box>
        <Layout flexBasis={[24, 48]} />
        <Divider weight={1} backgroundColor='background.ghostLight' />
        <Layout flexBasis={[24, 48]} />
        <Box width={[335, 600]}>
          <Text color='text.white' fontSize={['medium', 'enlarged']} lineHeight='medium'>
            <FormattedMessage id='library.here-are-collected-materials-and-articles' />
          </Text>
        </Box>
        <Layout flexBasis={[24, 48]} />
        <Box width={[335, 600]}>
          <Input
            value={searchQuery}
            onChange={setSerchQuery}
            placeholder={intl.formatMessage({ id: 'library.input.placeholder.enter-your-request' })}
            size='normal'
            attachmentIcon={<SearchIcon />}
            gap={12}
            attachmentButton={Boolean(searchQuery)}
            textButton={intl.formatMessage({ id: 'library.input.text-button.search' })}
            backgroundButton='accent'
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
            {increaseCardsMaterial}
            <Layout flexBasis={[144, 240]} />
          </Column>
          <Layout flexBasis={[20, 230]} />
        </Box>
      </Column>
      <Layout flexBasis={[20, 230]} />
    </Row>
  )
}
