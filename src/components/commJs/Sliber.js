/**
 * Created by 44719 on 2017/6/18.
 */
;(function ($) {
    var Sliber = function (poster) {
        var _this_ = this;
        this.poster = poster;
        this.posterItemMain = poster.find("ul.poster-list");
        this.nextBtn = poster.find("div.poster-next-btn");
        this.prevBtn = poster.find("div.poster-prev-btn");
        this.posterItems = poster.find("li.poster-item");
        this.posterFirstItem = this.posterItems.first();
        this.posterLastItem = this.posterItems.last();
        this.rotateFlag = true;
        this.whb = this.getSetting().whb;   /*图片宽高比*/
        this.setting = {
            "width": $(".J_Poster").parent().width(),
            "height": /*window.innerHeight,*/$(".J_Poster").parent().width()/_this_.whb,
            "speed": 500,  /*播放速度*/
            "delay": 5000,  /*自动播放间隔*/
            "aotuPlay": true,
            "num": 4,  /*幻灯片数量*/
            "isFullScreen":false
        }
        $.extend(this.setting, this.getSetting());
        /*_this_.posterItemMain.css({
            left:0  /!*此处使用animate会出现连续变动窗口显示不正确的问题*!/
        })*/
        if(this.setting.isFullScreen === true){
            _this_.setting.height = window.innerHeight;
        }
        this.setSettingValue();
        this.windowChange();

        this.nextBtn.click(function () {
            if (_this_.rotateFlag == true) {
                _this_.slipperRotate('left');
                _this_.rotateFlag = false;
            }
        });
        this.prevBtn.click(function () {
            if (_this_.rotateFlag == true) {
                _this_.slipperRotate('right');
                _this_.rotateFlag = false;
            }
        });
        if (this.setting.aotuPlay) {
            const _this = this;
            this.autoPlay();
            this.poster.hover(function () {
                window.clearInterval(_this.timer);
            }, function () {
                _this.autoPlay();
            })
        }

    }
    Sliber.prototype = {
        /*窗口变化*/
        windowChange(){
            var _this_ = this;
            $(window).resize(function () {
                _this_.rotateFlag = false;
                _this_.setting.width = $(".J_Poster").parent().width();
                if(_this_.setting.isFullScreen === true){
                    _this_.setting.height = window.innerHeight;
                }else{
                    _this_.setting.height = $(".J_Poster").parent().width()/_this_.whb;
                }

                _this_.setSettingValue();
                _this_.posterItemMain.css({
                    left:0  /*此处使用animate会出现连续变动窗口显示不正确的问题*/
                })/*animate({
                    left: 0
                }, _this_.setting.speed, function () {
                    _this_.rotateFlag = true;  //防止快速点击格式错乱
                })*/
                _this_.rotateFlag = true;
                /*window.setTimeout(function () {
                    _this_.rotateFlag = true;
                },1000);*/

            })
        },
        /*自动播放*/
        autoPlay(){
            var _this = this;
            this.timer = window.setInterval(function () {
                _this.nextBtn.click();
            }, _this.setting.delay)
        },
        slipperRotate(dir){
            var _this_ = this;
            if (dir === 'left') {
                const left = parseInt(_this_.posterItemMain.css("left"));
                const newLeft = left - _this_.setting.width;
                if (left === -((_this_.setting.num - 1) * _this_.setting.width) ||
                    ((left > -((_this_.setting.num - 1) * _this_.setting.width )) && left < -((_this_.setting.num - 2) * _this_.setting.width))) {
                    _this_.posterItemMain.animate({
                        left: 0
                    }, _this_.setting.speed, function () {
                        _this_.rotateFlag = true;  //防止快速点击格式错乱
                    })
                } else {
                    _this_.posterItemMain.animate({
                        left: newLeft
                    }, _this_.setting.speed, function () {
                        _this_.rotateFlag = true;  //防止快速点击格式错乱
                    })
                }

            }
            else if (dir === 'right') {
                const left = parseInt(_this_.posterItemMain.css("left"));
                const newLeft = left + _this_.setting.width;
                if (left >= 0) {
                    _this_.posterItemMain.animate({
                        left: -((_this_.setting.num - 1) * _this_.setting.width)
                    }, _this_.setting.speed, function () {
                        _this_.rotateFlag = true;  //防止快速点击格式错乱
                    })
                } else {
                    _this_.posterItemMain.animate({
                        left: newLeft
                    }, _this_.setting.speed, function () {
                        _this_.rotateFlag = true;  //防止快速点击格式错乱
                    })
                }
            }
        },
        /*设置幻灯片尺寸*/
        setSettingValue (){
            const _this_ = this;
            this.posterItemMain.css({
                    width: _this_.setting.width * _this_.setting.num,
                    height:_this_.setting.height
                });
            this.posterItems.css({
                width: _this_.setting.width,
                height:_this_.setting.height
            });
            this.poster.css({
                width: _this_.setting.width,
                height:_this_.setting.height
            });
            this.nextBtn.css({
                height:_this_.setting.height
            });
            this.prevBtn.css({
                height:_this_.setting.height
            });
        },
        /*获取人工配置参数*/
        getSetting: function () {
            var setting = this.poster.attr("data-setting");
            if (setting && setting != "") {
                return $.parseJSON(setting);
            } else {
                return {};
            }
        }
    }

    window['Sliber'] = Sliber;
})(jQuery)
