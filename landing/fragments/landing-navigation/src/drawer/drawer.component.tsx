import React             from 'react'

import { Item }          from '@landing/navigation-fragment'
import { Button }        from '@ui/button'
import { Drawer }        from '@ui/drawer'
import { ArrowUpIcon }   from '@ui/icon'
import { Layout }        from '@ui/layout'
import { Box }           from '@ui/layout'
import { Row }           from '@ui/layout'
import { Column }        from '@ui/layout'
import { Logo }          from '@ui/logo'
import { Text }          from '@ui/text'

import { CardsDesktop }  from './cards'
import { CardsMobile }   from './cards'
import { useNavigation } from '../data'

export const DrawerContainer = ({ active, onClose }) => {
  const title = useNavigation()

  const getId = (id) => title?.data?.allNavigation.nodes.find((obj) => obj.id === id)

  const courses = getId('cG9zdDoyMjI=')?.title

  return (
    <Drawer heightDrawer={{ _: 495, standard: 610, ultra: 720 }} active={active}>
      <Layout flexBasis={[22, 35]} />
      <Row width='100%' justifyContent='center'>
        <Layout flexBasis={{ _: 20, standard: 40, ultra: 620 }} />
        <Box width={{ _: 40, standard: 56, wide: 56, ultra: 84 }} flexShrink='0'>
          <Logo fill='rgba(58, 55, 93, 1)' />
        </Box>
        <Layout flexBasis={{ standard: 400, wide: 715, ultra: 510 }} />
        <Row
          display={['none', 'flex']}
          justifyContent='center'
          alignItems='center'
          width={{ ultra: 1290 }}
        >
          <Item
            backColor='light'
            title={getId('cG9zdDoyMjE=')?.title}
            path={getId('cG9zdDoyMjE=')?.id}
          />
          <Layout flexBasis={{ standsrd: 20, ultra: 30 }} />
          <Item
            backColor='light'
            title={getId('cG9zdDoyMjI=')?.title}
            path={getId('cG9zdDoyMjI=')?.id}
          />
          <Layout flexBasis={{ standsrd: 20, ultra: 30 }} />
          <Item
            backColor='light'
            title={getId('cG9zdDoyMjQ=')?.title}
            path={getId('cG9zdDoyMjQ=')?.id}
          />
          <Layout flexBasis={{ standsrd: 20, ultra: 30 }} />
          <Item
            backColor='light'
            title={getId('cG9zdDoyMjU=')?.title}
            path={getId('cG9zdDoyMjU=')?.id}
          />
        </Row>
        <Layout flexBasis={{ _: 195, standard: 400, wide: 715, ultra: 510 }} />
        <Box
          width={203}
          display={{ _: 'none', standard: 'none', wide: 'none', ultra: 'flex' }}
          alignItems='center'
          flexShrink='0'
        >
          <Button
            variant='primary'
            size='bigSizeBigPadding'
            gap={30}
            icon={<ArrowUpIcon width={18} height={9} />}
            widthIcon={60}
            heightIcon={60}
            backgroundIcon='background.white'
            radiusIcon='massive'
            fill
            onClick={onClose}
          >
            <Text color='white' fontSize='averaged'>
              {courses}
            </Text>
          </Button>
        </Box>
        <Box
          width={163}
          display={{ _: 'none', standard: 'flex', wide: 'flex', ultra: 'none' }}
          alignItems='center'
          flexShrink='0'
        >
          <Button
            variant='primary'
            size='normalSizeNormalPadding'
            gap={20}
            icon={<ArrowUpIcon width={12} height={6} />}
            widthIcon={48}
            heightIcon={48}
            backgroundIcon='background.white'
            radiusIcon='normal'
            fill
            onClick={onClose}
          >
            <Text color='white' fontSize='regular' lineHeight='small'>
              {courses}
            </Text>
          </Button>
        </Box>
        <Box display={['flex', 'none']} width={100} alignItems='center' flexShrink='0'>
          <Button
            variant='primary'
            size='normalSizeSmallPadding'
            gap={10}
            icon={<ArrowUpIcon width={9} height={4.5} />}
            widthIcon={28}
            heightIcon={28}
            backgroundIcon='background.white'
            radiusIcon='micro'
            fill
            onClick={onClose}
          >
            <Text color='white' fontSize='medium'>
              {courses}
            </Text>
          </Button>
        </Box>
        <Layout flexBasis={{ _: 20, standard: 40, ultra: 620 }} />
      </Row>
      <Layout flexBasis={[78, 50]} />

      <Row
        display={['none', 'flex']}
        height={{ standard: 430, ultra: 500 }}
        maxWidth={{ ultra: 2600 }}
      >
        <CardsDesktop />
      </Row>
      <Column display={['flex', 'none']} height={337} maxWidth={335}>
        <CardsMobile />
      </Column>
    </Drawer>
  )
}
