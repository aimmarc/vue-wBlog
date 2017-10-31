<template>
    <div id="login">
        <comheader></comheader>
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-3 col-sm-2"></div>
                <div class="col-lg-4 col-md-6 col-sm-8 col-xs-12 panel-login">
                    <div class="panel-heading">
                        登录
                    </div>
                    <div class="panel-body">
                        <form>
                            <span>用户名</span>
                            <div class="form-group">
                                <input type="text" class="form-control form-input" placeholder="请输入用户名" v-model="name">
                            </div>
                            <span>密码</span>
                            <input type="password" class="form-control form-input" placeholder="请输入密码" v-model="pass">
                            <!--<div class="input-group">
                                <span>验证码</span>
                                <span class="input-group-addon"><img
                                        src="http://localhost/Blog/server/authcode.php"
                                        onclick="this.src='http://localhost/Blog/server/authcode.php?'+Math.random()"></span>
                                <input type="text" class="form-control form-input " placeholder="请输入验证码"
                                       v-model="authcode">

                            </div>-->
                            <span>验证码</span>
                            <div class="input-group">

                                <input type="text" class="form-control" placeholder="验证码" aria-describedby="sizing-addon2">
                                <span class="input-group-addon" id="sizing-addon2"><img
                                        src="http://localhost/Blog/server/authcode.php"
                                        onclick="this.src='http://localhost/Blog/server/authcode.php?'+Math.random()"></span>
                            </div>
                        </form>
                    </div>
                    <div class="panel-footer">
                        <a href="javascript:;">遇到问题？</a>
                        <a href="javascript:;" class="link-button" v-on:click="loginEvent">登录</a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-3 col-sm-2"></div>
            </div>
        </div>
        <comfooter></comfooter>
    </div>
</template>
<script>
    import comheader from './com_header.vue';
    import comfooter from './com_footer.vue';
    let Base64 = require('js-base64').Base64;
    import CryptoJS from 'crypto-js/core'
    import MD5 from 'crypto-js/md5'
    export default{
        data(){
            return {
                name: '',
                pass: '',
                authcode: ''
            }
        },
        components: {
            comheader,
            comfooter,
        },
        methods: {
            loginEvent(){
                if (this.pass === '' || this.pass === null) {
                    alert("请输入密码");
                    return
                } else {
                    alert(CryptoJS.MD5(this.pass));
                    let self = this;
                    /*this.$http.post('http://localhost/Blog/server/logincheck.php?action=login',
                        {
                            'uasername': self.name,
                            'pass': CryptoJS.MD5(self.pass),
                            'valicode': self.authcode
                        }).then(function (res) {
                        debugger
                    });*/
                    $.ajax({
                        type: "POST"
                        , url: "http://localhost/Blog/server/logincheck.php?action=login"
                        , dataType: "json"
                        , data: {
                            "uasername": self.name
                            , "pass": '202cb962ac59075b964b07152d234b70'
                            , "valicode": self.authcode
                        }
                        , success: function (data) {
                            debugger
                        },
                        error: function () {
                            alert(arguments[1]);
                        }
                    })
                }
            }
        },
        watch: {}
    }
</script>
<style scoped>
    .panel-login {
        border: 1px solid #eee;
        border-radius: 3px;
        box-shadow: 1px 1px 1px #eee;
        margin: 50px auto;
        padding: 0
    }

    .form-input {
        border-radius: 2px;
        margin-top: 10px;
    }

    .input-group {
        margin-top: 10px;
    }

    .link-button {
        color: black;
        padding: 10px 20px;
        border-radius: 2px;
    }

    .link-button:hover {
        color: #63B8FF;
        background-color: white;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
    }

    .link-button:active {
        background-color: #eee;
    }

    .link-button:link {
        text-decoration: none;
        color: black;
    }

    .panel-footer {
        text-align: right;
    }

    .panel-heading {
        border-bottom: 1px solid #eee;
    }
</style>