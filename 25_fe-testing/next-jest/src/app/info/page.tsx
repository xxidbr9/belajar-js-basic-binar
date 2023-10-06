"use client"
import React from 'react'
import Card from '../../components/card/card'
import { useStore } from './store'
import Button from '../../components/button'

type Props = {}

const page = (props: Props) => {
  const { value, setValue } = useStore()
  return (
    <div>
      <h1>Hello</h1>
      <div>{value}</div>
      <div>
        <Button onClick={setValue}>Add 1</Button>
      </div>
    </div>
  )
}

export default page