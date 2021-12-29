//tipo primitivos

//boolean
var VouF = true;
console.log('VouF='+typeof(VouF));

var numero = 1;
console.log('numero='+typeof(numero));

var texto = 'teste';
console.log('texto='+typeof(texto));

let texto2 = 'teste2';
console.log('texto2='+typeof(texto2));

const constante = 'Eduardo';
//constante = 'Teste'; <- dá erro
console.log('Constante='+constante);

var escopoGlobal = 'Global';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();

//atribuição
var atribuição = 'eduardo';

//comparação
var comparacao = '0' == 0;
console.log('comparação='+comparacao);

//comparação
var comparacaoIdentica = '0' === 0;
console.log('comparacaoIdentica='+comparacaoIdentica);

//operadores aritmeticos -> +,-,*,/,%(resto divisao inteira), **(potenciação 2**3=8)
//operadores relacionais -> >, <, >=, <=
//operadores lógicos -> &&(and), ||(or), !(not)