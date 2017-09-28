function fancyArr(arr, sym) {

    for (var i = 0; i < arr.length; i ++) {
        console.log(i + " " + sym + " " + arr[i]);
    }
}

var arrayTest = ["Jane", "Joe", "Bob"];
fancyArr(arrayTest, "->");
