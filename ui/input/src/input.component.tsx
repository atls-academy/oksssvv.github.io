import styled                       from '@emotion/styled'
import { RawInput }                 from '@atls-ui-parts/input'
import { useChangeValue }           from '@atls-ui-parts/input'
import { createTextareaProps }      from '@atls-ui-parts/input'

import React                        from 'react'
import { ForwardRefRenderFunction } from 'react'
import { forwardRef }               from 'react'

import { InputProps }               from './input.interfaces'
import { baseStyles }               from './input.styles'
import { shapeStyles }              from './input.styles'
import { appearanceStyles }         from './input.styles'
import { textareaStyles }           from './input.styles'

export const InputElement = styled.div(baseStyles, shapeStyles, appearanceStyles, textareaStyles)

export const InputWithoutRef: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { size, value, disabled, onChange, onChangeNative, textarea, textAlign, ...props },
  ref
) => {
  const changeValue = useChangeValue(disabled, onChange, onChangeNative)
  const { containerProps, rawInputProps } = createTextareaProps()

  return (
    <InputElement {...props} size={size} {...(textarea && containerProps)} textarea={textarea}>
      <RawInput
        ref={ref}
        {...props}
        disabled={disabled}
        value={value}
        onChange={changeValue}
        {...(textarea && rawInputProps)}
        style={{
          textAlign: textAlign as any,
          ...(textarea && {
            resize: 'none',
            width: '100%',
            height: '100%',
          }),
        }}
      />
    </InputElement>
  )
}

export const Input = forwardRef<HTMLInputElement, InputProps>(InputWithoutRef)
