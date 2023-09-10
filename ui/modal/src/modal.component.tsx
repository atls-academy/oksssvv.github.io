import { Portal }          from '@atls-ui-parts/portal'

import React               from 'react'
import { AnimatePresence } from 'framer-motion'
import { FC }              from 'react'

import { Condition }       from '@ui/condition'

import { Backdrop }        from './backdrop'
import { Container }       from './container'
import { ModalProps }      from './modal.interfaces'

export const Modal: FC<ModalProps> = ({ children, open, onClose }) => {
  const content = (
    <Condition match={open}>
      <Portal>
        <Container>
          <Backdrop onClick={onClose} />
          {children}
        </Container>
      </Portal>
    </Condition>
  )
  return <AnimatePresence>{content}</AnimatePresence>
}
