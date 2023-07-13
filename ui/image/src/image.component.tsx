import styled         from '@emotion/styled'

import { layout }     from 'styled-system'

import { ImageProps } from './image.interfaces'

export const Image = styled.img<ImageProps>(layout)
