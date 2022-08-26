$(function () {
    $('.group').hover(function () {
        $('.menu1',this).show();
    }, function () {
        $('.menu1',this).hide();
    });
});