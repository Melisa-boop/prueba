//funcion - declaracion vs ejecucion
function logTitle(data){
    console.log(data);
}
//funcion nombrada
function elDoble(numero){
return numero * 2;
}
//lo guardo en una variable
let resultado = elDoble(123);
console.log(resultado);

//puedo hacer una variable con funcion anonima sin nombre
let elTriple = function(num){
    return num * 3;
}
let resultado1 = elTriple(333);
console.log(resultado1);

//funcion nombrada
//function log(data){
    //return data + 2;
//}
//let resultado2 = data(2);
//console.log(resultado2);

//funcion nos sirve para encapsular una logica
//tipos de datos (funciones, ciclos , arrays)
//console.log("x".repeat(10));

// solo apra poer titulo en la terminal

//function longTitle(data){
    //console.log(data);


//arrow function ( son anonimas siempre)
let elCuadruple = (num) => {
    return num *4//Arrow function //no escribo el function
}
let resultado3 = elCuadruple (222);
console.log(resultado3);

//callbacks//  cuando hago solo una cosa ( una sola ejecucuon) , se puede sacar las llaves y colocar la flechita
let sumar = (num1,num2) => num1 + num2;
console.log(sumar(10,20));

//callbacks//
let suma = (num1,num2) => num1 + num2;
let restar =(num1,num2) => num1 - num2;
let calculadora = (operacion,num1,num2)=> operacion(num1,num2);
console.log(calculadora(restar, 10,20));
console.log(calculadora(suma, 10,20));

//Map es un metodo del array---> aplicarle el callback a todos los elementos del array
// podemos transformar datos ( ej: pasar todos a mayusculas), los carateres de un array. 
//modifica arrays segun la necesidad que se tenga
//devuelve un nuevo array con elementso modificados por el callback
let unArray = ["hola","como estas"];
let unArrayMayusc = unArray.map;
    function(unElemento){
        return unElemento.toUpperCase()
    }
}

//Filter ( devuelve los elementos que cumplen la condicion del callback)
//filtra el array y devuelve  la condicion que se cumple
// recorre cada elemento del array y revisa si  cumple la condicion de la funcion
//siempre tengo qeu guardar en una variable

let unArrayFiltrado = unArray.filter(
    function(unElemento){
        console.log(unElemento);
    return unElemento.length > 10
    }
);
console.log(unArrayFiltrado);

//reduce ( reduce el array a un unico valor), recibe callbacks para que funcione
//toman un callback de referencia.
// el reduce tiene un acumulador, donde acumula el resultado que la funcion solicita que haga

let iniciales = unArray.reduce(
    function(acumulador,unElemento){ //me acumula
        return acumulador = acumulador + unElemento;

    }
)
console.log(iniciales);
let otroArray = [0,1,2,4];
let sumaDeArray = otroArray.reduce(
    (acumu,elemento)=>acum += elemento,0 //toma cada elemento del array y le pasa la funcion que le dije. La funcion, con el acumulador funciona.
);
console.log(sumaDeArray);

//forEach
//ejecuta lo que le digamos por cada elemento del Array
//recibe un callback
//por cada elemento lo que yo  quiero hacer con la funcion


//for each
//for in ( recorre objetos y no usa callbacks)
//for of ( recorre arrays y no usa callbacks)
