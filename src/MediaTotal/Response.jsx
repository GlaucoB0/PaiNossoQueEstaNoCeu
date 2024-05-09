import React from 'react'
import House from '../Components/HomeIcon/House'
import './Response.css'

const Response = () => {
    const verificaParam = new URL(window.location.href).searchParams

    const media = verificaParam.get('media')
    const avt = verificaParam.get('avt')

    if (media) {

        return (
            <div className='container-response'>
                <House />
                <span className='green'>Você tirou média: {media}</span>
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
                    <p className='subtitulo'>{avt >= 10 ? 'KKKKKKK KKKKKKKKKK KKKKKKKK KKKKKKKKKKK KKKKKKK KKKKKKKKKKKKKKK KKKKK KKKKKK KKKKKKKKKKKKKKKK KKKKKKKKKKKKKKKKKK' : `Com a Média 6, e ficar de boassa`}</p>
                </div>

            </div>
        )
    }


}

export default Response