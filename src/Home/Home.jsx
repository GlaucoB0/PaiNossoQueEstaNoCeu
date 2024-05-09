import React from 'react'
import Button from '../Components/Button/Button'
import './Home.css'
import '../Components/Container.css'
import Img from '../img/assustado.png'

const Home = () => {
    return (
        <div className='container'>
            <div>
                <img src={Img} alt="" />
                <section>
                    <h1>Calculadora Fodastica</h1>
                    <p className='green'>Pai nosso que está no céu [...]</p>
                </section>
            </div>
            <p className='subtitulo'>Que Titia Marcia esteja com todos nós amém</p>
            <div>
                <Button href={'/MediaTotal'} text={'Media total do trimeste'} />
                <Button href={'/QuantoFaltaNaAvt'} text={'Nota minina da Avt para passar'} />
            </div>
        </div>
    )
}

export default Home