import React        from 'react'
import { useState } from 'react'

import { Input }    from '@ui/input'
import { Column }   from '@ui/layout'
import { Layout }   from '@ui/layout'

export const Form = () => {
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [question, setQuestion] = useState<string>('')
  // const [nameError, setNameError] = useState<boolean>(false)
  // const [phoneError, setPhoneError] = useState<boolean>(false)
  // const [questionError, setQuestionError] = useState<boolean>(false)
  // const [success, setSuccess] = useState<boolean | null>(null)

  return (
    <Column width='100%'>
      <Input
        value={question}
        onChange={setQuestion}
        // error={questionError}
        placeholder='Сообщение'
        maxLength={500}
        textarea
      />
      <Layout flexBasis={12} />
      <Input
        value={name}
        onChange={setName}
        // error={nameError}
        placeholder='Имя'
      />
      <Layout flexBasis={12} />
      <Input
        value={phone}
        onChange={setPhone}
        // error={phoneError}
        placeholder='Телефон'
      />
      <Layout flexBasis={24} />
    </Column>
  )
}
