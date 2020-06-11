var idade = 65
if (idade < 16){
    console.log('Não vota!')
} else if(idade < 18 || idade >= 65){
        console.log('Voto opcional!')
}else { //(idade >= 18) poderia ser usado porém não é necessário
    console.log('Voto Obrigatório!')
}
    
