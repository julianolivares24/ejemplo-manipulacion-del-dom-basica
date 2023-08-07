function sumarInputValues(event){
    //console.log("escuchando radio 1 conmigo");
    //console.log(input1.value + input2.value);
    //let valorN1= parseInt(input1);
    //let valorN2= parseInt(input2);
    //let suma = valorN1 + valorN2;
    //console.log(suma);
    console.log({event});
    event.preventDefault();//funcion para que por defecto no se recargue la pagina 
    const sumaInputs = input1.value + input2.value;
    resultado.innerHTML="Resultado: " + sumaInputs;
}

//function resultadoboton1(){
    //resultado = (input1.value + input2.value);
//}