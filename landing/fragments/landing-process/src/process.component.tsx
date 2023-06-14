import React                   from 'react'
import { FormattedMessage }    from 'react-intl'

import { Button }              from '@ui/button'
import { SmallArrowLeftIcon }  from '@ui/icon'
import { SmallArrowRightIcon } from '@ui/icon'
import { PlugIcon }            from '@ui/icon'
import { Layout }              from '@ui/layout'
import { Box }                 from '@ui/layout'
import { Column }              from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Text }                from '@ui/text'

export const Process = () => (
  <Row justifyContent='center'>
    <Layout flexBasis={[0, 492]} flexShrink='0' />
    <Column alignItems='center'>
      <Layout flexBasis={[24, 160]} />
      <Box justifyContent='center'>
        <Text
          color='white'
          fontSize={['small', 'medium']}
          lineHeight='small'
          textTransform='uppercase'
        >
          <FormattedMessage id='/' defaultMessage='Процесс создания' />
        </Text>
      </Box>
      <Layout flexBasis={[16, 24]} />
      <Box width={[335, 850]}>
        <Text color='white' fontSize={['enlarged', 'large']} textAlign='center'>
          <FormattedMessage
            id='/'
            defaultMessage='Любой процесс перестаёт быть сложным, когда знаешь как он протекает'
          />
        </Text>
      </Box>
      <Layout flexBasis={[24, 50]} />
      <Box width={[155, 960]} height={[323, 540]} backgroundColor='black'>
        <PlugIcon width='100%' height='100%' />
      </Box>
      <Layout flexBasis={[26, 32]} />
      <Box width={[335, 960]} height={[64]} alignItems='center'>
        <Box
          width={[40, 48]}
          height={[60, 64]}
          flexShrink='0'
          justifyContent='center'
          alignItems='center'
        >
          <Button size='smallSize'>
            <SmallArrowLeftIcon />
          </Button>
        </Box>
        <Layout flexBasis={[12, 16]} />
        <Box width='100%' justifyContent='center'>
          <Layout flexBasis={[28, 0]} flexShrink='0' />
          <Text
            color='white'
            fontSize={['little', 'middle']}
            lineHeight={['interim', 'large']}
            textAlign='center'
          >
            <FormattedMessage
              id='/'
              defaultMessage='Формирование системы базовых фрагментов и компонентов'
            />
          </Text>
          <Layout flexBasis={[28, 0]} flexShrink='0' />
        </Box>
        <Layout flexBasis={[12, 16]} />
        <Box
          width={[40, 48]}
          height={[60, 64]}
          flexShrink='0'
          justifyContent='center'
          alignItems='center'
        >
          <Button size='smallSize'>
            <SmallArrowRightIcon />
          </Button>
        </Box>
      </Box>
      <Layout flexBasis={[64, 160]} />
    </Column>
    <Layout flexBasis={[0, 492]} flexShrink='0' />
  </Row>
)
