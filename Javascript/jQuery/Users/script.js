$(document).ready(function(){
    $('form').submit(function(){
        var first = $('#first_name').val();
        var last = $('#last_name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();

        var tbody = $('tbody');

        tbody.append("<tr>");
        tbody.append("<td>" + first + "</td>");
        tbody.append("<td>" + last + "</td>");
        tbody.append("<td>" + email + "</td>");
        tbody.append("<td>" + phone + "</td>");
        tbody.append("<tr>");

        $('.textfield').val("");

        return false;
    });
});
