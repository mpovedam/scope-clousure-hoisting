function moneyBox(coins) {
    let saveCoins = 0;
    saveCoins += coins;

    console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(5);


function moneyBox() {
    let saveCoins = 0;

    function countCoins(coins) {
        saveCoins += coins;

        console.log(`MoneyBox: $${saveCoins}`)
    }

    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAna = moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);


//En este desafío tendrás que crear un closure que nos permita almacenar datos de mascotas en cualquier momento.

//Los datos pueden venir de distintas maneras, pueden ser objetos, strings o arrays. En el primer llamado a la función nos servirá 
//para crear nuestra lista en un inicio mientras que los demás llamados nos ayudará a agregar elementos al final de la lista.

//Si en algún momento llamamos a la función sin pasarle ningún parámetro esta nos devolverá el array con los datos de todos las mascotas introducidas.

/* Input:

const myPetList = createPetList();

myPetList("michi");

myPetList("firulais");

myPetList();

Output:

["michi", "firulais"] */


function createPetList()
{
    const petList = [];

    return function(pet) 
    {
        if(pet){
            petList.push(pet);
            return petList;
        }
        return petList;
    }
}

const myPetList = createPetList();
myPetList("michi");
myPetList("firulais");
myPetList();


export function createPetList() {
    const petList = []
    return function(pet){
        if(pet){
          petList.push(pet)
          return petList
        }
        return petList
    }
  }