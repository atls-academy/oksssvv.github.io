import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Background }       from '@ui/background'
import { Form }             from '@ui/form'
import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Modal }            from '@ui/modal'
import { Text }             from '@ui/text'

export const Feedback = ({ open, onClose }) => (
  <Modal open={open} onClose={onClose}>
    <Background backgroundColor='purpleGradient' position='absolute' top='20%' borderRadius={24}>
      <Column width={375}>
        <Layout flexBasis={30} />
        <Box>
          <Layout flexBasis={30} />
          <Text fontSize='large' color='text.white'>
            <FormattedMessage id='/' defaultMessage='Задай вопрос' />
          </Text>
          <Layout flexBasis={50} />
        </Box>
        <Layout flexBasis={30} />
        <Box borderRadius={24} width={375} backgroundColor='white'>
          <Layout flexBasis={30} />
          <Column width='100%'>
            <Layout flexBasis={32} />
            <Form />
            <Layout flexBasis={30} />
          </Column>
          <Layout flexBasis={30} />
        </Box>
      </Column>
    </Background>
  </Modal>
)
