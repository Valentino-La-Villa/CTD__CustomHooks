import React from 'react'
import useCounter from '../hooks/useCounter'

const CounterApp = () => {

    const { counter, incrementCounter, resetCounter, decrementCounter } = useCounter({initValue: 50})

  return (
    <div className='ms-5'>
    
        <h1>Counter: </h1>

        <h4>{counter}</h4>

        <div className='d-flex gap-3'>
            <button onClick={()=>{decrementCounter(8, false)}} className='btn btn-danger'>-8</button>
            <button onClick={()=>{decrementCounter(1, false)}} className='btn btn-danger'>-1</button>
            <button onClick={()=>{resetCounter()}} className='btn btn-warning'>Reset</button>
            <button onClick={()=>{incrementCounter(1)}} className='btn btn-primary'>+1</button>
            <button onClick={()=>{incrementCounter(5)}} className='btn btn-primary'>+5</button>
        </div>

    </div>
  )
}

export default CounterApp