import React from 'react'

export type ButtonProps = JSX.IntrinsicElements['button'];

const Button = (props: ButtonProps) => {
  return (
    <button {...props}>{props.children}</button>
  )
}

export default Button