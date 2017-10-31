<template>
    <div>
        <div id="aboutMe" class="center-font">
            <div class="right-head">ABOUT ME</div>
            <img src="http://oxx48atdd.bkt.clouddn.com/319309_wx.jpg" class="banner-r">
            <h3 class="center-font">Aimmarc</h3>
            <h4 class="center-font opcy-font">developer</h4>
            <h4 class="center-font">Aimmarc,front-end web developer.</h4>
        </div>
        <div id="rightList">
            <div class="right-head">Featured Posts</div>
            <div class="no-enter">
                <div v-for="list in rightList">
                    <div style="margin-bottom: 10px">
                        <div class="left-box" width="20%">
                            <img v-bind:src="list.imgsrc" style="width:100%">
                        </div>
                        <div class="right-box">
                            <h4 class="news-list">
                                <a v-text="list.title" >The State of the Word 2014</a></h4>
                            <span class="italic-font-sm opcy-font" v-text="list.writer">Aimmarc</span> /
                            <span class="italic-font-sm opcy-font" v-text="list.time">2017/6/6</span>
                        </div>
                        <div style="clear: both"></div>
                    </div>
                    <hr style="width: 100%;clear: both">
                </div>
            </div>
            <div class="right-head">Socials</div>
            <div id="Socials">
            </div>
            <div class="right-head">Categories</div>
            <div id="Categories">
                <ul>
                    <li><a class="body-font-list">Fashion</a></li>
                    <li><a class="body-font-list">Art</a></li>
                    <li><a class="body-font-list">Design</a></li>
                    <li><a class="body-font-list">Graphics</a></li>
                    <li><a class="body-font-list">Peoples</a></li>
                    <li><a class="body-font-list">Uncategorized</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                rightList:[]
            }
        },
        props:['rightlist'],
        mounted(){
            //this.rightList = this.rightlist
            this.getList()
        },
        methods:{
            getList(){
                var _this = this;
                this.$http.get('../../static/rightWriters.json').then(function (res) {
                    _this.rightList = res.body.result.list;
                })
            }
        }
    }
</script>
<style scoped>
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

    .news-list {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .banner-r {
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
    .center-font{
        text-align: center;
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

    .italic-font-sm {
        font-style: italic;
        font-size: 12px;

    }

    .opcy-font {
        color: rgba(0, 0, 0, 0.38);
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

    .body-font-list {
        font-size: 22px;
        font-weight: 100;
        padding: 20px 0 0;
        line-height: 1.5;
    }
</style>