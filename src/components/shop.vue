<template>
    <div id="shop">
        <nav id="shopNav" class="navbar navbar-inverse navbar-fixed-top">
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
                        <a class="navbar-brand" href="#">Shop</a>
                    </div>

                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav">
                            <li><a style="color: white" href="javascript:;">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li><a href="#">LifeStyle</a></li>
                            <li><a href="#">Travel</a></li>
                            <li><a href="#">Fashion</a></li>
                            <li><a href="#">About Me</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">ShoppingCar</a></li>
                        </ul>
                        <ul class="nav navbar-nav navbar-right">
                            <!--<li><a href="#">login</a></li>-->
                        </ul>
                    </div><!-- /.navbar-collapse -->
                </div><!-- /.container-fluid --></div>
        </nav>
        <!--第一页-->
        <div class="shop-main">
            <div class="container ">
                <!--<carousel></carousel>-->
                <div class="shop-tiext-center shop-title">
                    <h1 class="shop-title-font">Welcome To Shop</h1>
                    <h3>You Can Find Anything From Here</h3>
                    <br><br>
                    <button type="button" class="btn btn-success btn-lg" data-toggle="modal" data-target="#myModal">搜索
                    </button>
                </div>
            </div>
        </div>
        <!-- 模态框（Modal） -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
             aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            &times;
                        </button>
                        <h4 class="modal-title" id="myModalLabel">
                            搜索
                        </h4>
                    </div>
                    <div class="modal-body" style="text-align: center">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="请输入您想搜索的内容">
                            <span class="input-group-btn">
						<button class="btn btn-default" type="button">
							搜索
						</button>
					</span>
                        </div>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal -->
        </div>
        <!--第二页-->
        <div class="shop-sec">
            <!--<div class="container">-->
            <carousel></carousel>
            <!--</div>-->
        </div>
        <!--第三页-->
        <div class="shop-thd">
            <div class="container ">
                <h1 class="shop-thd-font">新品上市</h1>
                <div class="row">
                    <div class="col-md-6 col-lg-3 col-sm-6" v-for="item in newList">
                        <div class="panel panel-default shop-panel-hover">
                            <div class="panel-body " style="overflow: hidden">
                                <img class="shop-goods-img" v-bind:src="item.imgSrc" width="100%">
                                <div>
                                    <h3><a href="#" v-text="item.productName">iPhone 6s Plus</a></h3>
                                    <div>
                                        <h4 class="shop-price-font" style="">￥<span v-text="item.productPrice"></span>
                                        </h4>
                                        <span style="float: right"><a href="javascript:;"
                                                                      v-on:click="addShopingCar(item)">
                                            <img class="shop-shopingcar"
                                                src="../../static/res/img/shop/购物车.svg" width="52px"></a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 class="shop-thd-font">黑色星期五</h1>
                <div class="row">
                    <div class="col-md-6 col-lg-3 col-sm-6" v-for="item in blackList">
                        <div class="panel panel-default shop-panel-hover">
                            <div class="panel-body " style="overflow: hidden">
                                <img class="shop-goods-img" v-bind:src="item.imgSrc" width="100%">
                                <div>
                                    <h3><a href="#" v-text="item.productName">iPhone 6s Plus</a></h3>
                                    <div>
                                        <h4 class="shop-price-font" style="">￥<span v-text="item.productPrice"></span>
                                        </h4>
                                        <span style="float: right"><a href="javascript:;"
                                                                      v-on:click="addShopingCar(item)"><img
                                                src="../../static/res/img/shop/购物车.svg" width="52px"></a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 class="shop-thd-font">母婴世界</h1>
                <div class="row">
                    <div class="col-md-6 col-lg-3 col-sm-6" v-for="item in motherList">
                        <div class="panel panel-default shop-panel-hover">
                            <div class="panel-body " style="overflow: hidden">
                                <img class="shop-goods-img" v-bind:src="item.imgSrc" width="100%">
                                <div>
                                    <h3><a href="#" v-text="item.productName">iPhone 6s Plus</a></h3>
                                    <div>
                                        <h4 class="shop-price-font" style="">￥<span v-text="item.productPrice"></span>
                                        </h4>
                                        <span style="float: right"><a href="javascript:;"
                                                                      v-on:click="addShopingCar(item)"><img
                                                src="../../static/res/img/shop/购物车.svg" width="52px"></a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 class="shop-thd-font">超市</h1>
                <div class="row">
                    <div class="col-md-6 col-lg-3 col-sm-6" v-for="item in superList">
                        <div class="panel panel-default shop-panel-hover">
                            <div class="panel-body " style="overflow: hidden">
                                <img class="shop-goods-img" v-bind:src="item.imgSrc" width="100%">
                                <div>
                                    <h3><a href="#" v-text="item.productName">iPhone 6s Plus</a></h3>
                                    <div>
                                        <h4 class="shop-price-font" style="">￥<span v-text="item.productPrice"></span>
                                        </h4>
                                        <span style="float: right"><a href="javascript:;"
                                                                      v-on:click="addShopingCar(item)"><img
                                                src="../../static/res/img/shop/购物车.svg" width="52px"></a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <comfooter></comfooter>
    </div>
</template>
<script>
    import comheader from './com_header.vue'
    import carousel from './shopsliber.vue'
    import comfooter from './com_footer.vue'
    import addCars from './commJs/addCart'
    export default{
        data(){
            return {
                newList: [],
                blackList: [],
                motherList: [],
                superList: [],
                shopingCar: addCars.fecth(),
            }
        },
        components: {
            comheader,
            carousel,
            comfooter
        },
        mounted(){
            const newHeight = window.innerHeight;
            $(".shop-main").css({height: newHeight});
            $(".shop-sec").css({height: newHeight});
            this.windowTop();
            this.windowChange();
            this.windowScroll();
            this.eventClick();
            this.getList();
            this.getTest();
        },
        methods: {
            windowTop(){
                const top = document.body.scrollTop;
                if (top > window.innerHeight) {
                    $("#shopNav").css({
                        background: "#000"
                    })
                } else if (top < window.innerHeight) {
                    $("#shopNav").css({
                        background: "rgba(0,0,0,0)",
                        border: 0
                    })
                }
            },
            windowChange(){
                $(window).resize(function () {
                    const newHeight = window.innerHeight;
                    $(".shop-main").css({height: newHeight});
                    $(".shop-sec").css({height: newHeight});
                });
            },
            windowScroll(){
                $(window).scroll(function () {
                    /*获取top值：
                     *document.documentElement.scrollTop;--有doctype声明
                     * document.body.scrollTop;--无doctype声明
                     * */
                    const top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                    ;

                    if (top > window.innerHeight) {
                        $("#shopNav").css({
                            background: "#000"
                        })
                    } else if (top < window.innerHeight) {
                        $("#shopNav").css({
                            background: "rgba(0,0,0,0)",
                            border: 0
                        })
                    }
                });
            },
            eventClick(){
                $(".shop-goods-img").hover(function () {
                    $(".shop-goods-img").animate({
                        transform: 'scale(1.4)'
                    })
                }, function () {

                })
            },
            getList(){
                const _this_ = this;
                this.$http.get('../../static/shopData.json').then(function (res) {
                    _this_.newList = res.body.result.new;
                    _this_.blackList = res.body.result.black;
                    _this_.motherList = res.body.result.mother;
                    _this_.superList = res.body.result.super;

                })
            },
            addShopingCar(item){
                if (this.shopingCar == '') {
                    this.shopingCar[0] = item;
                    console.log(this.shopingCar);
                } else {
                    var isAdd = true;
                    for (var i = 0; i < this.shopingCar.length; i++) {
                        if (item.productId == this.shopingCar[i].productId) {
                            isAdd = false;
                            this.shopingCar[i].productSumPrice = parseInt(this.shopingCar[i].productPrice) +parseInt(this.shopingCar[i].productSumPrice);
                            this.shopingCar[i].productSum = parseInt(this.shopingCar[i].productSum) + 1;
                        }
                    }
                    if (isAdd == true) {
                        this.shopingCar.push(item);
                    }
                    console.log(this.shopingCar);
                }
            },
            getTest(){
                this.$http.post("http://localhost/Blog/server/getList.php?action=phone_main").then(function (res) {
                    alert(res);
                })
            }
        },
        watch: {
            shopingCar: {
                handler: function (shopingCar) {
                    debugger
                    console.log(shopingCar);
                    addCars.save(shopingCar);
                },
                deep: true
            },
        }
    }
</script>
<style scoped>
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

    /*本页css*/

    /*body{
        background-color: rgba(0, 0, 0, 0.64);
    }*/

    .shop-main {
        background: url("../../static/res/img/shop/banner.jpg");
        background-size: cover;
    }

    /*.shop-main */
    .shop-tiext-center {
        text-align: center;
    }

    /*.shop-main */
    .shop-title {
        padding: 270px 0;
        color: white;
    }

    /*.shop-main*/
    .shop-title .shop-title-font {
        font-size: 48px;
    }

    .shop-sec {
        background-color: #eee;
        padding: 0;
    }

    .shop-thd {
        /*background-color: rgba(0, 0, 0, 0.64);*/
        background: url("../../static/res/img/shop/back.jpg") center center repeat;
        padding: 40px 0;
    }

    .shop-thd .shop-thd-font {
        color: white;
    }

    .shop-thd a {
        color: #7a9e9f;
    }

    .shop-price-font {
        font-size: 22px;
        color: red;
        float: left;
    }

    .shop-panel-hover:hover {
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.45);
    }

    .shop-goods {
        padding: 0
    }

    .sliber-main {
        border: 1px solid #eee;
        padding: 0;
        margin: 0;
        height: 100%
    }

    .shop-goods-img {
        position: relative;
    }

    .panel:hover {
        transition: all 0.6s;
        transform: scale(1.05);
    }

    .shop-shopingcar:active{
        transition: all 0s;
        transform: scale(1.5);
    }
</style>