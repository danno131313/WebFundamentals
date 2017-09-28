$(document).ready(function() {

    $("#charselect").hide();
    $("#char1, #char2").hide();

    $("button").hover(function() {
        var src = $(this).attr('data-src');
        $('body #wrapper').css('background-image', ("url(" + src + ")"));
    });

    $("button").click(function() {
        var src = $(this).attr('data-src');
        $('#wrapper').css('background-image', ("url(" + src + ")"));
        $("button").hide();
        $("h1").text("Select Character");
        $("h1").after()
        $("#charselect").show();
        $("#char1, #char2").show();
    });

    $("#player1").change(function() {
        var src = $(this).val() + ".png";
        $("#char1").attr("src", "img/" + src)
    });
    
    $("#player2").change(function() {
        var src = $(this).val() + ".png";
        $("#char2").attr("src", "img/" + src)
    });
});
