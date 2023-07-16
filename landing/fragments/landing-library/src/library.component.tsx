import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useState }         from 'react'

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

  return (
    <Row>
      <Layout flexBasis={230} />
      <Column>
        <Layout flexBasis={200} />
        <Box maxWidth={1460}>
          <Text color='text.white' fontSize='huge'>
            <FormattedMessage id='/' defaultMessage='Наша библиотека' />
          </Text>
        </Box>
        <Layout flexBasis={48} />
        <Divider weight={1} backgroundColor='background.ghostLight' />
        <Layout flexBasis={48} />
        <Box width={600}>
          <Text color='text.white' fontSize='enlarged'>
            <FormattedMessage
              id='/'
              defaultMessage='Здесь собраны материалы и статьи, которые пригодятся в процессе обучения. Сюда стоит пойти за ответом на любой возникший вопрос.'
            />
          </Text>
        </Box>
        <Layout flexBasis={48} />
        <Box width={600}>
          <Input
            value={searchQuery}
            onChange={setSerchQuery}
            placeholder='Введите ваш запрос'
            size='normal'
            attachmentIcon={<SearchIcon />}
            gap={12}
          />
        </Box>
        <Layout flexBasis={240} />
        <Box
          backgroundColor='background.white'
          position='absolute'
          top={900}
          left={0}
          borderRadius='80px 80px 0px 0px'
          width='100%'
        >
          <Layout flexBasis={230} />
          <Column width={1460}>
            <Layout flexBasis={160} />
            {increaseCardsMaterial}
            <Layout flexBasis={240} />
          </Column>
          <Layout flexBasis={230} />
        </Box>
      </Column>
      <Layout flexBasis={230} />
    </Row>
  )
}
