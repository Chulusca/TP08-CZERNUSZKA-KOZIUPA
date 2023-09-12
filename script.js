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
    resultado.innerHTML = (10 === "10");
    

}