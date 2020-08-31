import React, { useState } from 'react'
import { decrement, increment } from './counting'

const CountShower: React.FC = ({ children }) => <div>{children}</div>

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault()
          setCount(increment(count))
        }}
        id="increment"
      >
        +
      </button>

      <CountShower>{count}</CountShower>

      <button
        onClick={(e) => {
          e.preventDefault()
          setCount(decrement(count))
        }}
        id="decrement"
      >
        -
      </button>
    </>
  )
}
