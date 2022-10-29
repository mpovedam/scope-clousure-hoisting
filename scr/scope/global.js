//Variables

var a;         //declarando
var b = 'b';   //Declarando y asignando
b = 'bb';      //Reasignando
var a = 'aa';  //Redeclaración


// Global scope
    // Cualquier variable que se encuentran en el documento pasan a ser variables globales y se instacian dentro del objeto windows

var fruit = 'Apple'; // global

console.log(fruit);


function bestFruit()
{
    console.log(fruit);
}

bestFruit();

    // Ojo: Cuando no se declara una variable y simplemente la asignamos por defecto pasa a ser una variable global

    function countries()
    {
        country = 'Colombia'; //
        console.log('country');
    }

    countries();
    console.log(country);

      