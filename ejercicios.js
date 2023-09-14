function EJ1(){
    const resultado = document.getElementById("resultado");
    const nombre = prompt("Ingrese su nombre");
    let edad = calculadoraEdad(prompt("Ingrese su fecha de nacimiento en YYYY-MM-DD"));
    resultado.innerHTML = `Hola, ${nombre}, tenes ${edad} años!!!`;
}

function EJ2(){
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = (tirandoFruta(prompt("Ingrese Una fruta")));
}

function EJ3(){
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = (10 == "10"); //true
    resultado.innerHTML = (10 === "10"); //false, cambia el tipo de dato
    resultado.innerHTML = (typeof 10.6); //number
    resultado.innerHTML = (1 === true); //false 
}

function EJ4(){
    const ciudad = new Object();
    ciudad.nombre = prompt("Ingrese el nombre de la ciudad");
    ciudad.fecha = new Date(prompt("Ingrese la fecha de creacion"));
    ciudad.nombre = prompt("Ingrese la poblacion de la ciudad");
    ciudad.extension = prompt("Ingrese el area de la ciudad");

    let texto = "";
    const resultado = document.getElementById("resultado");
    for(const propiedad in ciudad){
        texto += `${propiedad} : ${ciudad[propiedad]}`;
    }
    resultado.innerHTML = texto;
}

function EJ5(){
    const resultadox = document.getElementById("resultado");
    const numeros = [1,2,3,4,5]
    const resultado = numeros.map(numero => numero * 2);
    resultadox.innerHTML = resultado;
}
function EJ6(numPisos){
    for (let i = 0; i < numPisos; i++) {
        let piso = '';
        for (let j = 0; j < i + 1; j++) {
            piso = piso + '*';
        }
        console.log(piso)
    }
}
function EJ6B(numPisos){
    for(let i = 0; i < numPisos; i++){
        for(let n = numPisos-1-i; n>0; n--){
            console.log("-");
        }
        for(let n = 0; n<i+1; n++){
            console.log("*");
        }
        for(let n = numPisos-1-i; n>0; n--){
            console.log("-");
        }
    }
}
function EJ7(){
    const resultadox = document.getElementById("resultado");
    const nombres = prompt("Ingrese nombres separados por una coma");
    let arrayNombres = nombres.split(",");
    const resultado = arrayNombres.filter(nombre => nombre.startsWith("A"));
    resultadox.innerHTML = resultado;
}
function EJ8(){
    const resultado = document.getElementById("resultado");
    const cadena = prompt("Ingrese una cadena de texto");
    const remplazar = prompt("Ingrese palabra para remplazar");
    const remplaza = prompt("Ingrese la palabra que remplaza");
    resultado.innerHTML = cadena.replace(remplazar,remplaza);
}
function EJ9(){
    const resultado = document.getElementById("resultado");
    const cadena = prompt("Ingrese una cadena de texto");
    const num = prompt("Ingrese cuantas letras quiere ver");
    resultado.innerHTML = cadena.slice(0,num);
}
function EJ10(){
    const resultado = document.getElementById("resultado");
    const cadena = prompt("Ingrese palaras separadas por coma");
    resultado.innerHTML = cadena.replaceAll(","," - ");
}
function EJ11(){
    const list = prompt("Ingresar los objetvos y su precio como en este ejemplo : Pizza:15.50, Hamburguesa:8.75, Bebidas:4.25")
    const objetos = list.split(",");
    let resultado = 0;
    for(let i = 0; i < objetos.length; i++){
        const objeto = objetos[i].trim().split(":");
        let sum = parseFloat(objetos[1]);
        resultado += sum;
    }
    const resultadox = document.getElementById("resultado");
    resultadox.innerHTML = cadena.replaceAll(","," - ");
}