$(document).ready(function() {
    $("#cf7_controls").on('click', 'div', function() {
        $("#pagin img").removeClass("opaque");

        var newImage = $(this).index();

        $("#pagin img").eq(newImage).addClass("opaque");

        $("#cf7_controls div").removeClass("selected");
        $(this).addClass("selected");
    });
});

$(function(){
  $(".phone1").mask("+7(999) 999-9999");
});

$(function()
{
    var button = $('.button');
    function switchToNext()
    {
        var _this = $(this);
        if(_this.hasClass('active'))
            return false;
        else
        {
            $('.button.active').removeClass('active');
            _this.addClass('active');
        }
    }
    button.on('click',switchToNext);
});

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
