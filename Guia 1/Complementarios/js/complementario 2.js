var celsius = prompt('Ingrese la temperatura en celsius: ', '');
var far = celsius * 1.8 + 32;

var msg = "La temperatura en grados Fahrenheit es: " + far + " F";

var temp = document.getElementById('conver');
temp.innerHTML = '<h3>' + msg + '</h3>';