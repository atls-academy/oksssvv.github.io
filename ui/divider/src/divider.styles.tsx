import React                           from 'react'

import { Layout }                      from '@ui/layout'

import { Divider as DividerComponent } from './divider.component'

export const Divider = () => (
  <Layout width={1160}>
    <DividerComponent borderRadius={0} weight={1} backgroundColor='divider.transparent' />
  </Layout>
)
