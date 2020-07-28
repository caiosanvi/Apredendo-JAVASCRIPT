// var helloworld = function () {
//     return function () {
//         return "hello world";
//     };
// };

// console.log(helloworld);
// console.log(helloworld());
// console.log(helloworld()());

// var nome = 'Caio'
// var pessoa = 10

// console.log(nome)
// console.log(pessoa)

// pessoa = nome

// console.log(pessoa)1

var getIdade = function () {
    return this.ano
}


var carro = {
    ano: 22,
    ligarMotor: getIdade,
    ligarSetaEsquerda: function() { 
        return 'seta esquerda ligada'
    },
    ligarSetaDireita: function() { 
        return 'seta direita ligada'
    },
    AcenderFarois: function() { 
        return 'farois ligado'
    },
    Acelerar: function() { 
        return 'Estou acelerando...'
    },
}


console.log(carro.ligarSetaDireita())

console.log(carro.ano)

