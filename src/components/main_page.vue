<template>
    <div class="container">
        <a class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">添加</a>

        <!-- Modal -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">Add Note</h4>
                    </div>
                    <div class="modal-body">
                        <div class="input-group">
                            <input class="form-control" placeholder="Title" v-model="noteTitle">
                        </div>
                        <br>
                        <div class="input-group">
                            <textarea class="form-control" placeholder="Content" style="min-height: 300px"
                                      v-model="noteContent"></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" v-on:click="addNote" data-dismiss="modal">Save
                            changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="panel panel-default" v-for="item in items" style="margin-top: 16px">
            <div class="panel-heading">{{item.name}}<a href="javascript:;" class="badge" v-on:click="deleteNote(item)"> 删除</a></div>
            <div class="panel-body">
                {{item.content}}
            </div>
        </div>
    </div>
</template>

<script>
    import Store from '../store'
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Welcome2 to Your Vue.js App',
                items: Store.fecth(),
                noteTitle: '',
                noteContent: ''
            }
        },
        props: [], /*同意传递*/
        methods: {
            onClickMe(){
            },
            deleteNote(item){
                var index = 0;
                var newitem = [];
                for (var i in this.items) {
                    if (this.items[i] == item) {
                        index = i;
                    } else {
                        newitem.push(this.items[i])
                    }
                }
                this.items = newitem;
            },
            addNote(){
                if (this.noteTitle == '' || this.noteContent == '') {
                    alert("can not save this note as null!")
                    return
                } else {
                    this.items.push({
                        name: this.noteTitle,
                        content: this.noteContent
                    })
                }

            },
        },
        watch: {
            items: {
                handler: function (items) {
                    Store.save(items);
                },
                deep: true
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

    .panel-default {
        border-radius: 2px;
        box-shadow: 0;
        border: 0;
    }

    .badge {
        float: right;
        display: none;
    }

    .panel-default:hover .badge {
        display: block;
    }
</style>
