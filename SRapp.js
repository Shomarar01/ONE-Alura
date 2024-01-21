let numeroSecreto = 1;
let numeroUsuario = prompt('Me indicas un número entre 1 y 10, por favor:');
console.log(numeroUsuario);

/*Este código realiza una comparación */
if (numeroUsuario == numeroSecreto){
    //Acertamos, fue verdadera la condición
 alert(`Correcto acertaste, el número es: ${numeroUsuario}`);
} else {
    //La condición no se cumplió
   alert('Lo siento, no acertaste el número');
}
console.log(numeroSecreto);
