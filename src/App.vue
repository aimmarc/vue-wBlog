<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data () {
            return {
            }
        },
        components: {
        },
        mounted(){
        },
        methods: {
        },
        watch: {
        }
    }
</script>

<style>

    body {
        padding: 0;
        margin: 0;
        /*background-color: #F0F0F0;*/
    }

    ul li {
        list-style-type: none;
    }

    .cardPanel div {
        float: left;
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

    .page-margin pre {
        border: 0;
        border-radius: 2px;
    }

    .page-margin img {
        max-width: 100%;
        width: auto;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /*text-align: center;*/
        color: #2c3e50;
        margin-top: 0;
    }

    .finished {
        text-decoration: underline
    }

    /*.addinput {
        width: 400px;
        height: 30px
    }*/

    .input-group {
        width: 100%
    }

    .span-spacer {
        width: 60px;
    }

    .panel-default{
        border-radius: 1px;
        border:0
    }

    .navbar{
        border-radius:0
    }
    .center-font {
        text-align: center;
    }


</style>
