$("a.smooth").on("click", function (e) {
    e.preventDefault();
    var $link = $(this);
    var anchor = $link.attr("href");
    $("html, body").stop().animate({
        scrollTop: $(anchor).offset().top - 0 + "px"        
    }, 1000);
});

$(window).scroll(function () {
    var home = $("#about").offset().top;
    if ($(window).scrollTop() > home) {
        $(".navbar-brand").fadeIn();
        $(".navbar").css('background','#000');
    } else {
        $(".navbar-brand").fadeOut();
        $(".navbar").css('background','transparent');
    }
});