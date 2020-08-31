import React, { useState } from 'react'

const CountShower: React.FC = ({ children }) => <div>{children}</div>

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault()
          setCount(count + 1)
        }}
        id="increment"
      >
        +
      </button>

      <CountShower>{count}</CountShower>

      <button
        onClick={(e) => {
          e.preventDefault()
          setCount(count - 1)
        }}
        id="decrement"
      >
        -
      </button>
    </>
  )
}
