$('.prop').on('click', function () {
    $(this).addClass('prop-click');
    $('.user-info').show();
    $('.friend').removeClass('friend-click');
    $('.friend-info').hide();
})

$('.friend').on('click', function () {
    $(this).addClass('friend-click');
    $('.user-info').hide();
    $('.prop').removeClass('prop-click');
    $('.friend-info').show();
})