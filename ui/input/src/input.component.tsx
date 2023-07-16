import styled                       from '@emotion/styled'
import { RawInput }                 from '@atls-ui-parts/input'
import { useChangeValue }           from '@atls-ui-parts/input'
import { createTextareaProps }      from '@atls-ui-parts/input'

import React                        from 'react'
import { ForwardRefRenderFunction } from 'react'
import { forwardRef }               from 'react'

import { Layout }                   from '@ui/layout'
import { useHover }                 from '@ui/utils'
import { useFocus }                 from '@ui/utils'

import { IconAttachment }           from './attachment'
import { InputProps }               from './input.interfaces'
import { baseStyles }               from './input.styles'
import { shapeStyles }              from './input.styles'
import { appearanceStyles }         from './input.styles'
import { textareaStyles }           from './input.styles'

export const InputElement = styled.div(baseStyles, shapeStyles, appearanceStyles, textareaStyles)

export const InputWithoutRef: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { size, value, filled, disabled, onChange, textarea, ...props },
  ref
) => {
  const changeValue = useChangeValue(disabled, onChange)
  const { containerProps, rawInputProps } = createTextareaProps()
  const [hover, hoverProps] = useHover()
  const [focus, focusProps] = useFocus()

  return (
    <InputElement
      size={size}
      textarea={textarea}
      disabled={disabled}
      filled={filled}
      hover={hover}
      focus={focus}
      {...focusProps}
      {...hoverProps}
      {...props}
      {...(textarea && containerProps)}
    >
      <IconAttachment attachmentIcon={props.attachmentIcon} />
      <Layout flexBasis={props.gap} />
      <RawInput
        ref={ref}
        onChange={changeValue}
        {...props}
        {...(textarea && rawInputProps)}
        style={{ resize: 'none', width: '100%', height: '100%' }}
      />
    </InputElement>
  )
}

export const Input = forwardRef<HTMLInputElement, InputProps>(InputWithoutRef)
