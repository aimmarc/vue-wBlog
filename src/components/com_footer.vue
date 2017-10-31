<template>
    <div id="footer" class="index-footer mdui-ripple">
        <div class="container">
            <div><span><a>关于我们</a></span> | <span><a>合作伙伴</a></span> | <span><a>法律声明</a></span></div>
            <div style="margin-top: 20px"><span>本站一切解释权归@<a>Aimmarc</a>所有。</span></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'footer',
        data () {
            return {
                msg: 'Welcome2 to Your Vue.js App'
            }
        },
        methods: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 h4 h5 {
        font-weight: bold;
    }

    a {
        color: #333;
        text-decoration: none;
    }

    a:hover {
        color: orange;
        text-decoration: none;
    }

    .navbar {
        margin: 0
    }

    .banner {
        width: 100%;;
    }

    .left-box {
        float: left;
        vertical-align: center;
        width: 30%
    }

    .right-box {
        float: right;
        text-align: left;
        width: 66%;
        margin-left: 4%
    }

    .yl-font {
        font-size: 16px;
    }

    .right-list-img {
        width: 50px;
        margin-right: 10px
    }

    .index-footer {
        width: 100%;
        min-height: 80px;
        border-top: 1px solid #CFCFCF;
        margin-top: 50px;
        text-align: center;
        padding: 50px
    }

    .mdui-ripple {
        position: relative;
        overflow: hidden;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .arrow {
        cursor: pointer;
        display: block;
        line-height: 39px;
        text-align: center;
        font-size: 16px;
        font-weight: bold;
        width: 40px;
        height: 40px;
        border: 1px solid black;
        position: absolute;
        z-index: 2;
        top: 50%;
        color: white;
        background-color: rgba(0, 0, 0, 0.16);
    }

    .arrow:hover {
        color: white;
        background-color: rgba(0, 0, 0, 0.45);
    }

    @-webkit-keyframes fadeIn {
        0% {
            opacity: 0; /*初始状态 透明度为0*/
        }
        50% {
            opacity: 0; /*中间状态 透明度为0*/
        }
        100% {
            opacity: 1; /*结尾状态 透明度为1*/
        }
    }

    .carousel-in {
        -webkit-animation-name: fadeIn; /*动画名称*/
        -webkit-animation-duration: 1s; /*动画持续时间*/
        -webkit-animation-iteration-count: 1; /*动画次数*/
        -webkit-animation-delay: 0s; /*延迟时间*/
    }

    .carouselhide {
        display: none;
        transition-delay: 2s;
    }

    .center-font {
        text-align: center;
    }

    .italic-font {
        font-style: italic;
        font-size: 18px;

    }

    .italic-font-sm {
        font-style: italic;
        font-size: 12px;

    }

    .opcy-font {
        color: rgba(0, 0, 0, 0.38);
    }

    .body-font {
        font-size: 22px;
        font-weight: 100;
        padding: 20px 0 0
    }

    .right-head {
        width: 100%;
        text-align: center;
        background-color: black;
        color: white;
        font-size: 18px;
        padding: 10px;
        margin-bottom: 25px;
    }

    #rightList {
        margin-top: 50px;
    }

    h1, h2, h3, h4, h5, span {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        padding: 0;
        margin: 0
    }

    .read-button {
        padding: 20px;
        background-color: #CDC9C9;
        border-radius: 40px;
        margin-top: 20px;
    }

    .read-button:hover {
        background-color: darkorange;
        color: white;
    }
</style>
