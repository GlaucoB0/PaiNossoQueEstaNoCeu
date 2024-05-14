import React, { useState } from 'react'
import Input from '../../Components/Input/Input'
import Calcular from '../../Components/BtnCalcular/Calcular'
import House from '../../Components/HomeIcon/House'
import './Recuperacao.css'

const Recuperacao = () => {

    const [media, setMedia] = useState('')

    const calcularMedia = () => {
        event.preventDefault()

        if (isNaN(media)) {
            alert('é pra escrever numero ó jumento')
            return
        }
        if (media > 10 || media < 0) {
            alert('o pnc escreva tua nota direito plmds')
            return
        }
        if (media == '') {
            alert('reescreva os valores pfv')
            return
        }
        setMedia(Number(media))

        if (media >= 6) {
            window.location.href = `/Response?notaAlta=${media}`
            return
        }


        let mediaFinal = 0
        let rec = 0

        while (mediaFinal < 6) {
            rec += 0.5
            mediaFinal = (Number(media) + rec)/2
        }

        window.location.href = `/Response?recu=${rec}&mediaRec=${media}`
    }


    return (
        <form className='container' onSubmit={calcularMedia}>
            <House />
            <h1>Recuperação</h1>
            <div>
                <Input placeholder={'Escreva sua média atual'} av={setMedia} />
                <a className='refMedia' href='/MediaTotal'>Não sabe qual sua média? <strong>Clique aqui!</strong></a>
            </div>
            <Calcular calcularMedia={calcularMedia}></Calcular>
        </form>
    )
}

export default Recuperacao