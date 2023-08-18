import { increment, decrement, changeCounterValue } from '@/store/counter'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'

import { Button, Input } from 'antd'
import { useState } from 'react'

const Home = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(state => state.counter.value)

  const [value, setValue] = useState('')

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleChange = (value: number) => {
    dispatch(changeCounterValue(value))
  }
  return <div>
    Home
    <div>
      <Button
        aria-label="Increment value"
        onClick={() => handleIncrement()}
      >
        Increment
      </Button>
      <span>{count}</span>
      <Button
        aria-label="Decrement value"
        onClick={() => handleDecrement()}
      >
        Decrement
      </Button>
      <Button
        aria-label="change counter value"
        onClick={() => handleChange(10)}
      >
        changeCounterValue
      </Button>
      <Input value={value} onChange={e => setValue(e.target.value)}/>
    </div>
  </div>
}

export default Home