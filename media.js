const pesoAv1 = 25
const pesoAv2 = 25
const pesoAvt = 50

let notaAvt = 0
let media = 0

const notaFaltante = (notaAv1, notaAv2) => {
    for (let i = 0; media <= 6; i++) {
        media = ((notaAv1 * pesoAv1) + (notaAv2 * pesoAv2) + (i * pesoAvt)) / 100
        notaAvt = i
    }
    return { notaAvt: notaAvt, media: media }
}

const btnCalcular = document.getElementById('btnCalcular')
const btnResetar = document.getElementById('btnReset')

btnCalcular.addEventListener('click', () => {
    const notaAv1 = Number(document.getElementById('inAv1').value)
    const notaAv2 = Number(document.getElementById('inAv2').value)
    const outMedia = document.getElementById('outMedia')

    const nota_media = notaFaltante(notaAv1, notaAv2)

    if (nota_media.notaAvt >= 7) {
        return outMedia.innerHTML = `<p>vix maria tu ta precisando tirar <strong>${nota_media.notaAvt}</strong> na AVT pra passar se arrastando</p> <p>com a media ${media} KKKKKK</p>`
    }
    outMedia.innerHTML = `<p>ta precisando só de <strong>${nota_media.notaAvt}</strong> na AVT pra passar facinho pae</p> <p>nisso pra ficar com a media ${media} da de boa</p>`
})

btnResetar.addEventListener('click', ()=> {
    window.location.reload()
})