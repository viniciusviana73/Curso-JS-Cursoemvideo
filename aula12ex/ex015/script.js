function verificar(){
    let data    = new Date()
    let ano     = data.getFullYear()
    let formAno = document.querySelector('#txtano')
    let res     = document.querySelector('#res')

    if (formAno.value.length == 0 || formAno.value > ano){
        alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        let fsexo = document.getElementsByName('radsex')
        let idade = ano - formAno.value
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsexo[0].checked){
            genero = 'Homem'
            if (idade < 10){
                img.src = 'foto-bebe-m.png'
            } else if (idade < 21){
                img.src = 'foto-jovem-m.png'
            } else if (idade < 50){
                img.src = 'foto-adulto-m.png'
            } else {
                img.src = 'foto-idoso-m.png'
            }
        } else {    // Duas formas para alterar o atributo src do elemento img
            genero = 'Mulher'
            if (idade < 10){
                img.setAttribute ('src' ,'foto-bebe-f.png')
            } else if (idade < 21){
                img.setAttribute ('src' ,'foto-jovem-f.png')
            } else if (idade < 50){
                img.setAttribute ('src' ,'foto-adulto-f.png')
            } else {
                img.setAttribute ('src' ,'foto-idoso-f.png')
            }
        }        
        
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Gênero: ${genero} <br> Idade: ${idade}.</p>`
        res.appendChild(img)
    }
}