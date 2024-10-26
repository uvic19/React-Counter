import React, { useState } from 'react'
import './Counter.css'

function Counter() {
     const [count, setCount] = useState(0)
  return (
    <div className='counter-container'>
      <h2>React Clicker</h2>
      <div className='bottom'>
      <p id="para">You Have clicked <span>{count}</span> times</p>
      <button id='btn' onClick={() => {setCount(count+1) }}>Click me</button>
      </div>
    </div>
  )
}

export default Counter
