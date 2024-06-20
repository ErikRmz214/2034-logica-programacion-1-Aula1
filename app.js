let numeroSecreto = 6;
let numeroUsuario = prompt("Piensa en un número entre 1 y 10, y escribelo porfavor: ");

console.log(numeroUsuario);

if(numeroUsuario == numeroSecreto){
    alert('Acertaste el número!');
}
else{
    alert('Lo siento no acertaste el número')
}