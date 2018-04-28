$('.gold-ex').on('click', function () {
    $('.gold-ex').addClass('gold-ex-click');
    $('.crystal-ex').removeClass('crystal-ex-click');
    $('.prop-ex').removeClass('prop-ex-click');
    $('.gold-list').show();
    $('.crystal-list').hide();
    $('.auction-list').hide();
})

$('.crystal-ex').on('click', function () {
    $('.gold-ex').removeClass('gold-ex-click');
    $('.crystal-ex').addClass('crystal-ex-click');
    $('.prop-ex').removeClass('prop-ex-click');
    $('.gold-list').hide();
    $('.crystal-list').show();
    $('.auction-list').hide();
})

$('.prop-ex').on('click', function () {
    $('.gold-ex').removeClass('gold-ex-click');
    $('.crystal-ex').removeClass('crystal-ex-click');
    $('.prop-ex').addClass('prop-ex-click');
    $('.gold-list').hide();
    $('.crystal-list').hide();
    $('.auction-list').show();
})