const add = (num1, num2) => {
    return num1 + num2
}


let myArray = ["Dan", "Stuart", "Ben"]


let notZero = (num1,num2) => {
    return num1*num2
}


/*const moreThanSix = (myArray) => {
    let newArray = []
    for (let i =0; i < myArray.length; i++){

        if (myArray[i].length > 6) {
            newArray.push(myArray[i])
        }
    }
    return newArray
}
*/

//cleaner way code using filter command

const moreThanSix = (myArray) => {
    return myArray.filter((anArrayIem) => anArrayIem.length > 6)
}



const truthy = () => {
    if(value === 5) {
       return toBeTruthy
    }
}

module.exports = {
    add,
    myArray,
    notZero,
    truthy,
    moreThanSix
}