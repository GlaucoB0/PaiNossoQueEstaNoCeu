import React, { useState } from 'react'
import Input from '../../Components/Input/Input'
import Calcular from '../../Components/BtnCalcular/Calcular'
import House from '../../Components/HomeIcon/House'

const Recuperacao = () => {

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
        if (av1 == '' || av2 == '') {
            alert('vai calcular oque ai ')
            return
        }
        setAv1(Number(av1))
        setAv2(Number(av2))
        setAvt(Number(avt))
        
        let menorNota = Math.min(av1, av2, avt)
        const notas = [av1, av2, avt]
        const indexMenorNota = notas.findIndex((nota) => nota == menorNota)

        let media = ((av1 * 25) + (av2 * 25) + (avt * 50)) / 100
        if(media >= 6 ){
            alert('já ta passado papai aiiiiii')
            return
        }
        switch (indexMenorNota) {
            case 0:
                while (media < 6) {
                    menorNota += 0.5
                    media = ((menorNota * 25) + (av2 * 25) + (avt * 50)) / 100
                }
                break;
            case 1:
                while (media < 6) {
                    menorNota += 0.5
                    media = ((av1 * 25) + (menorNota * 25) + (avt * 50)) / 100
                }
                break;
            case 2:
                while (media < 6) {
                    menorNota += 0.5
                    media = ((av1 * 25) + (av2 * 25) + (menorNota * 50)) / 100
                }   
                break;
        }

        window.location.href = `/Response?rec=${menorNota}&index=${indexMenorNota}&av1=${av1}&av2=${av2}&avT=${avt}`
    }


    return (
        <form className='container' onSubmit={calcularMedia}>
            <House />
            <h1>Recuperação</h1>
            <div>
                <Input placeholder={'Escreva sua nota da Av1'} av={setAv1} />
                <Input placeholder={'Escreva sua nota da Av2'} av={setAv2} />
                <Input placeholder={'Escreva sua nota da Avt'} av={setAvt} />
            </div>
            <Calcular calcularMedia={calcularMedia}></Calcular>
        </form>
    )
}

export default Recuperacao