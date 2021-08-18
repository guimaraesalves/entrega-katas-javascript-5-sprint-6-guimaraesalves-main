// implemente aqui as funções de teste



/* 1.Escreva duas funções de teste unitário chamadas testReverseString1 e testReverseString2. Em seguida, escreva uma função chamada reverseString que inverte uma string.

Por exemplo, um teste para o 1° Kata poderia se parecer com isso:
*/







function testeReverseString1() {
   let result = reverseString("Kenzie Academy");
   let expected = "ymedacA eizneK";
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
testeReverseString1()


function testeReverseString2(str) {
    let result = str.split(" ");;
    let expected = " ";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }
 testeReverseString2("Kenzie Academy")


function testeReverseString3(str) {
    let result = '';
    for (var i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    let expected = "ymedacA eizneK";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }
 testeReverseString3("Kenzie Academy")


 function reverseString(str) {
    let result = '';
    for (var i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result
}
reverseString("Kenzie Academy")
 
 




/*
2.Escreva duas funções de teste unitário chamadas testReverseSentence1 e testReverseSentence2. Em seguida, escreva uma função chamada reverseSentence que inverte uma frase.Ex:

"bob likes dogs" retorna "dogs likes bob".
*/

function testReverseSenttence1(arr){
    let result = arr.split("")
    let expected = ["dogs", "likes", "bob"].
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}





function testReverseSenttence2(arr){
    let result = arr.split("").reverse().join("")
    let expected = "dogs likes bob".
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}



function reverseSentence(str)
{
    let arrReverso = str.split(" ").reverse().join(" ")
    return console.log(arrReverso);
}

reverseSentence("dogs likes bob");



/*
3.Escreva duas funções de teste unitário chamadas testMinimumValue1 e testMinimumValue2. Em seguida, escreva uma função chamada minimumValue que encontra o valor mínimo de um array.
*/
function testMinimumValue1() {
    let result = minimumValue("");
    let expected = "";
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

console.log(minimumValue([5, 6, 93, 289, 4, 78, 23, 6, 5, 13, 9, 8]))





/*
4.Escreva duas funções de teste unitário chamadas testMaximumValue1 e testMaximumValue2. Em seguida, escreva uma função chamada maximumValue que encontra o valor máximo de um array.
*/
function testMaximumValue1() {
    let result = maximumValue("289");
    let expected = "";
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

console.log(maximumValue([5, 6, 93, 289, 4, 78, 23, 6, 5, 13, 9, 8]))


/*
5.Escreva duas funções de teste unitário chamadas testCalculateRemainder1 e testCalculateRemainder2. Em seguida, escreva uma função chamada calculateRemainder que calcula o resto de uma determinada divisão.
*/
function testCalculateRemainder1() {
    let result = rcalculateRemainder(a, b);
    let expected = "";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }
function calculateRemainder(a, b){
    if (a != 0 && b !=0){
        res = a % b 
    }
   return res
}

console.log(calculateRemainder(10, 5))



/*
6.Escreva duas funções de teste unitário chamadas testDistinctValues1 e testDistinctValues2. Em seguida, escreva uma função chamada distinctValues que retorna valores distintos de uma lista. Ex:

"1 3 5 3 7 3 1 1 5" retorna "1 3 5 7"
*/
function testDistinctValues1 () {
    let result = distinctValues("");
    let expected = "";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }
function distinctValues(list){
    let arrList = list.split(" ");
    let arrDist = []
    

    for (let i = 0; i < arrList.length; i ++){
        if(arrList.indexOf(arrList[i]) === -1){
            arrDist.push(arrList[i])
        }
    }

    return arrDist
}


console.log(distinctValues("1 3 5 3 7 3 1 1 5"))



/*
7.Escreva duas funções de teste unitário chamadas testCountValues1 e testCountValues2. Em seguida, escreva uma função chamada countValues que retorna os valores de uma lista e suas ocorrências.Ex:

"1 3 5 3 7 3 1 1 5" retorna "1(3) 3(3) 5(2) 7(1)" que é a quantidade de vezes que os números apareceram na primeira lista.
*/
function testCountValues1() {
    let result = countValues("");
    let expected = "";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }
function countValues(){


}


/*
8.Escreva duas funções de teste unitário chamadas testEvaluateExpression1 e testEvaluateExpression2. Em seguida, escreva uma função chamada evaluateExpression que receberá dois parâmetros:

Uma string: Com uma expressão a ser avaliada. Ex: "a + b + c - d";

Um objeto: Com valores que substituira as incógnitas da expressão. Ex: {a: 1, b: 7, c: 3, d: 14}.

O resultado esperado da função evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14}) seria -3.

Por exemplo, um teste unitário para o 8º kata poderia se parecer com isso:

function testEvaluateExpression1() {
   let result = evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14});
   let expected = -3
   console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
}
*/

function testEvaluateExpression1() {
    let result = revaluateExpression ("");
    let expected = "";
    console.assert(result === expected, `esperado: ${expected}, obtido: ${result}`)
 }

function evaluateExpression (str, obj){

}