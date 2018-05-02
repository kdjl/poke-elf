$('.main-pet').on('change', function () {
    $('.pet-one').css({
        background: 'url(../images/pethome/k32.gif)',
    });
})

$('.other-pet').on('change', function () {
    $('.pet-two').css({
        background: 'url(../images/pethome/k166.gif)',
    });
})

var tabList = ['evolve', 'compose', 'reincarnation'];
var showList = ['evolve-context', 'compose-context', 'reincarnation-context'];
tabs(tabList, showList);