<template>
    <div>
        <comheader></comheader>
        <comlogo></comlogo>
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-lg-8 col-sm-12">
                    <div>
                        <h1 class="center-font list-title" v-text="article.wzbt" style="margin-top: 0">
                            腾讯领投，摩拜单车完成创纪录6亿美元新一轮融资</h1>
                        <div class="italic-font opcy-font center-font">
                            <span>by </span>
                            <span><a v-text="article.uasername">Aimmarc</a></span> /
                            <span>from</span> <span v-text="article.src"></span> /
                            <span v-text="article.fbsj">2016/11/12</span> /
                            <span v-text="article.ydcs"> 343</span>
                        </div>
                        <div class="body-font page-margin" v-html="article.wznr">
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 col-sm-12">
                    <rightlist></rightlist>
                </div>
            </div>
        </div>
        <comfooter></comfooter>
    </div>
</template>
<script>
    import comheader from './com_header.vue'
    import comfooter from './com_footer.vue'
    import comlogo from './comlogo.vue'
    import rightlist from './rightList.vue'
    import deapp from './commJs/default';

    export default {
        data() {
            return {
                article: [],
                comments: '<!-- UY BEGIN --><div id="uyan_frame"></div><script type="text/javascript" src="http://v2.uyan.cc/code/uyan.js?uid=2146664">' + '<\/script><!-- UY END -->'
            }
        },
        components: {
            comheader,
            comfooter,
            comlogo,
            rightlist
        },
        mounted() {
            this.getArt();
        },
        methods: {
            getArt() {
                window.scrollTo(0, 0)
                const _this = this;
                $.ajax({
                    url: deapp.requestUrl + 'blog/server/artic_load.php?action=load',
                    type: 'POST',
                    dataType: 'json',
                    data: {articid: this.$route.query.id},
                    success: function (res) {
                        _this.article = res[0];
                    },
                    error: function (e) {

                    }
                })
            }
        }
    }
</script>
<style scoped>
    pre {
        border: 0;
        border-radius: 2px;
    }

    .body-font {
        font-size: 18px;
        font-weight: 100;
        padding: 20px 0;
    }

    .center-font{
        text-align: center;
    }

    .page-margin {
        margin-bottom: 50px;
    }

    .body-font-list {
        font-size: 22px;
        font-weight: 100;
        padding: 20px 0 0;
        line-height: 1.5;
    }

    .page-margin img {
        max-width: 100%;
        width: auto;
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
        padding: 20px 0;
        line-height: 1.5;
    }
</style>