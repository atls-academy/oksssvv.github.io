import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { Link }             from 'react-scroll'
import { useIntl }          from 'react-intl'

import { Background }       from '@ui/background'
import { Button }           from '@ui/button'
import { CardDetails }      from '@ui/card'
import { CardExtended }     from '@ui/card'
import { ScrollIcon }       from '@ui/icon'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'
import { useHover }         from '@ui/utils'

import { CardShortBlock }   from './card-short-block'

export const CardsWide = () => {
  const [hover, hoverProps] = useHover()
  const intl = useIntl()
  const CardsShortBlock = Array.from({ length: 5 }).map((_, index) => (
    <CardShortBlock
      key={index} /*eslint-disable-line */
      title={index < 3 ? 'Как использовать библиотеки' : 'Дизайн, Figma, Математика'}
      gap={index === 2 ? 0 : 40}
    />
  ))

  return (
    <Row display={{ _: 'none', standard: 'none', wide: 'flex', ultra: 'flex' }}>
      <Column>
        <Box width={{ wide: 1790, ultra: 2090 }}>
          <CardExtended
            srcImage='/waves.png'
            category={intl.formatMessage({ id: 'courses.card.education' })}
            gap={{ wide: 356, ultra: 222 }}
            title={intl.formatMessage({ id: 'courses.card.frontend-engineer' })}
            description={intl.formatMessage({
              id: 'courses.card.desktop.you-will-learn-fundamental-knowledge-in-IT',
            })}
          />
          <Layout flexBasis={40} />
          <CardExtended
            srcImage='/waves.png'
            category={intl.formatMessage({ id: 'courses.card.mini-cours' })}
            gap={{ wide: 356, ultra: 222 }}
            title={intl.formatMessage({ id: 'courses.card.frontend-engineer' })}
            description={intl.formatMessage({
              id: 'courses.card.desktop.you-will-learn-fundamental-knowledge-in-IT',
            })}
          />
        </Box>
        <Layout flexBasis={40} />
        <Box width={{ wide: 1798, ultra: 2090 }} flexWrap='wrap'>
          {CardsShortBlock}
          <NextLink path='/library'>
            <Background
              display='flex'
              width={{ wide: 572, ultra: 670 }}
              height={{ wide: 320, ultra: 326 }}
              backgroundColor={hover ? 'lilacGradient' : 'purpleGradient'}
              borderRadius='big'
              {...hoverProps}
            >
              <Layout flexBasis={40} />
              <Column>
                <Layout flexBasis={232} />
                <Text fontSize='large' color='text.white'>
                  <FormattedMessage id='courses.all-materials' />
                </Text>
              </Column>
            </Background>
          </NextLink>
        </Box>
      </Column>
      <Layout flexBasis={40} />
      <Column>
        <CardDetails
          info={intl.formatMessage({ id: 'courses.card.you-learn-fundamental-knowledge-field-it' })}
          quantity={5}
          description={intl.formatMessage({ id: 'courses.card.student-education-one-group' })}
        />
        <Layout flexBasis={20} />
        <Link to='Education' spy smooth duration={1000}>
          <Box display={{ wide: 'flex', ultra: 'none' }} width={[410]} flexShrink='0'>
            <Button
              variant='primary'
              size='bigSizeNormalPadding'
              gap={121}
              icon={<ScrollIcon width={12} height={18} />}
              widthIcon={48}
              heightIcon={48}
              backgroundIcon='background.white'
              radiusIcon='medium'
              fill
            >
              <Text fontSize='regular' lineHeight='regular' color='text.white'>
                <FormattedMessage id='courses.button.process' />
              </Text>
            </Button>
          </Box>
        </Link>
        <Link to='Education' spy smooth duration={1000}>
          <Box display={{ wide: 'none', ultra: 'flex' }} width={[470]} flexShrink='0'>
            <Button
              variant='primary'
              size='largeSizeNormalPadding'
              gap={54}
              icon={<ScrollIcon width={18} height={27} />}
              widthIcon={72}
              heightIcon={72}
              backgroundIcon='background.white'
              radiusIcon='big'
              fill
            >
              <Text fontSize='major' lineHeight='regular' color='text.white'>
                <FormattedMessage id='courses.button.process' />
              </Text>
            </Button>
          </Box>
        </Link>
      </Column>
    </Row>
  )
}
