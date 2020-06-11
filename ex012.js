var agora = new Date()
var hora = agora.getHours() // lembrando que a hora que é marcada aqui é a hora do computador pq o software está rodando no computador. Se estiver rodando no servidor será a hora do servidor.
console.log(`Agora são exatamente ${hora} horas.`)

if(hora >= 24 || hora <= 5){
    console.log('Boa Madrugada!')
}else if(hora < 12){
    console.log("Bom dia!")
}else if(hora <=18){
    console.log("Boa tarde!")
}else {
    console.log('Boa Noite!')
}
