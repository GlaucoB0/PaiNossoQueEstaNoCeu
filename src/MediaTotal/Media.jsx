import React, { useState } from 'react'
import Input from '../Components/Input/Input'
import Calcular from '../Components/BtnCalcular/Calcular'
import House from '../Components/HomeIcon/House'

const Media = () => {

    const [av1, setAv1] = useState('')
    const [av2, setAv2] = useState('')
    const [avt, setAvt] = useState('')

    const calcularMedia = () => {
        event.preventDefault()

        if (isNaN(av1) || isNaN(av2) || isNaN(avt)) {
            alert('é pra escrever numero ó jumento')
            return
        }
        if (av1 > 10 || av1 < 0 || av1 > 10 || av2 < 0 || av2 > 10 || avt < 0 || avt > 10) {
            alert('o pnc escreva tua nota direito plmds')
            return
        }
        if (av1 == ''  || av2 == ''){
            alert('vai calcular oque ai ')
            return
        }

        let media = 0
        media = ((av1 * 25) + (av2 * 25) + (avt * 50)) / 100
        window.location.href = `/Response?media=${media}`
    }


    return (
        <form className='container' onSubmit={calcularMedia}>
            <House />
            <h1>Calcular Média</h1>
            <div>
                <Input placeholder={'Escreva sua nota da Av1'} av={setAv1} />
                <Input placeholder={'Escreva sua nota da Av2'} av={setAv2} />
                <Input placeholder={'Escreva sua nota da Avt'} av={setAvt} />
            </div>
            <Calcular calcularMedia={calcularMedia}></Calcular>
        </form>
    )
}

export default Media