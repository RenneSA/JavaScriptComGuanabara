// RECURSIVIDADE
function fatorial(n){
    if (n == 1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}
let n = 5
console.log(`O fatorial de ${n} é ${fatorial(n)} `)