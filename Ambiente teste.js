let num = [5, 8, 2, 9, 3]
num[3] = 6
num.push(7)
num.length // contar o numero de elemenos no array
num.sort()
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor(array) é ${num[0]}`)
console.log(num)

/*for(let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for(let pos in num){
    console.log(`A posição ${pos} te o valor ${num[pos]}`)
}
*/
let x = 8
let pos = num.indexOf(x)
//console.log(`O valor 8 está na posição ${num.indexOf(x)}`) // num.indexOf() mostra o índice em que o valor se encontra

if(pos == -1){
    console.log('Valor não encontrado!')
}else{
    console.log(`O valor está na posição ${pos}`)
}