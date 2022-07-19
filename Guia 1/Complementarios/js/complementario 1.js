function init() {
    //Ingresar los datos de los números a operar
    var op1 = prompt('Digite la medida en metros:','');

    //constantes de conversion
    const yar = 1.094;
    const pul = 39.37;
    const pies = 3.281;


    //Elemento div donde se mostrará el menú de las operaciones
    var operaciones = document.getElementById('operaciones');

    //Elemento div donde se mostrarán los resultados
    var resultado = document.getElementById('resultado');

    //Creando el contenido de la página
    var contenido = "<header>\n";
    contenido += "\t<h1></h1>\n";
    contenido += "</header>\n";
    contenido += "<nav class='menu'>\n";
    contenido += "<ul>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Pies</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Pulgadas</span></a>\n";
    contenido += "</li>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t<a href=\"javascript:void(0)\"><span>Yardas</span></a>\n";
    contenido += "</li>\n";
    contenido += "</ul>\n";
    contenido += "</nav>\n";

    //Colocar el contenido dentro del elemento div
    operaciones.innerHTML = contenido;

    //Preparando el manejo del evento click sobre los enlaces del menú
    var opciones = document.getElementsByTagName('a');

    //Recorrer todos los elementos de enlace (elementos a)
    //y asignar el manejador del evento click
    for(var i=0; i<opciones.length; i++){
        switch(i){
            case 0:
                //Función metros a pies
                opciones[i].onclick = function(){
                    resultado.innerHTML = "<p class=\"letterpress\">" +  (parseFloat(op1)) + " m  = " + op1*pies + " pies</p>\n";
                }
            break;

            case 1:
                //Función metros a pulgadas
                opciones[i].onclick = function(){
                    resultado.innerHTML = "<p class=\"letterpress\">" +  (parseFloat(op1)) + " m  = " + op1*pul + " pulgadas</p>\n";
                }
            break;

            case 2:
                //Función metros a yardas
                opciones[i].onclick = function(){
                    resultado.innerHTML = "<p class=\"letterpress\">" +  (parseFloat(op1)) + " m  = " + op1*yar + " yardas</p>\n";
                }
            break;
        }
    }
}
window.onload = init;