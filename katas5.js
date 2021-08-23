// implemente aqui as funções de teste



/* 1.Escreva duas funções de teste unitário chamadas testReverseString1 e testReverseString2. Em seguida, escreva uma função chamada reverseString que inverte uma string.

Por exemplo, um teste para o 1° Kata poderia se parecer com isso:
*/


function testeReverseString1() {
   let result = reverseString("Kenzie Academy");
   let expected = "ymedacA eizneK";
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}



function testeReverseString2() {
    let result =reverseString("mateus");
    let expected = "suetam";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }
 

function reverseString(str) {
    let result = '';
    for (var i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result
}
testeReverseString1();
testeReverseString2();
 
 




/*
2.Escreva duas funções de teste unitário chamadas testReverseSentence1 e testReverseSentence2. Em seguida, escreva uma função chamada reverseSentence que inverte uma frase.Ex:

"bob likes dogs" retorna "dogs likes bob".
*/

function testReverseSenttence1(){
    let result = reverseSentence("bob likes dogs")
    let expected = "dogs likes bob";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}





function testReverseSenttence2(){
    let result = reverseSentence("roma me tem amor");
    let expected = "amor tem me roma";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}



function reverseSentence(str)
{
    let arrReverso = str.split(" ").reverse().join(" ")
    return arrReverso;
};

testReverseSenttence1();
testReverseSenttence2();



/*
3.Escreva duas funções de teste unitário chamadas testMinimumValue1 e testMinimumValue2. Em seguida, escreva uma função chamada minimumValue que encontra o valor mínimo de um array.
*/
function testMinimumValue1() {
    let result = minimumValue([1, 2, 3]);
    let expected = 1;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }


 function testMinimumValue2() {
    let result = minimumValue([5, 6, 79, 45, 2, 34]);
    let expected = 2;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

function minimumValue(arr){
    let minimo = arr[0];
    for (let i = 0; i < arr.length; i ++){
        if (arr[i] < minimo){
            minimo = arr[i]
        }
    }

    return minimo
}


testMinimumValue1();
testMinimumValue2();




/*
4.Escreva duas funções de teste unitário chamadas testMaximumValue1 e testMaximumValue2. Em seguida, escreva uma função chamada maximumValue que encontra o valor máximo de um array.
*/
function testMaximumValue1() {
    let result = maximumValue([1, 2, 3]);
    let expected = 3;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

 function testMaximumValue2() {
    let result = maximumValue([5, 6, 79, 45, 2, 34]);
    let expected = 79;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

function maximumValue(arr){
    let max = arr[0];
    for (let i = 0; i < arr.length; i ++){
        if (arr[i] > max){
            max = arr[i]
        }
    }

    return max
}

testMaximumValue1();
testMaximumValue2();



/*
5.Escreva duas funções de teste unitário chamadas testCalculateRemainder1 e testCalculateRemainder2. Em seguida, escreva uma função chamada calculateRemainder que calcula o resto de uma determinada divisão.
*/
function testCalculateRemainder1() {
    let result = calculateRemainder(10, 3);
    let expected = 1;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

 function testCalculateRemainder2() {
    let result = calculateRemainder(11, 3);
    let expected = 2;
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }



function calculateRemainder(a, b){
    if (a != 0 && b !=0){
        res = a % b 
    }
   return res
}

testCalculateRemainder1();
testCalculateRemainder2();




/*
6.Escreva duas funções de teste unitário chamadas testDistinctValues1 e testDistinctValues2. Em seguida, escreva uma função chamada distinctValues que retorna valores distintos de uma lista. Ex:

"1 3 5 3 7 3 1 1 5" retorna "1 3 5 7"
*/
function testDistinctValues1 () {
    let result = distinctValues("1 3 5 3 7 3 1 1 5");
    let expected = "1 3 5 7";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }



 function testDistinctValues2 () {
    let result = distinctValues("a b c d e f a g h i j c d e l m m n o p p p q q i a a a u v x z x s s");
    let expected = "a b c d e f g h i j l m n o p q u v x z s";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }


function distinctValues(list){
    let arrList = list.split(" ");
    let distc = arrList.reduce(
        (acc, el) => acc.concat(acc.includes(el) ? [] : [el]), []);

    let res = distc.join(" ");

    return res;

}

testDistinctValues1()
testDistinctValues2()



/*
7.Escreva duas funções de teste unitário chamadas testCountValues1 e testCountValues2. Em seguida, escreva uma função chamada countValues que retorna os valores de uma lista e suas ocorrências.Ex:

"1 3 5 3 7 3 1 1 5" retorna "1(3) 3(3) 5(2) 7(1)" que é a quantidade de vezes que os números apareceram na primeira lista.
*/
function testCountValues1() {
    let result = countValues("1 3 5 3 7 3 1 1 5");
    let expected = "";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }


 function countValues(list){
    let arr = list.split(" ");
    let quantidade = arr.reduce(function (todosNumeros, num){
        if (num in todosNumeros){
            todosNumeros[num]++;
        }
        else {
            todosNumeros[num] = 1;
        }
        return todosNumeros
    }, {});


    return console.log(quantidade)


}
console.log(countValues("1 3 5 3 7 3 1 1 5"))
testCountValues1()





/*
8.Escreva duas funções de teste unitário chamadas testEvaluateExpression1 e testEvaluateExpression2. Em seguida, escreva uma função chamada evaluateExpression que receberá dois parâmetros:

Uma string: Com uma expressão a ser avaliada. Ex: "a + b + c - d";

Um objeto: Com valores que substituira as incógnitas da expressão. Ex: {a: 1, b: 7, c: 3, d: 14}.

O resultado esperado da função evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14}) seria -3.

Por exemplo, um teste unitário para o 8º kata poderia se parecer com isso:
*/

function testEvaluateExpression1() {
   let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
   let expected = -3
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}



function evaluateExpression (str, obj){

}