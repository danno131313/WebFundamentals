var quarters;

$(document).ready(function(){
    $('button').click(function() {
        quarters = $('input')[0].value;
        slots(quarters);
    });
});

function slots(quarters) {
    if (quarters > 0) {
        quarters--; // spend a quarter to play
        $('input')[0].value = quarters;
        if (Math.floor(Math.random() * 100) === 0) { // 1/100 chance to win
            var winnings = Math.floor(Math.random() * 51) + 50; // generate random winnings
            quarters += winnings;
            $('input')[0].value = quarters;
            $('#message').text("You won " + winnings + " quarters! You have " + quarters + " quarters remaining.");
        } else {
            $('input')[0].value = quarters;
            $('#message').text("You lost! You have " + quarters + " quarters remaining.")
        }
    } else {
        $('#message').text("You're all out of quarters!")
    }
}
