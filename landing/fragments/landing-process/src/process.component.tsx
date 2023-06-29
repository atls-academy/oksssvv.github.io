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
import { Space }               from '@ui/text'

export const Process = () => (
  <Row justifyContent='center'>
    <Layout flexBasis={[0, 492]} />
    <Column alignItems='center'>
      <Layout flexBasis={[24, 160]} />
      <Box justifyContent='center'>
        <Text
          color='white'
          fontSize={['small', 'medium']}
          lineHeight='small'
          textTransform='uppercase'
          opacity={0.5}
        >
          <FormattedMessage id='/' defaultMessage='Процесс создания' />
        </Text>
      </Box>
      <Layout flexBasis={[16, 24]} />
      <Box display={['none', 'inline']}>
        <Text color='white' fontSize='large'>
          <FormattedMessage id='/' defaultMessage='Любой процесс перестаёт' />
        </Text>
        <Space count={3} />
        <Text color='white' fontSize='large' opacity={0.5}>
          <FormattedMessage id='/' defaultMessage='быть' />
        </Text>
        <Space count={3} />
        <Text color='white' fontSize='large'>
          <FormattedMessage id='/' defaultMessage='сложным,' />
        </Text>
      </Box>
      <Box display={['none', 'inline']}>
        <Text color='white' fontSize='large'>
          <FormattedMessage id='/' defaultMessage='когда' />
        </Text>
        <Space count={3} />
        <Text color='white' fontSize='large' opacity={0.5}>
          <FormattedMessage id='/' defaultMessage='знаешь' />
        </Text>
        <Space count={3} />
        <Text color='white' fontSize='large'>
          <FormattedMessage id='/' defaultMessage='как он протекает' />
        </Text>
      </Box>
      <Box display={['inline', 'none']}>
        <Text color='white' fontSize='enlarged'>
          <FormattedMessage id='/' defaultMessage='Любой процесс перестает' />
        </Text>
      </Box>
      <Box display={['inline', 'none']}>
        <Text color='white' fontSize='enlarged' opacity={0.5}>
          <FormattedMessage id='/' defaultMessage='быть' />
        </Text>
        <Space count={2} />
        <Text color='white' fontSize='enlarged'>
          <FormattedMessage id='/' defaultMessage='сложным, когда' />
        </Text>
        <Space count={2} />
        <Text color='white' fontSize='enlarged' opacity={0.5}>
          <FormattedMessage id='/' defaultMessage='знаешь' />
        </Text>
      </Box>
      <Box display={['inline', 'none']}>
        <Text color='white' fontSize='enlarged'>
          <FormattedMessage id='/' defaultMessage='как он протекает' />
        </Text>
      </Box>
      <Layout flexBasis={[24, 50]} />
      <Box width={[155, 960]} height={[323, 540]} backgroundColor='black'>
        <PlugIcon width='100%' height='100%' />
      </Box>
      <Layout flexBasis={[26, 32]} />
      <Box width={[335, 960]} height={[64]} alignItems='center'>
        <Button size='smallSize' variant='ghost'>
          <SmallArrowLeftIcon />
        </Button>

        <Layout flexBasis={[12, 16]} />
        <Box width='100%' justifyContent='center'>
          <Layout flexBasis={[28, 0]} />
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
          <Layout flexBasis={[28, 0]} />
        </Box>
        <Layout flexBasis={[12, 16]} />

        <Button size='smallSize' variant='ghost'>
          <SmallArrowRightIcon />
        </Button>
      </Box>

      <Layout flexBasis={[64, 160]} />
    </Column>
    <Layout flexBasis={[0, 492]} />
  </Row>
)
