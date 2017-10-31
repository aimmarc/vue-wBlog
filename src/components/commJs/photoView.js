;(function ($) {
    var photoView = function ($Dom,opt) {
        var _this = this;
        this.src = $Dom.attr('src');

        var winHtml = '<div class="mask" style="width:100%;height:'+ $(window).height() +'px;top:0;position: fixed;background-color: #e0e0e0;opacity: 0.3;z-index: 100"></div>' +
            /*'<div style="width:100%;height:'+ $(window).height() +'px;position: fixed;top:0;z-index: 1000;">' +*/
            '<div class="photoWin" style="max-height:'+ $(window).height() +';' +
            'height:auto;width:auto;padding:16px;border:1px solid #eee;background-color:#fff;' +
            'border-radius: 3px;position: fixed;z-index:1000;">' +
            '<img src="'+ this.src +'" style="height:400px;opacity: 1">' +
            '</div><!--</div>-->';
        $('body').append(winHtml);
        $('.photoWin').css({left:$(window).width()/2 - $('.photoWin').width()/2,top:($(window).height()/2 - $('.photoWin').height()/2)});
        $('.mask').click(function () {
            $(this).remove();
            $('.photoWin').remove();
        })
    }

    window['photoView'] = photoView;
})(jQuery)