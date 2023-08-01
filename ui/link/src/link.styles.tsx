import styled               from '@emotion/styled'
import { createBaseStyles } from '@atls-ui-parts/link'

import { Text }             from '@ui/text'

export const BaseLink = styled(Text.withComponent('a'))(createBaseStyles())
