let diaDeLaSemana = prompt('¿Qué día de la semana es hoy?');
if(diaDeLaSemana === 'Sabado'|| diaDeLaSemana === 'sabado'|| diaDeLaSemana === 'Domingo'|| diaDeLaSemana === 'domingo'){
    alert( '¡Buen fin de semana!')
} else { 
    alert('¡Buena semana!')
}
    
 

let numero= prompt('Ingresa un número entre el -∞ e ∞ .');
if(numero >0 ){
    alert('El número que elegiste es positivo.')
} else if(numero <0) {
    alert(' El número que elegiste es negativo.')
} else {
    alert('El número que elegiste es cero.');
}

let puntuacion= 35;
if(puntuacion>= 100){
    alert('¡Felicidades, has ganado!');
} else {
    alert('Intenta nuevamente para ganar');

}


let saldoDeCuenta = ('$550 pesos'); //Elemplo de saldo
alert (`El saldo de su cuenta es: ${saldoDeCuenta}`);

let nombreDeUsuario = prompt('Ingresa tu nombre, por favor');
alert (`¡Te damos la bienvenida: ${nombreDeUsuario}`);
