//Definicion de variables
var num;
var cantCifras; 
var cantCifIm = 0, cantCifPar = 0;
var sumaImp = 0, sumPar = 0, sumTot = 0;
var cifraM, cifraM;

//Ingreso de datos
num = prompt("Digite un numero entero:","");

//Validacion para cantidad de cifras totales
if(isNaN(num)){
    alert("ERROR.El dato ingresado no es un número....");
}else if(!(num)){
    alert("ERROR.Campo vacio...");
}else if(num > 0){
    cantCifras = num.length;
    document.write("<h3>La cantidad de cifras ingresadas es: " + cantCifras + "</h3>");
}



    


