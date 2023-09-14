$(function () {
    $(document).scroll(function () {
        var $nav = $("nav#navbar.fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});