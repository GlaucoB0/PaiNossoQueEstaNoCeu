import React from 'react'
import House from '../../Components/HomeIcon/House'
import './Response.css'

const Response = () => {
    const verificaParam = new URL(window.location.href).searchParams

    const media = verificaParam.get('media')
    const avt = verificaParam.get('avt')
    const rec = verificaParam.get('rec')
    const notaAlta = Number(verificaParam.get('notaAlta'))
    const mediaRec = Number(verificaParam.get('mediaRec'))
    const recu = Number(verificaParam.get('recu'))

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

    if (rec) {
        return (
            <div className='container-response'>
                <House />
                <span className='green'>Você precisa tirar: {rec}</span>
                <div>
                    <h1>Para ficar com média 6</h1>
                    <p className='subtitulo'>{rec >= 10 ? 'KKKKKKK KKKKKKKKKK KKKKKKKK KKKKKKKKKKK KKKKKKK KKKKKKKKKKKKKKK KKKKK KKKKKK KKKKKKKKKKKKKKKK KKKKKKKKKKKKKKKKKK' : `A nota da sua recuperação [ ${rec} ] vai somar com sua media [ ${media} ] e dividir por 2, resultando na sua média final.`}</p>
                </div>

            </div>
        )
    }

    if (mediaRec) {

        let rec8 = (7 + mediaRec) / 2
        let rec10 = (10 + mediaRec) / 2

        if (rec8 < mediaRec) {
            rec8 = mediaRec
        }
        if (rec10 < mediaRec) {
            rec10 = mediaRec
        }


        return (
            <div className='container-response'>
                <House />
                <span className='green'>Quer aumentar sua nota?</span>
                <div>
                    <h1>Alguns casos:</h1>
                    <p className='subtitulo'> Para passar se arrastando precisa tirar nota <strong className='green'>{recu}</strong> na recuperação</p><br />
                    <p className='subtitulo'> Caso tire nota <strong className='green'>8</strong> na recuperação, sua média ficará <strong className='green'>{rec8}</strong></p><br />
                    <p className='subtitulo'> Caso tire nota <strong className='green'>10</strong> na recuperação, sua média ficará <strong className='green'>{rec10}</strong></p>
                </div>

            </div>
        )
    }

    if (notaAlta) {
        let rec6 = (6 + notaAlta) / 2
        let rec8 = (7 + notaAlta) / 2
        let rec10 = (10 + notaAlta) / 2

        if (rec6 < notaAlta) {
            rec6 = notaAlta
        }
        if (rec8 < notaAlta) {
            rec8 = notaAlta
        }
        if (rec10 < notaAlta) {
            rec10 = notaAlta
        }

        return (
            <div className='container-response'>
                <House />
                <span className='green'>Quer aumentar sua nota?</span>
                <div>
                    <h1>Alguns casos:</h1>
                    <p className='subtitulo'> Caso tire nota <strong className='green'>6</strong> na recuperação, sua média ficará <strong className='green'>{rec6}</strong></p><br />
                    <p className='subtitulo'> Caso tire nota <strong className='green'>8</strong> na recuperação, sua média ficará <strong className='green'>{rec8}</strong></p><br />
                    <p className='subtitulo'> Caso tire nota <strong className='green'>10</strong> na recuperação, sua média ficará <strong className='green'>{rec10}</strong></p>
                </div>

            </div>
        )
    }

}

export default Response