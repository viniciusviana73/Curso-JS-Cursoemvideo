let txtnum       = document.querySelector('#txtnum')
let sel          = document.querySelector('#selvalues')
let selPreOption = document.querySelector('#selPreOption')
let divres       = document.querySelector('div#resultado')
let array        = []

function adicionar(){
    let valor    = Number(txtnum.value)
    if (checkInput(valor)){
        divres.style.display = 'none'
        let selItem  = document.createElement('option') 
        array.push(valor)
        selItem.text = `Valor ${valor} foi adicionado.`
        sel.appendChild(selItem)
        sel.size++
        txtnum.value = ''
    } else {
        txtnum.style.animation = 'shake 0.6s'  
        txtnum.focus()
        txtnum.value = ''
    }
}

function checkInput(n){
    if (n == ''){      
        alert(`Preencha o campo com um número válido!`)
        return false
    } else if (n < 1 || n > 100){
        alert(`Valor inserido fora dos limites permitidos!`)
        return false
    } else if (array.indexOf(n) != -1){
        alert(`Valor inserido já faz parte do array!`)
        return false
    } else {
        selPreOption.remove()
        return true
    }
}

function somarValores(){
    let total = 0
    for (let pos in array){
        total += array[pos]
    }
    return total
}

function calcularMedia(){
    let aux   = 0
    let total = 0
    for (let pos in array){
        total += array[pos]
        aux++
    }
    return Number(total / aux)
}

function finalizar(){
    if (array.length == 0){
        alert(`Adicione valores para finalizar!`)
        txtnum.focus()
        txtnum.style.animation = 'shake 0.6s'
    } else {
        array.sort((a, b) => a - b);    // Fazendo sort() comparando como int
        divres.style.display = 'block'
        divres.innerHTML = `<p>Temos um total de ${array.length} números cadastrados no array.<br> 
        O maior valor informado foi: ${array[array.length - 1]}. <br> 
        O menor valor informado foi: ${array[0]}. <br> 
        A soma de todos os valores é ${somarValores()}. <br> 
        A média desses valores é: ${calcularMedia()}.
    </p>`
    }
}