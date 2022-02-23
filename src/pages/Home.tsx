import React, { useLayoutEffect } from 'react'

const Counter = () => {
  const [count, setCount] = React.useState(0)

  useLayoutEffect(() => {
    if (count > 3) throw new Error('Crashed!!!!')
  }, [count])

  return <button onClick={() => setCount(count + 1)}>{count}</button>
}

const Home = () => (
  <div>
    <h1>Hello, world!</h1>
    <Counter />
  </div>
)

export default Home
