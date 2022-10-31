const myGlobal = 0;

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);

    function parent() {
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child() {
            console.log(inner, myNumber, myGlobal);
        }

        return child();
    }
    return parent();
}

myFunction();


function sumWithClosure(firstNum) {
    function anidado(secondNum) {
        if (secondNum) {
            return secondNum + firstNum;
        }
        return firstNum;
    }
    return anidado;
}
sumWithClosure(2)(3);


function sumWithClosure(firstNum) {
    return function (secondNum) {
        if (secondNum) {
            return secondNum + firstNum;
        }
        return firstNum;
    };
}