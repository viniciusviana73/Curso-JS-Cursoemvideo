function gerarTabuada(){
    let txtnum = document.querySelector('input#txtnum')
    let seltab = document.querySelector('#seltab')
    
    if (txtnum.value.length == 0){
        alert('Erro Insira Numero')
    } else {
        let num   = Number(txtnum.value)
        let count = 1

        seltab.innerHTML = ``

        while (count <= 10){
            let item   = document.createElement('option')
            item.text  = `${num} x ${count} = ${num*count}`
            item.value = `tab${count}`
            seltab.appendChild(item)
            count++
        }
        seltab.style.display = 'block'
    }
}