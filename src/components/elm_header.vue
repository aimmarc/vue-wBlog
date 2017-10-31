<template>
    <div class="hello">
        <div class="elm-nav" v-on:click="test">
            <div class="container">
                <h3><</h3>
                <div>
                    <img src="../assets/logo.png" class="layout-left" style="width:66px">
                </div>
                <div>
                    <h4>必胜宅急送（奥克斯店）</h4>
                    <div class="text-font"><span>商家配送</span>&nbsp/&nbsp<span>40分钟达</span>&nbsp/&nbsp<span>配送费9元</span>
                    </div>
                    <div class="layout-left text-font"><span>公告：</span>&nbsp<span>本餐厅不使用饿了么配送</span></div>
                </div>
                <div class="text-font" style="clear:both">新用户下单立减17.0元（不参与其他活动）</div>
            </div>

        </div>
        <div style="padding:10px 0">
            <div class="layout-left" style="width:50%;text-align: center"><a>商品</a></div>
            <div class="layout-left" style="width:50%;text-align: center"><a>评价</a></div>
        </div>
        <div style="clear: both">
            <div class="row">
                <div class="col-xs-2">
                    1
                </div>
                <div class="col-xs-10">
                    <div class="speak-item" v-for="item in foodList">
                        <a href="#" class="speak-left">
                            <img src="../assets/logo.png" alt="" width="66px">
                        </a>
                        <div class="speak-right" style="margin-left:4%">
                            <div class="speak-content">
                                <h4 v-text="item.name">萝卜白菜</h4>
                                <p class="text-font" v-text="item.note">
                                    故不登高山，不知天之高也；不临深溪，不知地之厚也；
                                    不闻先王之遗言，不知学问之大也。干、越、夷、貉之子
                                    </p>
                                <span class="text-price" v-text="item.price">￥66</span>
                                <span style="float: right">
                                    <input class="addfood" type="button" value="+" v-on:click="onclick(item)">
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fix-bottom">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'header',
        data () {
            return {
                msg: 'Welcome2 to Your Vue.js App',
                foodList:[
                    {'name':'小炒肉','note':'精选食材，做出的高级美食精选食材，做出的高级美食精选食材，做出的高级美食','price':'45'},
                    {'name':'小炒肉','note':'精选食材，做出的高级美食精选食材，做出的高级美食精选食材，做出的高级美食','price':'45'},
                    {'name':'小炒肉','note':'精选食材，做出的高级美食精选食材，做出的高级美食精选食材，做出的高级美食','price':'45'},
                    {'name':'小炒肉','note':'精选食材，做出的高级美食精选食材，做出的高级美食精选食材，做出的高级美食','price':'45'},
                    {'name':'小炒肉','note':'精选食材，做出的高级美食精选食材，做出的高级美食精选食材，做出的高级美食','price':'45'},
                ]
            }
        },
        props: ['msgfromfather'], /*同意传递*/
        /*events:{
         'onAddnew':function (items) {
         console.log(items)
         }
         },*/
        methods: {
            onClickMe(){
                alert(this.msgfromfather);
                this.$emit('child-tell-me-something', this.msg);
                /*给父组件传值,$dispatch 2.0已被弃用*/
            },
            test(){
            },
            onclick(item){
                alert(item)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    body {
        padding: 0;
        margin: 0;
    }

    h1, h2 {
        font-weight: normal;
    }

    h4 {
        margin: 0;
        padding: 3px
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .header {
        width: 100%;
        background-color: aquamarine;
        position: fixed;
        top: 0
    }

    .elm-nav {
        background-color: darkred;
        /*position: fixed;*/
        top: 0;
        width: 100%;
        color: white;
        margin-top: 0;
    }

    .layout-left {
        float: left;
    }

    .text-font {
        font-size: 12px;
        padding: 3px
    }

    .speak-item{
        padding-left: 60px;
        margin:0 16px
    }

    .speak-left{
        float: left;
        display: inline;
        margin-left: -60px;
    }

    .speak-item .speak-content{
        margin-bottom: 10px;
    }

    .text-price{
        color: darkred;
    }

    .addfood{
        border-radius: 15px;
        border: 0;
    }

    .fix-bottom{
        position: fixed;
        bottom: 0;
        width:100%;
        background-color: white;
    }
</style>
