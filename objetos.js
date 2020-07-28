var pessoa = {};
pessoa.nome = "caio"




var pessoa2 = {nome:"gael"}
pessoa2.idade = 1


console.log(pessoa2)


var tv = {
    ligarTelevisao: function(){
        return "ligado"
    },
    tamanho:50,
    cor:"preto",
    wifi:true,
    comandoVoz:false,
    voltagem:110,
    peso:"15kg",
    fabricante:"samsung",
}






console.log(tv)
console.log(tv.cor)
console.log(tv.wifi)
console.log(tv.ligarTelevisao())

var casa = {
    casaavenda: function(){
        return 'casalindaavenda'
    },
    cor:"tijolo",
    largura:"5.5metros",
    altura:"20metros",
    escada:true,
    churrasqueira:false,
}



console.log(casa)
console.log(casa.altura)
console.log(casa.casaavenda())
