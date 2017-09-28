function numbersOnly(arr) {
    var finalArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            finalArr.push(arr[i]);
        }
    }
    return finalArr;
}

var test = numbersOnly([1,4,5,"glog", true, 18]);
console.log(test);
