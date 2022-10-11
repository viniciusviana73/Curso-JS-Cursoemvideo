let txtinicio = document.querySelector('input#txtinicio')
let txtfim    = document.querySelector('input#txtfim')
let txtpasso  = document.querySelector('input#txtpasso')
let resultado = document.querySelector('div#resultado')

function contar(){
    if (verificar()){
        let inicio = Number(txtinicio.value)
        let fim    = Number(txtfim.value)
        let passo  = Number(txtpasso.value)
    
        if (inicio < fim){
            for (inicio; inicio <= fim; inicio += passo){
                resultado.innerHTML +=  `${inicio} \u{1F449} `
            }
        } else if (inicio > fim){
            for (inicio; inicio >= fim; inicio -= passo){
                resultado.innerHTML +=  `${inicio} \u{1F449} `
            }
        } else {
            resultado.innerHTML +=  `${inicio}`
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}

function verificar(){
    if (txtinicio.value == '' || txtfim.value == ''){
        resultado.innerHTML = `Impossível contar!`
        return false
    } else if (Number(txtinicio.value) < Number(txtfim.value) && Number(txtpasso.value) > Number(txtfim.value)){
        alert(`Passo inválido! O passo será setado para 1.`)
        txtpasso.value = 1
        resultado.innerHTML = `Contando: `
        return true
    } else if (Number(txtinicio.value) > Number(txtfim.value) && Number(txtpasso.value) > Number(txtinicio.value)){
        alert(`Passo inválido! O passo será setado para 1.`)
        txtpasso.value = 1
        resultado.innerHTML = `Contando: `
        return true
    } else if (txtpasso.value <= 0){
        alert(`Passo inválido! O passo será setado para 1.`)
        txtpasso.value = 1
        resultado.innerHTML = `Contando: `
        return true
    } else {
        resultado.innerHTML = `Contando: `
        return true
    }
}