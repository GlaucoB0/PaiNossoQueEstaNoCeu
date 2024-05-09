import React from 'react'
import Img from '../../img/house.png'
import './icon.css'

const House = () => {
  return (
    <a href="/"><img className='houseIcon' src={Img} alt="" /></a>
  )
}

export default House