import React from 'react'
import './Button.css'

const Button = ({ href, text }) => {
  return (
    <a href={href} >
      <button className='btnRedirecionar'>
        {text}
      </button>
    </a>
  )
}

export default Button