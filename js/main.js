$(function(){
  $("#phone1").mask("+7(999) 999-9999");
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

