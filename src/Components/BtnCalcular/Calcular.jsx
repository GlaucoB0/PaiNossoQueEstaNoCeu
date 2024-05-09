import React, { useState } from 'react'
import './Calcular.css'

const Calcular = ({calcularMedia}) => {
    return (
        <button onClick={calcularMedia} id='calcular'>Calcular</button>
    )
}

export default Calcular