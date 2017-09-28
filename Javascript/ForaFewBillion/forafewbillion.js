function doubleAmtOverXDays(numDays) {
    var money = 0.01;
    for (var i = 2; i <= numDays; i++) {
        money = money * 2;
    }
    return money;
}

function daysUntilXDollars(amount) {
    var money = 0.01;
    var days = 1;
    while (money < amount) {
        days++;
        money = money * 2;
    }
    return days;
}

function daysUntilInfiniteMoney() {
    var money = 0.01;
    var days = 1;
    while (money != Infinity) {
        days++;
        money = money * 2;
    }
    return days;
}

console.log("Amount of money after 30 days: $" + doubleAmtOverXDays(30));
console.log("Days until at $10,000: " + daysUntilXDollars(10000));
console.log("Days until $1,000,000,000: " + daysUntilXDollars(1000000000));
console.log("Days until infinite money: " + daysUntilInfiniteMoney());
