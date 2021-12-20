/* let numbers = numero
let store = ""
function displayNumb(numero){
store += document.getElementById("textBox").innerHTML = numero
document.getElementById("textBox").innerHTML = store
if(numero == minus){console.log("-")}
}

function erase(numero){
    document.getElementById("textBox").innerHTML = 0

}*/
//let valores = ""
/*function displayNumb(numero){
    valores += numero
    document.getElementById("textBox").innerHTML = valores
    if(numero == "-"|| numero ==  "+" || numero == "*" || numero == "/" ){
        document.getElementById("textBox").innerHTML = valores + numero
     }else{ document.getElementById("textBox").innerHTML = valores}
}*/
/*let operador = ""
function displayNumb(numero){
    valores += numero
for(i=0; i <= valores.length; i++){
    if(valores * 1 > valores.length){console.log(valores);}
    else if(numero == "-"|| numero ==  "+" || numero == "*" || numero == "/" ){
console.log(valores) 
console.log(operador = numero) 
    }



}}*/
//how can i store the value this is the closest one 
/*value1 = ""
function displayNumb(numero){
    if(numero !== "-" && numero !==  "+" && numero !== "*" && numero !== "/" ){
    value1+= numero
    console.log(eval(value1))
}else if(numero == "-"|| numero ==  "+" || numero == "*" || numero == "/" ){
value1 + numero 
}
}

console.log(eval("5+5"))*/
/*
let inicialValue = 0
let firstValue = ""
let secondValue = ""
let display = document.getElementById("textBox").innerHTML = inicialValue;
function displayNumb(input){
let arguLen = input[input.length]
if(arguLen == "-" ||arguLen == "+"||arguLen == "/" ||arguLen == "*" ){ secondValue += input  
}// make work else if(input == "del" && firstValue == ""){console.log("works")}
else if(input == "del"){display = document.getElementById("textBox").innerHTML = 0; firstValue = "" ; secondValue = "";display = document.getElementById("textResult").innerHTML = 0}

else if(input == "equal"){
    display = document.getElementById("textBox").innerHTML = 0 ;
    display = document.getElementById("textResult").innerHTML = (eval(firstValue))

    return firstValue ="" 
}

else{firstValue+= input;console.log(firstValue,secondValue);display = document.getElementById("textBox").innerHTML = firstValue;}
  
} */
/*
let inicialValue = ""
let firstValue = ""
let display = document.getElementById("textBox").innerHTML = inicialValue;
function displayNumb(input){
let arguLen = input[input.length]
if(arguLen !== ){  console.log("works")
}else if(input == "equal" && firstValue < 1){
    display = document.getElementById("textResult").innerHTML = 0
}else if(input == "del"){
    display = document.getElementById("textResult").innerHTML = 0; firstValue = "" 
    display = document.getElementById("textBox").innerHTML = 0; firstValue = "" ;
}else if(input == "equal"){
    display = document.getElementById("textBox").innerHTML = 0 ;
    display = document.getElementById("textResult").innerHTML = (eval(firstValue))
    return firstValue ="" 
}


else{firstValue+= input;display = document.getElementById("textBox").innerHTML = firstValue;}
}
*/
let inicialValue = 0
let firstValue = ""
let display = document.getElementById("textBox").innerHTML = inicialValue;
function displayNumb(input){
let arguLen = input[input.length]
if(input[0] == "0"){  console.log("yes")
}else if(input == "equal" && firstValue < 1){
    display = document.getElementById("textResult").innerHTML = 0
}else if(input == "del"){
    display = document.getElementById("textResult").innerHTML = 0; firstValue = "" 
    display = document.getElementById("textBox").innerHTML = "0"; firstValue = "" ;
}else if(input == "equal"){
    display = document.getElementById("textBox").innerHTML = 0 ;
    display = document.getElementById("textResult").innerHTML = (eval(firstValue))
    return firstValue =eval(firstValue)
}


else{firstValue+= input;display = document.getElementById("textBox").innerHTML = firstValue;}
}