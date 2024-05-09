import React from 'react'
import './Input.css'

const Input = ({placeholder, av}) => {
  return (
    <input type="number" className='Input' placeholder={placeholder} onChange={()=>av(event.target.value)}/>
  )
}

export default Input