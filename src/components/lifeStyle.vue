<template>
    <div class="Hello">
        <comheader :index-type="indexType"></comheader>
        <div class="banner">
            <div class="container" style="height:100%">
                <div style="height:100%;position: relative;">
                    <span style="position: absolute;bottom: 46px;right:16px">
                        <p>Hey You,</p>
                        <p>Welcome To LifeStyle.</p>
                    </span>
                </div>
            </div>
        </div>
        <comlogo></comlogo>

        <div class="container">
            <div class="row">
                <div class="col-md-3 col-lg-3 col-sm-12">
                    <div class="img-card">
                        <img src="http://oxx48atdd.bkt.clouddn.com/gamersky_01origin_01_201612171514FBB.jpg"
                             class="life-img" title="单击查看大图" v-on:click="openWin($event)">
                    </div>
                    <div class="img-card">
                        <img src="http://oxx48atdd.bkt.clouddn.com/photos_3.jpeg" class="life-img">
                    </div>
                </div>
                <div class="col-md-3 col-lg-3 col-sm-12">
                    <div class="img-card">
                        <img src="http://oxx48atdd.bkt.clouddn.com/photos_4.jpeg" class="life-img">
                    </div>
                    <div class="img-card">
                        <img src="http://oxx48atdd.bkt.clouddn.com/500006914.jpg" class="life-img">
                    </div>
                </div>
                <div class="col-md-3 col-lg-3 col-sm-12">
                    <div class="img-card">
                        <img src="http://oxx48atdd.bkt.clouddn.com/photos_2.jpg" class="life-img">
                    </div>
                    <div class="img-card">
                        <img src="http://oxx48atdd.bkt.clouddn.com/gamersky_01origin_01_201612171524159.jpg" class="life-img">
                    </div>
                </div>
                <div class="col-md-3 col-lg-3 col-sm-12">
                    <div class="img-card">
                        <img src="http://oxx48atdd.bkt.clouddn.com/photos_1.jpg" class="life-img">
                    </div>
                    <div class="img-card">
                        <img src="http://oxx48atdd.bkt.clouddn.com/368a194d-4c0c-46ff-9f32-0685a4357268.jpg" class="life-img">
                    </div>
                </div>
            </div>

        </div>
        <comfooter></comfooter>
    </div>
</template>
<script>
    import comheader from './com_header.vue';
    import comfooter from './com_footer.vue';
    import comlogo from './comlogo.vue';
    import photoview from './commJs/photoView';

    export default {
        data() {
            return {
                msg: 'Welcome2 to Your Vue.js App',
                indexType: 1
            }
        },
        components: {
            comheader,
            comfooter,
            comlogo
        },
        methods: {
            openWin(obj){
                var _photoView = new photoView($(obj.currentTarget),{});
            }
        }
    }
</script>
<style scoped>
    p {
        padding: 0;
        margin: 0;
    }

    .life-img {
        width: 100%;
    }

    .banner {
        height: 500px;
        background: url("../../static/res/img/lifeStyle/banner.jpg") center center no-repeat;
        background-size: cover;
        position: relative;
    }

    .banner p {
        font-family: "微软雅黑 Light";
        font-size: 46px;
        font-weight: lighter;
        color: #fff;
        text-align: right;
    }

    .img-card {
        background-color: white;
        border: 1px solid #eee;
        padding: 6px;
        border-radius: 3px;
        margin-bottom: 16px;
    }

    .img-card:hover{
        transition: all 0.4s;
        transform:scale(1.05);
    }
</style>