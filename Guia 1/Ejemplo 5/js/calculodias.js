/* * * * * * * * * * * * * * * * * * * * * * * * * * *
* Materia: Desarrollo de Aplicaciones Web con *
* Software Interpretado en el Cliente *
* Archivo: calculodias.js *
* Uso: Calcular el número de días transcurridos *
* desde la fecha de nacimiento hasta la *
* fecha actual del calendario. *
* * * * * * * * * * * * * * * * * * * * * * * * * * */
var mes = prompt("Ingrese el mes: ", "");
var year = prompt("Ingrese el año: ", "");
var diasdelmes;
var bisiesto = false;

if(year%4 == 0 && (year%100 != 0 || year%400 == 0)){
 bisiesto = true;
}

switch(mes){
    case "Enero":
        diasdelmes = 31;
    break;
    
    case "enero":
        diasdelmes = 31;
    break;

    case "Marzo":
        diasdelmes = 31;
    break;

    case "marzo":
        diasdelmes = 31;
    break;

    case "Mayo":
        diasdelmes = 31;
    break;

    case "mayo":
        diasdelmes = 31;
    break;

    case "Julio":
        diasdelmes = 31;
    break;

    case "julio":
        diasdelmes = 31;
    break;
        
    case "Agosto":
        diasdelmes = 31;
    break;

    case "agosto":
        diasdelmes = 31;
    break;

    case "Octubre":
        diasdelmes = 31;
    break;

    case "octubre":
        diasdelmes = 31;
    break;

    case "Diciembre":
        diasdelmes = 31;
    break;

    case "diciembre":
        diasdelmes = 31;
    break;
    case "Abril":
        diasdelmes = 30;
    break;

    case "abril":
        diasdelmes = 30;
    break;
    
    case "Junio":
        diasdelmes = 30;
    break;

    case "junio":
        diasdelmes = 30;
    break;

    case "Septiembre":
        diasdelmes = 30;
    break;

    case "septiembre":
        diasdelmes = 30;
    break;

    case "Noviembre":
        diasdelmes = 30;
    break;

    case "noviembre":
        diasdelmes = 30;
    break;

    case "Febrero":
        if(!bisiesto)
            diasdelmes = 28;
        else
            diasdelmes = 29;
    break;

    case "febrero":

        if(!bisiesto)
            diasdelmes = 28;
        else
            diasdelmes = 29;
    break;

    default:
        alert("El mes " + mes + " no existe");
        mes = "No existe";
        diasdelmes = 0;
    }

    if(bisiesto == true){
        var msg = "El año " + year + " es bisiesto.<br />El mes de " + mes + " tiene " + diasdelmes + " días.";
    }else{
        var msg = "El año " + year + " no es bisiesto.<br />El mes de " + mes + " tiene " + diasdelmes + " días.";
    }
//Variable para hacer referencia al elemento DIV 
//donde se mostrará el número de años, meses y días
//que ha vivido la persona
var dias = document.getElementById('info');
dias.innerHTML = '<h3>' + msg + '</h3>';
