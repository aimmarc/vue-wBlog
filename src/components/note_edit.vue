<template>
    <div class="container">
        <div class="panel panel-default" v-for="item in items">
            <div class="panel-heading" >{{item.name}}</div>
            <div class="panel-body">
                {{item.content}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Welcome2 to Your Vue.js App',
                items:[
                    {name:'第一篇',content:'你好啊'},
                    {name:'第二篇',content:'你好啊'},
                    {name:'第三篇',content:'你好啊'},
                    {name:'第四篇',content:'你好啊'},
                    {name:'第五篇',content:'你好啊'},
                    {name:'第六篇',content:'你好啊'},
                    {name:'第七篇',content:'你好啊'},
                    {name:'第八篇',content:'你好啊'},
                    {name:'第九篇',content:'你好啊'},
                ]
            }
        },
        props:[],/*同意传递*/
        methods: {
            onClickMe(){
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
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

    .panel-default{
        border-radius: 1px;
        box-shadow: 0;
        border:0;
    }
</style>
