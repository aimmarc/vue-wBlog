/**
 * Created by 44719 on 2017/6/17.
 */
;(function ($) {
    var Carousel = function (poster) {
        _this = this;
        /*保存单个旋转木马对象*/
        this.poster = poster;
        this.posterItemMain = poster.find("ul.poster-list");
        this.nextBtn = poster.find("div.poster-next-btn");
        this.prevtBtn = poster.find("div.poster-prev-btn");
        this.posterItems = poster.find("li.poster-item");
        this.posterFirstItem = this.posterItems.first();
        this.posterLastItem = this.posterItems.last();
        this.rotateFlag = true;
        /*配置参数*/
        this.setting = {
            "width": poster.parent().width(),  //幻灯片宽度
            "height": 640,  //幻灯片高度
            "posterWidth": poster.parent().width() * .6,   //第一帧宽度
            "posterHeight": 640,
            "scale": 0.9,   //比例关系
            "speed": 500,   //播放速度
            "delay":5000,   //自动播放间隔
            "aotuPlay":true,  //是否自动播放
            "verticalAlign": "middle" //bottom top
        }
        $.extend(this.setting, this.getSetting());

        this.setSettingVlaue();

        this.setPosterPos();

        this.nextBtn.click(function () {
            if (_this.rotateFlag == true) {
                _this.carouseRotate('left');
                _this.rotateFlag = false;
            }

        });

        this.prevtBtn.click(function () {
            if (_this.rotateFlag == true) {
                _this.carouseRotate('right');
                _this.rotateFlag = false;
            }
        });

        if(_this.setting.aotuPlay){
            _this.autoPlay();
            this.poster.hover(function () {
                window.clearInterval(_this.timer);
            },function () {
                _this.autoPlay();
            })
        }
    }

    Carousel.prototype = {
        /*窗口大小变化*/
        windowChange(){
            var _this = this;
            window.clearInterval(_this.timer);
            $(window).resize(function () {
                if(_this.rotateFlag == true){
                    var parentWidth = $(".J_Poster").parent().width();
                    const liWidth = parentWidth * .8;
                    _this.setting.width = parentWidth;
                    _this.setting.posterWidth = liWidth;
                    _this.setPosterPos();
                }
            });
        },
        /*自动播放*/
        autoPlay(){
            var _this = this;
          this.timer = window.setInterval(function () {
              _this.nextBtn.click();
          },_this.setting.delay)
        },
        /*设置左右旋转功能*/
        carouseRotate(dir){
            var _this_ = this;
            var zIndexArr = [];  //存储zIndex
            if (dir === 'left') {
                this.posterItems.each(function () {
                    var self = $(this),
                        prev = self.prev().get(0) ? self.prev() : _this_.posterLastItem,
                        width = prev.width(),
                        height = prev.height(),
                        zIndex = prev.css("zIndex"),
                        opacity = prev.css("opacity"),
                        left = prev.css("left"),
                        top = prev.css("top");
                    zIndexArr.push(zIndex);

                    self.animate({
                        width: width,
                        height: height,
                        opacity: opacity,
                        left: left,
                        top: top
                    },_this_.setting.speed,function () {
                        _this_.rotateFlag = true;  //防止快速点击格式错乱
                    })

                })
                this.posterItems.each(function (i) {
                    $(this).css('zIndex', zIndexArr[i]);
                });
            } else if (dir === 'right') {
                this.posterItems.each(function () {
                    var self = $(this),
                        next = self.next().get(0) ? self.next() : _this_.posterFirstItem,
                        width = next.width(),
                        height = next.height(),
                        zIndex = next.css("zIndex"),
                        opacity = next.css("opacity"),
                        left = next.css("left"),
                        top = next.css("top");
                    zIndexArr.push(zIndex);
                    self.animate({
                        width: width,
                        height: height,
                        opacity: opacity,
                        left: left,
                        top: top
                    },_this_.setting.speed,function () {
                        _this_.rotateFlag = true;
                    })
                });
                this.posterItems.each(function (i) {
                    $(this).css('zIndex', zIndexArr[i]);
                });
            }
        },
        /*设置左右的位置关系*/
        setPosterPos: function () {
            var _self = this;
            var sliceItems = this.posterItems.slice(1),
                sliceSize = sliceItems.length / 2,
                rightSlice = sliceItems.slice(0, sliceItems.length / 2),
                leftSlice = sliceItems.slice(sliceSize),
                level = Math.floor(this.posterItems.length / 2);

            var rw = this.setting.posterWidth,
                rh = this.setting.posterHeight,
                gap = ((this.setting.width - this.setting.posterWidth) / 2) / level;

            var firstLeft = (_self.setting.width - _self.setting.posterWidth) / 2;

            var fixOffsetLeft = firstLeft + rw
            /*设置右边位置关系*/
            rightSlice.each(function (i) {
                level--;
                rw = rw * _self.setting.scale;
                rh = rh * _self.setting.scale;
                var j = i;
                $(this).css({
                    zIndex: level,
                    width: rw,
                    height: rh,
                    opacity: 1 / (++j),
                    left: fixOffsetLeft + (++i) * gap - rw,
                    top: /*(_self.setting.height - rh) / 2*/_self.setVerticalAlign(rh)
                })
            });
            var oloop = Math.floor(this.posterItems.length / 2),
                lw = rightSlice.last().width(),
                lh = rightSlice.last().height();
            /*设置左边位置关系*/
            leftSlice.each(function (i) {
                $(this).css({
                    zIndex: i,
                    width: lw,
                    height: lh,
                    opacity: 1 / oloop,
                    left: i * gap,
                    top: /*(_self.setting.height - lh) / 2*/_self.setVerticalAlign(lh)
                });
                lw = lw / _self.setting.scale;
                lh = lh / _self.setting.scale;
                oloop--;
            })

        },

        /*设置对齐方式*/
        setVerticalAlign: function (height) {
            var verticalType = this.setting.verticalAlign,
                top = 0;
            if (verticalType === 'middle') {
                top = (this.setting.height - height) / 2;
            } else if (verticalType === 'top') {
                top = 0;
            } else if (verticalType === 'bottom') {
                top = this.setting.height - height;
            } else {
                top = (this.setting.height - height) / 2;
            }
            return top;
        },

        /*设置样式*/
        setSettingVlaue: function () {
            this.poster.css({
                width: this.setting.width,
                height: this.setting.height,
            });
            this.posterItemMain.css({
                width: this.setting.width,
                height: this.setting.height
            });
            var w = (this.setting.width - this.setting.posterWidth) / 2;
            this.nextBtn.css({
                width: w,
                height: this.setting.height,
                zIndex: Math.ceil(this.posterItems.length / 2)
            });
            this.prevtBtn.css({
                width: w,
                height: this.setting.height,
                zIndex: Math.ceil(this.posterItems.length / 2)
            });
            this.posterFirstItem.css({
                left: w,
                zIndex: Math.floor(this.posterItems.length / 2),
                width: this.setting.posterWidth,
            })
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

    Carousel.init = function (posters) {
        var _this = this;
        posters.each(function (i) {
            new _this($(this));
        })
    }
    
    Carousel.returnFlag = function () {
        return this.rotateFlag;
    }

    Carousel.destoryObj = function () {
        window.clearInterval(_this.timer)
    }

    Carousel.reInit = function () {
        window['Carousel'] = Carousel;
    }

    window['Carousel'] = Carousel;
})(jQuery)
