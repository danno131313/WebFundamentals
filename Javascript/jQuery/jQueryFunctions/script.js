$(document).ready(function(){
    $('#btn1').click(function(){
        $('#box').hide();
    })

    $('#btn2').click(function(){
        $('#box').show();
    })

    $('#btn3').click(function(){
        $('#box').toggle();
    })

    $('#btn4').click(function(){
        $('#box').slideDown();
    })

    $('#btn5').click(function(){
        $('#box').slideUp();
    })

    $('#btn6').click(function(){
        $('#box').slideToggle();
    })

    $('#btn7').click(function(){
        $('#box').fadeIn();
    })

    $('#btn8').click(function(){
        $('#box').fadeOut();
    })

    $('#btn9').click(function(){
        $('#box').addClass('red');
    })

    $('#btn14').click(function(){
        $('#box').removeClass('red');
    })

    $('#btn10').click(function(){
        $('#box').before('<h1>before!</h1>');
    })

    $('#btn11').click(function(){
        $('#box').after('<h1>after!</h1>');
    })

    $('#btn12').click(function(){
        $('#box').append('append!');
    })

    $('#btn13').click(function(){
        $('#box').html('<h1>html</h1>');
    })
});
