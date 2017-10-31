<template>
    <div class="hello">
        <nav class="navbar navbar-inverse">
            <div class="container">
                <div class="container-fluid">
                    <!-- Brand and toggle get grouped for better mobile display -->
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">wBlog</a>
                    </div>

                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">
                            <li :class="{active:isIndex}"><a href="#">Index <span class="sr-only">(current)</span></a></li>
                            <li :class="{active:isLife}"><router-link to="/index/lifeStyle">LifeStyle</router-link></li>
                            <li><a href="#">Travel</a></li>
                            <li><a href="#">Fashion</a></li>
                            <li><a href="#">About Me</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <li><router-link to="/index/login">login</router-link></li>
                        </ul>
                    </div><!-- /.navbar-collapse -->
                </div><!-- /.container-fluid --></div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'header',
        data () {
            return {
                index:'',
                life:'',
                navObj:['index','life'],
                isIndex:0,
                isLife:0
            }
        },
        methods: {

        },
        props:['indexType'],
        mounted(){
            console.log(this.indexType);
            if(this.navObj[this.indexType] == 'index'){
                this.isIndex = 1
            }
            if(this.navObj[this.indexType] == 'life'){
                this.isLife = 1
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 h4 h5 {
        font-weight: bold;
    }

    a {
        color: #000;
        text-decoration: none;
    }

    a:active {
        text-decoration: none;
    }

    .navbar {
        margin: 0;
        border-radius: 0;
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
