<template>
    <div class="">
        <!--"width":1880,
        "height":640,-->
        <div class="J_Poster poster-main" data-setting='{
        "whb":2,
        "speed":500,
        "aotuPlay":true,
        "delay":3000,
        "num":3
    }'>
            <div class="poster-btn poster-prev-btn"></div>
            <ul class="poster-list">
                <li class="poster-item"><a href="javascript:;"><img  src="http://oxx48atdd.bkt.clouddn.com/500013291_banner.jpg" width="100%"></a></li>
                <li class="poster-item"><a href="javascript:;"><img  src="http://oxx48atdd.bkt.clouddn.com/gamersky_01origin_01_201612171514FBB.jpg" width="100%"></a></li>
                <li class="poster-item"><a href="javascript:;"><img  src="http://oxx48atdd.bkt.clouddn.com/banner.jpg" width="100%"></a></li>
            </ul>
            <div style="position: absolute;bottom:0;right:0;padding:16px;left:0;opacity:0.6;background-color: #000;color: #fff;font-size: 26px">WelCome To wBlog</div>
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
    time, mark, audio, video*/ *{
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
        float: left!important;
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

    .poster-main:hover .poster-btn{
        display: block;
    }

    .poster-main .poster-btn:hover{
        background-color: rgba(0, 0, 0, 0.25);
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
</style>