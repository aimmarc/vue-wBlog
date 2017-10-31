<template>
    <div id="index">
        <comheader :index-type="indexType"></comheader>
        <comlogo></comlogo>
        <div class="container">
            <div>
                <sliber></sliber>
            </div>
        </div>
        <div class="container" style="margin-top: 50px">
            <div class="row">
                <div class="col-md-8 col-lg-8 col-sm-12">
                    <div v-for="list in mainList">

                        <div class="center-font no-enter">
                            <h1 class="list-title">
                                <router-link :to="{ path:'/index/read', query: { id: list.id} }" v-text="list.wzbt" class="tile-link">
                                </router-link>
                            </h1>
                            <div class="italic-font opcy-font">
                                <span>by </span>
                                <span><a v-text="list.nickname"></a></span> /
                                <span v-text="list.fbsj"></span> /
                                <span> from</span>
                                <span v-html="list.src"> </span>
                            </div>

                        </div>
                        <div class="body-font" v-text="replaceMethod(list.wznr_txt)">
                        </div>
                        <div>
                            <img :src="list.imgSrc" style="width:100%">
                        </div>
                        <!--<div class="center-font " style="margin:60px 0 60px">
                            <router-link :to="{ path:'/index/read', query: { id: list.id} }" class="read-button">
                                CONTINUE READING
                            </router-link>
                        </div>-->
                        <hr class="hr">
                    </div>
                </div>

                <div class="col-md-4 col-lg-4 col-sm-12">
                    <rightlist :rightlist="this.rightList"></rightlist>
                </div>
            </div>
        </div>
        <comfooter></comfooter>
    </div>
</template>

<script scoped>
    import rightlist from './rightList.vue';
    import sliber from './carousel.vue';
    import deapp from './commJs/default';
    import comheader from './com_header.vue';
    import comfooter from './com_footer.vue';
    import comlogo from './comlogo.vue'
    export default {
        data(){
            return {
                mainList: [],
                rightList: [],
                request:deapp.requestUrl,
                indexType:0
            }
        },
        components: {
            rightlist,
            sliber,
            comheader,
            comfooter,
            comlogo
        },
        mounted(){
            this.getMainList();
            this.getRightList();
        },
        methods: {
            getMainList(){
                var _this = this;
                this.$http.get(_this.request + 'blog/server/loading.php?action=loadAdmin'
                ).then(function (res) {
                    _this.mainList = res.body;
                });
            },
            getRightList(){
               /*var _this = this;
                this.$http.post(_this.request + 'http://bcp.baidu.com/news/access'
                ).then(function (res) {
                    //_this.mainList = res.body;
                    debugger
                });*/
            },
            replaceMethod(txt){
                return txt.substr(0, 100) + '...';
            }
        },
        watch: {}
    }
</script>

<style scoped>
    h1{
        padding:0;
        margin:0;
    }

    h3 h4 h5 {
        font-weight: bold;
    }

    a {
        color: #333;
        text-decoration: none;
        cursor: pointer;
    }

    a:hover {
        text-decoration: none;
        color: orange;
    }

    .center-font{
        text-align: center;
    }

    /*.tile-link{
        color: #333;
        text-decoration: none;
        cursor: pointer;
    }

    .tile-link:hover{
        text-decoration: none;
        color: orange;
    }*/

    input,button,select,textarea{outline:none}

    .navbar {
        margin: 0
    }

    .banner {
        width: 100%;
    }

    .list-title{
        margin:0 0 20px 0;
        text-align: center;
    }

    /*.left-box {
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
    }*/

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

    .italic-font {
        font-style: italic;
        font-size: 18px;
        text-align: center;
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
        padding: 20px 0;
        line-height: 1.5;
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
    }

    .no-enter {
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

    .hr{
        margin:60px 0
    }
</style>