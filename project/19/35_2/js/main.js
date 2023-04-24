function reverseArray(arr=[20, 10, 50, 60]) {
    //*

    //*
    var outputArray = []

    //*
    for (element of arr) {
        //*

        //*
        // console.log(element);

        //*
        // outputArray.push(element)

        //*
        outputArray.unshift(element)
    }

    //*
    // console.log(outputArray);

    //*
    return outputArray
}

//*
// reverseArray()

//*
// var reverseReturn = reverseArray()

//*
// console.log(reverseReturn);

//*
var myArray = ["hello", "hi", true, false, 20, 50]

//*
// var reverseReturn = reverseArray(myArray)

//*
console.log(myArray);

//*
// console.log(reverseReturn);

//*
console.log(reverseArray(myArray));

//*
console.log("the reverse is " + reverseArray(myArray));

//*
var arr2 = [10, 20, 30]

//*
console.log("the 222 reverse is " + reverseArray(arr2));