function time() {
    node = $('#time');
    console.log(1);
    if (node.text() == 10) {
        $('.panel').show();
    }
    if (node.text() === 'PK') {
        return;
    }
    if (parseInt(node.text()) - 1 === 0) {
        node.html('PK');
        $('.panel').hide();
        attack();
        return;
    }
    node.html(parseInt(node.text()) - 1);
}

function attack() {
    $('#pet-bg-img').addClass('attack').removeClass('pet-bg-img');
    $('#pet-bg-img > img').prop('src', '../images/pethome/g166.gif');
    setTimeout(() => {
        $('#pet-bg-img').removeClass('attack').addClass('pet-bg-img')
        $('#pet-bg-img > img').prop('src', '../images/pethome/z166.gif');
    }, 5000);
    setTimeout(() => {
        $('#e-pet-bg-img').addClass('attack').removeClass('e-pet-bg-img');
        $('#e-pet-bg-img > img').prop('src', '../images/pethome/g198.gif');
        setTimeout(() => {
            $('#e-pet-bg-img').removeClass('attack').addClass('e-pet-bg-img')
            $('#e-pet-bg-img > img').prop('src', '../images/pethome/z198.gif');
        }, 5000);
    }, 6000);
    setTimeout(() => {
        $('#time').html(10);
    }, 10100);
}

setInterval(time, 1000);