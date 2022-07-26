//DEFINICION DE VARIABLES GLOBALES
var a;
var b;
var operacion;


function init(){
    //DEFINICION DE VARIABLES DE FUNCION
    //VARIABLES DE OPERACION
    var result = document.getElementById("resultado");
    var reset = document.getElementById("reset");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multi = document.getElementById("multi");
    var division = document.getElementById("division");
    var residuo = document.getElementById("residuo");
    var cuadrado = document.getElementById("cuadrado");
    var raiz = document.getElementById("raiz");
    var inversa = document.getElementById("inversa");

    //VARIABLES NUMERICAS
    var nueve = document.getElementById("nueve");
    var ocho = document.getElementById("ocho");
    var siete = document.getElementById("siete");
    var seis = document.getElementById("seis");
    var cinco = document.getElementById("cinco");
    var cuatro = document.getElementById("cuatro");
    var tres = document.getElementById("tres");
    var dos = document.getElementById("dos");
    var uno = document.getElementById("uno");
    var cero = document.getElementById("cero");
    var punto = document.getElementById("punto");

    //EVENTOS NUMERICOS
    uno.onclick = function(){
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(){
        result.textContent = result.textContent + "2";
    }
    tres.onclick = function(){
        result.textContent = result.textContent + "3";
    }
    cuatro.onclick = function(){
        result.textContent = result.textContent + "4";
    }
    cinco.onclick = function(){
        result.textContent = result.textContent + "5";
    }
    seis.onclick = function(){
        result.textContent = result.textContent + "6";
    }
    siete.onclick = function(){
        result.textContent = result.textContent + "7";
    }
    ocho.onclick = function(){
        result.textContent = result.textContent + "8";
    }
    nueve.onclick = function(){
        result.textContent = result.textContent + "9";
    }
    cero.onclick = function(){
        result.textContent = result.textContent + "0";
    }
    punto.onclick = function(){
        result.textContent = result.textContent + ".";
    }

    //EVENTOS OPERACIONALES
    reset.onclick = function(){
        res();
    }
    suma.onclick = function(){
        a = resultado.textContent;
        operacion = "+";
        clear();
    }
    resta.onclick = function(){
        a = resultado.textContent;
        operacion = "-";
        clear();
    }
    multi.onclick = function(){
        a = resultado.textContent;
        operacion = "*";
        clear();
    }
    division.onclick = function(){
        a = resultado.textContent;
        operacion = "/";
        clear();
    }
    residuo.onclick = function(){
        a = resultado.textContent;
        operacion = "%";
        clear();
    }
    cuadrado.onclick = function(){
        a = resultado.textContent;
        operacion = "x²";
        clear();
    }
    raiz.onclick = function(){
        a = resultado.textContent;
        operacion = "²√";
        clear();
    }
    inversa.onclick = function(){
        a = resultado.textContent;
        operacion = "1/A";
        clear();
    }
    igual.onclick = function(){
        b = resultado.textContent;
        calculo();
    }
}

//FUNCION PARA LIMPIAR AL PRESIONAR UN OPERADOR
function clear(){
    resultado.textContent = "";
}

//FUNCION PARA HACER UN RESET
function res(){
    resultado.textContent = "";
    a = 0;
    b = 0;
    operacion = "";
}

//FUNCION PARA EL CALCULO DE TODAS LAS OPERACIONES
function calculo(){
    var respuesta = 0;
    switch(operacion){
        case "+":
            respuesta = parseFloat(a) + parseFloat(b); 
        break;

        case "-":
            respuesta = parseFloat(a) - parseFloat(b); 
        break;
            
        case "*":
            respuesta = parseFloat(a) * parseFloat(b); 
        break;

        case "/":
            respuesta = parseFloat(a) / parseFloat(b); 
        break;
        
        case "%":
            respuesta = parseFloat(a) % parseFloat(b); 
        break;

        case "x²":
            respuesta = Math.pow(parseFloat(a), 2); 
        break;

        case "²√":
            respuesta = Math.sqrt(parseFloat(a));
        break;

        case "1/A":
            respuesta = (parseFloat(a) * 1) / parseFloat(a) + "/" + a;
        break;
    }
    res();
    resultado.textContent = respuesta;
}