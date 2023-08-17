import React              from 'react'
import { useState }       from 'react'

import { Button }         from '@ui/button'
import { ArrowRightIcon } from '@ui/icon'
import { SuccessIcon }    from '@ui/icon'
import { Input }          from '@ui/input'
import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Box }            from '@ui/layout'
import { Text }           from '@ui/text'
import { Space }          from '@ui/text'

import { useForm }        from './data'

export const Form = () => {
  const form = useForm()

  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [question, setQuestion] = useState<string>('')
  const [visible, setVisible] = useState(false)
  const [sendForm, setSendForm] = useState(false)

  return (
    <>
      <Column display={sendForm ? 'none' : 'flex'}>
        <Input
          value={question}
          onChange={setQuestion}
          placeholder={form?.data?.allForms.nodes[6].forms.text}
          maxLength={500}
          textarea
          filled={Boolean(question)}
          onClick={() => setVisible(true)}
        />
        <Layout flexBasis={12} display={visible ? 'flex' : 'none'} />
        <Box display={visible ? 'flex' : 'none'}>
          <Input
            value={name}
            onChange={setName}
            placeholder={form?.data?.allForms.nodes[5].forms.text}
            filled={Boolean(name)}
          />
        </Box>
        <Layout flexBasis={12} />
        <Box display={visible ? 'flex' : 'none'}>
          <Input
            value={phone}
            onChange={setPhone}
            placeholder={form?.data?.allForms.nodes[4].forms.text}
            filled={Boolean(phone)}
          />
        </Box>
        <Layout flexBasis={24} />
        <Box width={335} flexShrink='0'>
          <Button
            onClick={() => setSendForm(true)}
            variant='primary'
            size='bigSizeNormalPadding'
            gap={39}
            icon={<ArrowRightIcon width={6} height={12} />}
            widthIcon={48}
            heightIcon={48}
            radiusIcon='medium'
            backgroundIcon='background.white'
            fill
            disabled={!name || !phone || !question}
          >
            <Text fontSize='regular' color='text.white'>
              {form?.data?.allForms.nodes[3].forms.text}
            </Text>
          </Button>
        </Box>
        <Layout flexBasis={24} />
        <Box display={name && phone && question ? 'inline' : 'none'}>
          <Text display='inline' fontSize='medium' color='text.darkPurple'>
            {form?.data?.allForms.nodes[2].forms.text}
          </Text>
          <Space />
          <Text
            display='inline'
            fontSize='medium'
            color='text.darkPurple'
            style={{ textDecoration: 'underline' }}
          >
            {form?.data?.allForms.nodes[1].forms.text}
          </Text>
        </Box>
      </Column>
      <Box display={sendForm ? 'flex' : 'none'} alignItems='center' flexDirection='column'>
        <SuccessIcon width={48} height={48} />
        <Layout flexBasis={24} />
        <Text textAlign='center' fontSize='regular'>
          {form?.data?.allForms.nodes[0].forms.text}
        </Text>
      </Box>
    </>
  )
}
