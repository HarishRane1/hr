function sh() {
    $("nav").fadeIn();
};

function cloz() {
    $("nav").fadeOut();
};
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });
    $("#send").on("click", function() {
        $(this).html("Thanks for your feedback !");
    });
});