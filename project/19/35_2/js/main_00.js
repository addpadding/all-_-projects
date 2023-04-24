// بدون كومنتات

function reverseArray(arr=[20, 10, 50, 60]) {
    var outputArray = []
    for (element of arr) {
        outputArray.unshift(element)
    }
    return outputArray
}
var myArray = ["hello", "hi", true, false, 20, 50]
console.log(myArray);
console.log(reverseArray(myArray));
console.log("the reverse is " + reverseArray(myArray));
var arr2 = [10, 20, 30]
console.log("the 222 reverse is " + reverseArray(arr2));
