$('#backpack-btn').on('click', function () {
    $('#backpack').toggle();
})

$('#back-exit').on('click', function () {
    $('#backpack').hide();
})

$('.back-item').on('click', function () {
    $('.back-item').removeClass('back-item-hover');
    $(this).addClass('back-item-hover');
})