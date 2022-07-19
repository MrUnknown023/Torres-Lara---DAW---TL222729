//Definicion de variables
var num;
var cantCifras; 
var cantCifIm = 0, cantCifPar = 0;
var sumaImp = 0, sumPar = 0, sumTot = 0;
var cifraM, cifraM;
var flag = false;
var k=0;

//Ingreso de datos
num = prompt("Digite un numero entero:","");

//Validacion para cantidad de cifras totales
do{
    if(isNaN(num)){
        alert("ERROR.El dato ingresado no es un número....");
    }else if(!(num)){
        alert("ERROR.Campo vacio...");
    }else if(num > 0){
        cantCifras = num.length;
        document.write("<h3>La cantidad de cifras ingresadas es: " + cantCifras + "</h3>");
        
        for(k = num; k > 0; k--){
            sumTot += k * 1;
            if(k % 2 == 0){
                cantCifPar++;
                sumPar += k * 1;
            }else{
                cantCifIm++;
                sumaImp += k * 1;
            }
        }
    
        document.write("<h1> Cantidad de cifras impares: "+cantCifIm+"</h1>");
        document.write("<h1> Cantidad de cifras pares: "+cantCifPar+"</h1>");
        document.write("<h1> La suma de cifras impares: "+sumaImp+"</h1>");
        document.write("<h1> La suma de cifras pares: "+sumPar+"</h1>");
        document.write("<h1> La suma de todas las cifras: "+sumTot+"</h1>");
        flag = true;
    }
}while(flag = false);
/*k = num;

    if(k % 2 == 0){
        cantCifPar++;
        sumPar += k;
    }else{
        cantCifIm++;
        sumaImp += k;
    }   
    
    sumTot = 0;

    document.write("<h1> Cantidad de cifras pares: " + cantCifPar + "</h1>");
    document.write("<h1> Cantidad de cifras impares: " + cantCifIm + "</h1>");*/


    


