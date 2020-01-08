function t670_init(recid){t670_imageHeight(recid);t670_show(recid);t670_hide(recid)}
function t670_show(recid){var el=$("#rec"+recid),play=el.find('.t670__play');play.click(function(){if($(this).attr('data-slider-video-type')=='youtube'){var url=$(this).attr('data-slider-video-url');$(this).next().html("<iframe class=\"t670__iframe\" width=\"100%\" height=\"100%\" src=\"https://www.youtube.com/embed/"+url+"?autoplay=1\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>")}
if($(this).attr('data-slider-video-type')=='vimeo'){var url=$(this).attr('data-slider-video-url');$(this).next().html("<iframe class=\"t670__iframe\" width=\"100%\" height=\"100%\" src=\"https://player.vimeo.com/video/"+url+"\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen></iframe>")}
$(this).next().css('z-index','3')})}
function t670_hide(recid){var el=$("#rec"+recid),body=el.find('.t670__frame');el.on('updateSlider',function(){body.html('').css('z-index','')})}
function t670_imageHeight(recid){var el=$("#rec"+recid);var image=el.find(".t670__separator");image.each(function(){var width=$(this).attr("data-slider-image-width");var height=$(this).attr("data-slider-image-height");var ratio=height/width;var padding=ratio*100;$(this).css("padding-bottom",padding+"%")})}