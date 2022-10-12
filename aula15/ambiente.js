let num = [5, 9, 7, 6, 3]

num.push(1)
num.sort()
console.log(num)
console.log(`O vetor possui ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let val = 19
let pos = num.indexOf(val)

if (pos == -1){
    console.log(`Valor '${val}'não encontrado`)
} else {
    console.log(`O valor ${val} está na posição ${pos}`)
}