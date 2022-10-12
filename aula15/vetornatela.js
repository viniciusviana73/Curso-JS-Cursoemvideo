let num = [5, 9, 7, 6, 3]

/*
for (let pos = 0; pos < num.length; pos++){
    console.log(`A posicão ${pos} do vetor possui valor: ${num[pos]}`)
}
*/

for (let pos in num){
    console.log(`A posicão ${pos} do vetor possui valor: ${num[pos]}`)
}