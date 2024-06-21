/*"Si siempre intentas ser normal, nunca descubrirás lo extraordinario que puedes llegar a ser." (Maya Angelou)*/

//variables
let numeroAzar = parseInt(prompt('Elige un rango de numeros para jugar: '));
let numeroSecreto = Math.floor(Math.random()*numeroAzar)+1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 3;

console.log('El número secreto elegido es: ', numeroSecreto);

//bucle while "Mientras"
while(numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Elige un numero entre 1 y ${numeroAzar}, y escribelo porfavor: `));
    console.log(typeof('numero del intento: ', numeroUsuario));

    //En esta parte del codigo se realiza la comparacion.

    if(numeroUsuario == numeroSecreto){
    /*Usa comilla invertida `` para la lectura de la variable y añadimos ${variable} para que sea leida */
        alert(`Acertaste, el numero es: ${numeroUsuario}, usted gano en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}!`);//${intentos == 1 ? 'intento' : 'intentos'} una forma de sintetizar el codigo, quitando variables
    } else if(numeroUsuario > numeroSecreto){
    alert('El numero es menor');
    } else if(numeroUsuario < numeroSecreto){
        alert('El numero es mayor');
    }
    //incremento de contador cuando no se acierta
    intentos++;

    if(intentos > maximosIntentos){
        alert(`Llegaste al número maximo de ${maximosIntentos} intentos.`);
        break;
    }
};
