$(function () {
    /*ani 1*/
    $('.slider_panel').append($('.slider_image').first().clone());
    $('.slider_panel').prepend($('.slider_image').eq(-2).clone());
    var index=1;
    moveSlider(index);
    $('.left_control').click(function() {
        if(index > 1){
            index--;
            moveSlider(index);
        }else{
            $('.slider_panel').css('left',-3600);
            index=5;
            moveSlider(index);
        }
    });
    $('.right_control').click(function() {
        if(index < 5){
            index++;
            moveSlider(index);
        }else{
            $('.slider_panel').css('left',0);
            index=1;
            moveSlider(index);
        }
    });
    function moveSlider(index) {
        $('.slider_panel').animate({
                left:-(index*600)
            },'slow');
    }
    $('.animation_canvas').hover(function () {
        $(".asd").fadeIn('1000');
    },function () {
        $(".asd").fadeOut('1000');
    });
    /*ani 2*/
    $('.slider_panel2').append($('.slider_image2').first().clone());
    $('.slider_panel2').prepend($('.slider_image2').eq(-2).clone());
    var index=1;
    moveSlider2(index);
    $('.left_control2').click(function() {
        if(index > 1){
            index--;
            moveSlider2(index);
        }else{
            $('.slider_panel2').css('left',-1200);
            index=3;
            moveSlider2(index);
        }
    });
    $('.right_control2').click(function() {
        if(index < 3){
            index++;
            moveSlider2(index);
        }else{
            $('.slider_panel2').css('left',0);
            index=1;
            moveSlider2(index);
        }
    });
    function moveSlider2(index) {
        $('.slider_panel2').animate({
                left:-(index*300)
            },'slow');
    }
    $('.animation_canvas2').hover(function () {
        $(".fgh").fadeIn('1000');
    },function () {
        $(".fgh").fadeOut('1000');
    });
    /*ani 2*/
    $('.arrA').hover(function () {
            $("img",this).stop().animate({
                opacity: 0.5
            },500);
        $(".hover-content ",this).show()
        }, function () {
            $("img",this).stop().css('opacity','1');
            $(".hover-content",this).hide();
        });
   
});