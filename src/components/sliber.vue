<template>
    <div>
        <!--"width":1880,
        "height":640,-->
        <div id="sliber" class="J_Poster poster-main" data-setting='{
        "posterWidth":1280,
        "posterHeight":640,
        "scale":0.9,
        "speed":300,
        "aotuPlay":true,
        "delay":1000,
        "verticalAlign":"middle"
    }'>
            <div class="poster-btn poster-prev-btn"></div>
            <ul class="poster-list">
                <li class="poster-item"><a><img src="../../static/res/img/index/轮播1-1.jpg" width="100%"></a></li>
                <li class="poster-item"><a><img src="../../static/res/img/index/轮播1.jpg" width="100%"></a></li>
                <li class="poster-item"><a><img src="../../static/res/img/index/轮播2.jpg" width="100%"></a></li>
                <!--<li class="poster-item"><a><img src="../../static/res/img/index/轮播3.jpg" width="100%"></a></li>
                <li class="poster-item"><a><img src="../../static/res/img/index/轮播4.jpg" width="100%"></a></li>-->
                <!--<li class="poster-item"><a><img src="../../static/res/img/index/轮播1.jpg" width="100%"></a></li>
                <li class="poster-item"><a><img src="../../static/res/img/index/轮播2.jpg" width="100%"></a></li>
                <li class="poster-item"><a><img src="../../static/res/img/index/轮播3.jpg" width="100%"></a></li>
                <li class="poster-item"><a><img src="../../static/res/img/index/轮播4.jpg" width="100%"></a></li>-->
            </ul>
            <div class="poster-btn poster-next-btn"></div>
        </div>

    </div>
</template>
<script>
    import carousel from './commJs/Carousel'
    export default{
        data(){
            return {
                obj:'',
                sliberHtml:'',
            }
        },
        mounted(){
            this.sliber();
            //this.windowChange();
        },
        methods: {
            sliber: function () {
                const dataStetting = $(".J_Poster").attr("data-setting");
                const parentWidth = $(".J_Poster").parent().width();
                const liWidth = parentWidth * .6;
                const newHeight = parentWidth/3;
                $(".J_Poster").attr("data-setting", '{"width":' + parentWidth + ',"posterWidth":' + liWidth + ',"height":'+
                    newHeight+ ',"posterHeight":' + newHeight +' }');
                //this.obj = new Carousel($(".J_Poster"));
                Carousel.init($(".J_Poster"));
            },
            windowChange(){
                var _this = this;
                /*$(window).resize(function () {
                    $(".J_Poster").html(this.sliberHtml);
                    _this.obj = null;
                    window.setTimeout(_this.sliber(),100)
                })*/
            }
        }
    }
</script>
<style scoped>
    /*html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video */*{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    .poster-main {
        width: 1280px;
        height: 640px;
        position: relative;
    }

    .poster-main a, .poster-main img {
        display: block;
    }

    .poster-main .poster-list {
        width: 1280px;
        height: 640px;
    }

    .poster-main .poster-list .poster-item {
        position: absolute;
        left: 0;
        top: 0
    }

    .poster-main .poster-btn {
        width: 100px;
        height: 640px;
        position: absolute;
        top: 0;
        background-color: antiquewhite;
        z-index: 10;
        cursor: pointer;
    }

    .poster-main .poster-prev-btn {
        left: 0;
        background: url("../../static/res/img/sliber/btn_l.png") no-repeat center center;
    }

    .poster-main .poster-next-btn {
        right: 0;
        background: url("../../static/res/img/sliber/btn_r.png") no-repeat center center;
    }

</style>