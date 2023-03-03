$(function () {
    $('video').on('ended', function () {
        this.load();
        this.play();
    });

    $(window).on("scroll", function () {
        var e = $("header");
        100 < $(window).scrollTop() ? e.addClass("sticky_navigation") : e.removeClass("sticky_navigation")
    });

    $('a[href=""]').click(function () {
        return false;
    });

    $("a[href^='#']").click(function () {
        var _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top - 150 + "px"
        });
        return false;
    });

    $('.mobile-menu').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.navbar-nav').toggleClass('show');
    });
    
    $('#profile .menu .btn-chat').click(function() {
        $('#profile .menu .chat, #profile .menu .btn-chat, #profile .menu .navigation').toggleClass('show');
    });
});