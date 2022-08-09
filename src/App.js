import { useState } from 'react';
import React from 'react'
import './App.css';

const App = () => {
  
  const [temp, setTemp] = useState(10)
  const [tempColor, setTempColor] = useState('cold')

  const increaseTemp = () => {
    if (temp === 100) return
    setTemp(temp + 1)
    tempChange()
  }

  const decreaseTemp = () => {
    if (temp === -20) return
    setTemp(temp - 1)
    tempChange()
  }

  const tempChange = () => { 
    if (temp <= 0) {
      setTempColor('very-cold')
    } else if (temp > 0) {
      setTempColor ('cold')
    }
    if (temp >= 30) {
      setTempColor('hot')
    } 
    if (temp >= 50) {
      setTempColor('very-hot')
    }
  }

  return (
    <div className='container'>
      <div className= {`temp ${tempColor}`}>
        {temp}deg C
      </div>
      <div className='btns'>
        <button onClick={decreaseTemp}>-</button>
        <button onClick={increaseTemp}>+</button>
      </div>
    </div>
  )
}

export default App;
