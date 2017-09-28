var daysUntilMyBday = 60;

function birthdayCountdown() {
    var message;
    while (daysUntilMyBday > 5) {
        if (daysUntilMyBday > 30) {
            message = "Such a long time... :(";
        } else {
            message = "We're getting close!";
        }
        console.log(daysUntilMyBday + " days until my birthday. " + message);
        daysUntilMyBday--;
    }

    while (daysUntilMyBday > 0) {
        if (daysUntilMyBday === 1) {
            message = " DAY UNTIL MY BIRTHDAY!!!";
        } else {
            message = " DAYS UNTIL MY BIRTHDAY!"
        }
        console.log(daysUntilMyBday + message);
        daysUntilMyBday--;
    }

    console.log("HAPPY BIRTHDAY TO ME!");
}

birthdayCountdown();
