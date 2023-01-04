$(document).ready(function() {
        $('.header_burger').click(function(event) {
        $('.header_burger,.nav-list').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(function() {
    // Smooth scroll
    $("[data-scroll]").on('click', function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        $("html, body").animate({
            scrollTop: elementOffset - 170
        }, 700);
    });
});