import React from 'react'
import House from '../../Components/HomeIcon/House'
import './Response.css'

const Response = () => {
    const verificaParam = new URL(window.location.href).searchParams
    
    const media = verificaParam.get('media')
    const avt = verificaParam.get('avt')
    const rec = verificaParam.get('rec')

    if (media) {
        return (
            <div className='container-response'>
                <House />
                <span className='green'>Você tirou média: {parseFloat(media).toFixed(2)}</span>
                <div>
                    <h1>Resultado</h1>
                    <p className='subtitulo'>{media < 6 ? 'Bixo Burro do carai vai estudar mongoloide KKKKKKKKK plmds' : 'Passou bonito visse, quero ser ingual voce quando eu crescer'}</p>
                </div>

            </div>
        )
    }

    if (avt) {
        return (
            <div className='container-response'>
                <House />
                <span className='green'>Você precisa tirar: {avt}</span>
                <div>
                    <h1>Para Passar</h1>
                    <p className='subtitulo'>{avt >= 10 ? 'KKKKKKK KKKKKKKKKK KKKKKKKK KKKKKKKKKKK KKKKKKK KKKKKKKKKKKKKKK KKKKK KKKKKK KKKKKKKKKKKKKKKK KKKKKKKKKKKKKKKKKK' : `Com a Média 6, e ficar de tranks 😎`}</p>
                </div>

            </div>
        )
    }

    if (rec){
        const index = Number(verificaParam.get('index'))
        const av1 = Number(verificaParam.get('av1'))
        const av2 = Number(verificaParam.get('av2'))
        const avT = Number(verificaParam.get('avT'))

        const notas = [av1,av2,avT]

        return (
            <div className='container-response'>
                <House />
                <span className='green'>Você precisa tirar: {rec}</span>
                <div>
                    <h1>Conclusão</h1>
                    <p className='subtitulo'>{rec >= 10 ? 'KKKKKKK KKKKKKKKKK KKKKKKKK KKKKKKKKKKK KKKKKKK KKKKKKKKKKKKKKK KKKKK KKKKKK KKKKKKKKKKKKKKKK KKKKKKKKKKKKKKKKKK' : `A nota da sua recuperação vai subistituir a sua AV com a menor nota que foi ${notas[index]} pelo ${rec} que você tirou, assim ficando com média 6.`}</p>
                </div>

            </div>
        )
    }


}

export default Response