function carregar(){
    let divMsg    = document.querySelector('div#msg')
    let imagem    = document.querySelector('#imagem')
    let data      = new Date()
    let horaAtual = data.getHours()

    if (horaAtual < 6){
        imagem.src = 'madrugada.png'
        document.body.style.background = '#034452'
        divMsg.innerHTML = `Boa madrugada! `
    } else if (horaAtual < 12){
        imagem.src = 'manha.png'
        document.body.style.background = '#e4d5b6'
        divMsg.innerHTML = `Bom dia! `
    } else if (horaAtual < 18){
        imagem.src = 'tarde.png'
        document.body.style.background = '#a05e2b'
        divMsg.innerHTML = `Boa tarde! `
    } else {
        imagem.src = 'noite.png'
        document.body.style.background = '#13132b'
        divMsg.innerHTML = `Boa noite! `
    }
    
    divMsg.innerHTML += `Agora são ${horaAtual} horas.`
}
