import React, { useState } from 'react'
import Input from '../../Components/Input/Input'
import Calcular from '../../Components/BtnCalcular/Calcular'
import House from '../../Components/HomeIcon/House'

const Avt = () => {



    const [av1, setAv1] = useState('')
    const [av2, setAv2] = useState('')

    const calcularMedia = () => {
        event.preventDefault()

        if (isNaN(av1) || isNaN(av2) ) {
            alert('é pra escrever numero ó jumento')
            return
        }
        if (av1 > 10 || av1 < 0 || av1 > 10 || av2 < 0 || av2 > 10 ) {
            alert('o pnc escreva tua nota direito plmds')
            return
        }
        if (av1 == ''  || av2 == ''){
            alert('vai calcular oque ai ')
            return
        }

        let media = 0
        let avt = 0

        while (media < 6) {
            avt += 0.5
            media = ((av1 * 25) + (av2 * 25) + (avt * 50)) / 100
            
        }
        window.location.href = `/Response?avt=${avt}`
    }


    return (
        <form className='container' onSubmit={calcularMedia}>
            <House/>
            <h1>Calcular minha desgraça</h1>
            <div>
                <Input placeholder={'Escreva sua nota da Av1'} av={setAv1} />
                <Input placeholder={'Escreva sua nota da Av2'} av={setAv2} />
            </div>
            <Calcular />
        </form>
    )

    return (
        <div>Avt</div>
    )
}

export default Avt