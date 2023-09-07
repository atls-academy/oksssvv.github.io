import React             from 'react'
import { FC }            from 'react'

import { Background }    from '@ui/background'
import { Form }          from '@ui/form'
import { Layout }        from '@ui/layout'
import { Box }           from '@ui/layout'
import { Column }        from '@ui/layout'
import { Modal }         from '@ui/modal'
import { Text }          from '@ui/text'

import { FeedbackProps } from './feedback.interfaces'
import { useFaq }        from '../data'

export const Feedback: FC<FeedbackProps> = ({ open, onClose }) => {
  const title = useFaq()

  return (
    <Modal open={open} onClose={onClose}>
      <Background
        backgroundColor='purpleGradient'
        position='absolute'
        top='20%'
        left='45%'
        borderRadius='big'
      >
        <Background
          backgroundColor='decorativeSymbol'
          backgroundPosition='-110px -325px,-180px -15px'
          backgroundSize='650px , 600px'
          backgroundRepeat='no-repeat'
          borderRadius='big'
        >
          <Column width={375}>
            <Layout flexBasis={30} />
            <Box>
              <Layout flexBasis={30} />
              <Text fontSize='large' color='text.white'>
                {title?.data?.navigationBy.title}
              </Text>
              <Layout flexBasis={50} />
            </Box>
            <Layout flexBasis={30} />
            <Box borderRadius='big' width={375} backgroundColor='white'>
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
      </Background>
    </Modal>
  )
}
