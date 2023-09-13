$(document).ready(function () {
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myDIV *").filter(function () {
            $('#myDIV').masonry();
            $(this).toggle($(this).is('img') || $(this).is('video') || $(this).is('#carouselExampleIndicators2') || $(this).is('.carousel-inner') || $(this).is('.carousel-item') ||  $(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});