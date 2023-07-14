import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Background }       from '@ui/background'
import { Button }           from '@ui/button'
import { Form }             from '@ui/form'
import { ArrowRightIcon }   from '@ui/icon'
import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Modal }            from '@ui/modal'
import { Text }             from '@ui/text'

export const Window = ({ open, onClose }) => (
  <Modal open={open} onClose={onClose}>
    <Background variant='purpleGradient' position='absolute' top='20%' borderRadius={24}>
      <Column width={375}>
        <Layout flexBasis={30} />
        <Box>
          <Layout flexBasis={30} />
          <Text fontSize='large' color='text.white'>
            Задай вопрос
          </Text>
          <Layout flexBasis={50} />
        </Box>
        <Layout flexBasis={30} />
        <Box borderRadius={24} width={375} backgroundColor='white'>
          <Layout flexBasis={30} />
          <Column>
            <Layout flexBasis={32} />
            <Form />
            <Box width={335} flexShrink='0'>
              <Button
                variant='primary'
                size='bigSizeNormalPadding'
                gap='9%'
                icon={<ArrowRightIcon width={6} height={12} />}
                containerWidth={48}
                containerHeight={48}
                containerColor='rgba(255, 255, 255, 1)'
                containerRadius={16}
                fill
              >
                <Text fontSize={['middle', 'regular']} color='text.white'>
                  <FormattedMessage id='/' defaultMessage='Отправить сообщение' />
                </Text>
              </Button>
            </Box>
            <Layout flexBasis={30} />
          </Column>
          <Layout flexBasis={30} />
        </Box>
      </Column>
    </Background>
  </Modal>
)
