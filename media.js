// pegando elementos DOM
const notaAv1 = document.getElementById('inAv1')
const notaAv2 = document.getElementById('inAv2')
const btnCalcular = document.getElementById('btnCalcular')
const btnResetar = document.getElementById('btnReset')
const outMedia = document.getElementById('outMedia')

// Pesos de cada atividade
const pesoAv1 = 25
const pesoAv2 = 25
const pesoAvt = 50


// Eventos dos btn
btnCalcular.addEventListener('click', () => {
    MostrarNotaFaltante()
})

btnResetar.addEventListener('click', () => {
    window.location.reload()
})

const MostrarNotaFaltante = () => {

    const { notaAvt, media } = CalcularQuantoPrecisaAvt(notaAv1.value, notaAv2.value)

    if (notaAvt >= 7 && notaAvt <= 10) {
        outMedia.innerText = `vix maria tu ta precisando tirar ${notaAvt} na AVT pra passar se arrastandoKKKKKKKKKKK só pra ficar com a media ${media} KKKKKK tu acha`
        setTimeout(()=>{
            window.open('https://www.youtube.com/watch?v=zh-sP-MyDCo') 
        },5300)
    } else if (notaAvt > 10) {
        outMedia.innerText = `precisando de ${notaAvt} pontos no minimo \n KKKKKKKKKKKKKKKKKK KKKKKKKKKKKKKKKKKKKKKKK KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK KKKKKKKKKKKKKK KKKKKKKKKKKKKK KKKKKKKKKKKKKKKKKKKKKKKKKKK KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK KKKKKKKKKKKKKKKKKKK KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK KKKKKKKKKKKKKKKK KKKKKKKKKKKKKKKKKKKKKKKKKKKKKK KKKKKKKKKKKKKKKKK KKKKKKKKKKKKKKKKK KKKKKKKKKKKKKKKKKKKKKKKKKKKK KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK KKKKKKKKKKKKKKKKKKKKKKK KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK KKKKKKKKKKKKKKKKKKKKKKKKKKK KKKKKKKKKKKKKKKKKKKKKKK KKKKKKK KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK KKKKKKKKKKKKKKKKKK KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK KKKKKKKKKKKKKKKKKKKKKKKKKKK KKKKKKKKKKKKKKKKKKKKKKKKKKK KKKKKKKKKK`
        setTimeout(()=>{
            window.open('https://www.youtube.com/watch?v=zh-sP-MyDCo') 
        },4000)
    } else {
        outMedia.innerText = `ta precisando só de ${notaAvt} na AVT pra passar, é facinho pae nisso só pra ficar com a media ${media}, da de tranks`
    }
}

const CalcularQuantoPrecisaAvt = (notaAv1, notaAv2) => {
    let media = 0
    let notaAvt = 0

    for (let i = 0; media <= 6; i++) {
        notaAvt = i
        media = ((notaAv1 * pesoAv1) + (notaAv2 * pesoAv2) + (notaAvt * pesoAvt)) / 100
    }
    return { notaAvt: notaAvt, media: media }
}