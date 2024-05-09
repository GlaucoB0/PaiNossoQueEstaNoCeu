import React from 'react'
import './Input.css'

const Input = ({placeholder, av}) => {
  const verificarString = ()=>{
    const nota = event.target.value
    if(isNaN(nota)){
      av('a')
      return
    }
    av(nota)
  }
  return (
    <input type="text" className='Input' placeholder={placeholder} onChange={()=>verificarString()}/>
  )
}

export default Input