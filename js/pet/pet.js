$('.one').click(function () { 
    $('.t1').show();
    $(this).addClass('t1-click');
    $('.t2').hide();
    $('.two').removeClass('t2-click');
    $('.t3').hide();
    $('.three').removeClass('t3-click');
})

$('.two').click(function () {
    $('.t1').hide();
    $(this).addClass('t2-click');
    $('.t2').show();
    $('.one').removeClass('t1-click');
    $('.t3').hide();
    $('.three').removeClass('t3-click');
})

$('.three').click(function () {
    $('.t3').show();
    $(this).addClass('t3-click');
    $('.t1').hide();
    $('.two').removeClass('t2-click');
    $('.t2').hide();
    $('.one').removeClass('t1-click');
})