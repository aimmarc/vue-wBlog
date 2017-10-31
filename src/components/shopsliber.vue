<template>
    <div class="">
        <!--"width":1880,
        "height":640,-->
        <div class="J_Poster poster-main" data-setting='{
        "whb":2,
        "speed":500,
        "aotuPlay":true,
        "delay":3000,
        "num":3,
        "isFullScreen":true
    }'>
            <div class="poster-btn poster-prev-btn"></div>
            <ul class="poster-list">
                <li class="poster-item"
                    style="background: url(../../static/res/img/index/轮播1-1.jpg) center center no-repeat;background-size:cover;">
                    <div class="container">
                        <a href="javascript:;">
                            <div class="shop-tiext-center shop-title">
                                <h1 class="shop-title-font">比大更大</h1>
                                <h3>这是全新的iPhone，用它你可以做更多的事。</h3>
                                <br><br>
                                <button type="button" class="btn btn-success btn-lg" >查看更多
                                </button>
                            </div>
                        </a>
                    </div>
                </li>
                <li class="poster-item"
                    style="background: url(../../static/res/img/shop/sliber1.jpg) center center no-repeat;background-size:cover;">
                    <a href="javascript:;"><!--<img  src="../../static/res/img/index/轮播1.jpg" width="100%">-->
                        <div class="container">
                            <div class="shop-tiext-center shop-title">
                                <h1 class="shop-title-font">比大更大</h1>
                                <h3>这是全新的iPhone，用它你可以做更多的事。</h3>
                                <br><br>
                                <button type="button" class="btn btn-success btn-lg" >查看更多
                                </button>
                            </div>
                        </div>
                    </a></li>
                <li class="poster-item"
                    style="background: url(../../static/res/img/shop/sliber2.jpg) center center no-repeat;background-size:cover;">
                    <a href="javascript:;"><!--<img  src="../../static/res/img/index/轮播2.jpg" width="100%">-->
                        <div class="container">
                            <div class="shop-tiext-center shop-title">
                                <h1 class="shop-title-font">比大更大</h1>
                                <h3>这是全新的iPhone，用它你可以做更多的事。</h3>
                                <br><br>
                                <button type="button" class="btn btn-success btn-lg">查看更多
                                </button>
                            </div>
                        </div></a>
                </li>
            </ul>
            <div class="poster-btn poster-next-btn"></div>
        </div>
    </div>
</template>
<script>
    import sliber from './commJs/Sliber'
    export default{
        data(){
            return {}
        },
        mounted(){
            this.sliber();
        },
        methods: {
            sliber(){
                var obj = new Sliber($(".J_Poster"));
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
    time, mark, audio, video*/
    * {
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

    ol, ul {
        list-style: none;
    }

    .poster-main {
        width: 960px;
        height: 478px;
        position: relative;
        overflow: hidden;
    }

    .poster-main a, .poster-main img {
        display: block;
    }

    .poster-main .poster-list {
        position: absolute;
        width: 3840px;
        height: 478px;
        float: left;
        overflow: hidden;
        left: 0
    }

    .poster-main .poster-list .poster-item {
        /*position: absolute;*/
        float: left;
        width: 25%;
    }

    .poster-main .poster-btn {
        width: 100px;
        height: 478px;
        position: absolute;
        top: 0;
        background-color: antiquewhite;
        z-index: 10;
        cursor: pointer;
        display: none;
    }

    .poster-main:hover .poster-btn {
        display: block;
    }

    .poster-main .poster-btn:hover {
        /*background-color: rgba(0, 0, 0, 0.25);*/
        display: block;
    }

    .poster-main .poster-prev-btn {
        left: 0;
        background: url("../../static/res/img/sliber/btn_l.png") no-repeat center center;
    }

    .poster-main .poster-next-btn {
        right: 0;
        background: url("../../static/res/img/sliber/btn_r.png") no-repeat center center;
    }

    .sliber-container {
        padding: 270px 0;
        text-align: center;
    }
</style>