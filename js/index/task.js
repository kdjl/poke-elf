$('#task-exit').on('click', function () {
    $('#task').hide();
})

$('#task-btn').on('click', function () {
    $('#task').toggle();
})

$('.task-title ~ .task-content > .task-item').on('click', function () {
    if ($(this).next().hasClass('child')) {
        $(this).next().toggle();
        $(this).toggleClass('mul');
    }
})