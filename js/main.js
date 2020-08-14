window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}

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
$(document).ready(function(){
    $("#menu2").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(function () {
    //script for popups
    $('a.show_popup').click(function () {
        $('div.'+$(this).attr("rel")).fadeIn(500);
        $("body").append("<div id='overlay'></div>");
        $('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
        return false;               
    }); 
    $('a.close').click(function () {
        $(this).parent().fadeOut(100);
        $('#overlay').remove('#overlay');
        return false;
    });
    
    //script for tabs
    $("div.selectTabs").each(function () {
        var tmp = $(this);
        $(tmp).find(".lineTabs li").each(function (i) {
            $(tmp).find(".lineTabs li:eq("+i+") a").click(function(){
                var tab_id=i+1;
                $(tmp).find(".lineTabs li").removeClass("active");
                $(this).parent().addClass("active");
                $(tmp).find(".tab_content div").stop(false,false).hide();
                $(tmp).find(".tab"+tab_id).stop(false,false).fadeIn(300);
                return false;
            });
        });
    });
}); 