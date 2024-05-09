import React, { useState } from 'react'
import Input from '../Components/Input/Input'
import Calcular from '../Components/BtnCalcular/Calcular'
import House from '../Components/HomeIcon/House'

const Media = () => {

    const [av1, setAv1] = useState(null)
    const [av2, setAv2] = useState(null)
    const [avt, setAvt] = useState(null)

    const calcularMedia = () => {
        event.preventDefault()

        if(av1 == null || av2 == null || avt == null){
            alert('o pnc escreva tua nota direito plmds')
            return
        }
        let media = 0
        media = ((av1 * 25) + (av2 * 25) + (avt * 50)) / 100
        window.location.href = `/Response?media=${media}`
    }


    return (
        <form className='container' onSubmit={calcularMedia}>
            <House/>
            <h1>Calcular Média</h1>
            <div>
                <Input placeholder={'Escreva sua nota da Av1'} av={setAv1} />
                <Input placeholder={'Escreva sua nota da Av2'} av={setAv2} />
                <Input placeholder={'Escreva sua nota da Avt'} av={setAvt} />
            </div>
            <Calcular />
        </form>
    )
}

export default Media