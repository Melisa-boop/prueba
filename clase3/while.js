//recibe un array de numeros como parametro
//funcion que recorre el array e imprimir por consola cada uno de los numeros
// en caso de encontrar el numero 5 debe cortar la ejecucion e inpriir se encontro el 5
//utilizar do and while

let numeros = [1,2,3,4,5];
function encontreUn5(numeros){
    let acumula=0;  
        do{
           console.log("numero5? :" + numeros[acumula]);//imprimi cuanto vale en ese momento 
           acumula++;// en cada repeticion vamos a  incrementar de a 1 el valor que tenga asignada la variable acumula
        }while (acumula!=5);
        console.log("se encontro el numero5");
    }
encontreUn5 (numeros)