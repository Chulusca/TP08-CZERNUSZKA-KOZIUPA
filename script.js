function calculadoraEdad(){
    const resultado = document.getElementById("resultado");
    const fechaActual = new Date();

    const nombre = prompt("Ingrese su nombre");
    const fecha = prompt("Ingrese su fecha de nacimiento en YYYY-MM-DD");

    const fechaNacimiento = new Date(fecha);
    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    let mes = fechaActual.getMonth() - fechaNacimiento.getMonth();

    if(mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNacimiento.getDate())){
        edad --;
    }
    resultado.innerHTML = `Hola, ${nombre}, tenes ${edad} años!!!`;
}

function tirandoFruta(){
    const resultado = document.getElementById("resultado");
    const frutas = ["pera", "tomate", "manzana", "banana", "kiwi", "melon", "sandia", "papaya", "frutilla", "mango"]
    const frutaIngresada = prompt("Ingrese una fruta")
    
    if(frutas.includes(frutaIngresada.toLowerCase())){
       resultado.innerHTML = `Si, tenemos ${frutaIngresada}`; 
    }
    else{
        resultado.innerHTML = `No tenemos ${frutaIngresada}`;
    }
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
    let piso;
    let mitad;
    if(numPisos % 2 == 0){
        numPisos++;
    }
    for(let i  = 0; i < numPisos; i++){
        piso.push("-");
    }
    mitad = (numPisos / 2) - 0,5;

    for (let i = 0; i < numPisos; i++) {
        let piso = '';
        for (let j = 0; j < i + 1; j++) {
            piso = piso + '*';
        }
        console.log(piso)
    }
}
