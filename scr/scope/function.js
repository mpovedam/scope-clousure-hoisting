// Todas y cada una de las funciones que hagamos en nuestra logica van a tener su propio alcance y las variables
// declaradas dentro de esta función van a ser accesibles dentro de esta función y sus funciones anidadas.

function greeting()
{
    let userName = 'Ana';
    console.log(userName);

    if(userName === 'Ana') // Valido que sea igual en valor y tipo
    {
        console.log(`Hello ${userName}!`);
    }
}

greeting();
console.log(userName);