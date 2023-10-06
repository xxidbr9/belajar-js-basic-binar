"use client";
import React, { useState } from 'react'
import Button from '../button'

type CardProps = JSX.IntrinsicElements['div'] & {
  buttonTestID?: string,
  countTestID?: string,
}

const Card = ({ buttonTestID, countTestID, ...props }: CardProps) => {
  const [count, setCount] = useState(0);
  const handleAddCount = () => setCount(prev => prev + 1)

  return (
    <div {...props}>
      <div>

        <span data-testid={countTestID}>
          {count}
        </span>
      </div>
      <Button data-testid={buttonTestID} onClick={handleAddCount}>Add 1</Button>
    </div>
  )
}

export default Card