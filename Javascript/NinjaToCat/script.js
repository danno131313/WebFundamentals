$(document).ready(function(){
    $('img').click(function(){
        var currImg = $(this);
        var temp = currImg.attr('src');
        currImg.attr('src', currImg.data('alt-src'));
        currImg.data('alt-src', temp);
    })
})
