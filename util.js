function calculadoraEdad(fecha){
    const fechaActual = new Date();
    const fechaNacimiento = new Date(fecha);
    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    let mes = fechaActual.getMonth() - fechaNacimiento.getMonth();

    if(mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNacimiento.getDate())){
        edad --;
    }
    return edad;
}
function tirandoFruta(fruta){
    const frutas = ["pera", "tomate", "manzana", "banana", "kiwi", "melon", "sandia", "papaya", "frutilla", "mango"]

    if(frutas.includes(fruta.toLowerCase())){
       return `Si, tenemos ${fruta}`; 
    }
    else{
        return `No tenemos ${fruta}`;
    }
}