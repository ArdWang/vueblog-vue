<template>
    <!--只能一个div-->
    <div>
        <Header></Header>
        <div class="mblog">
            <h2>{{blog.title}}</h2>
            <el-link icon="el-icon-edit">
                <router-link :to="{name: 'BlogAdd', params: {blogId: blog.id}}">
                编辑
                </router-link>
            </el-link>
            <el-divider></el-divider>
            <div class="content markdown-body" v-html="blog.content"></div>
        </div>
    </div>
</template>

<script>
    import Header from "../components/Header";
    import 'github-markdown-css' // 然后添加样式markdown-body
    export default {
        name: "blog-detail",
        components: {Header},
        data(){
            return {
               blog:{
                   id:"",
                   title:"moren",
                   content:"neirong"
               }
            }
        },
        created(){
            const blogId = this.$route.params.blogId;
            console.log(blogId);
            const _this = this;
            if(blogId){
                this.$axios.get("/blog/"+blogId).then(res =>{
                    const blog = res.data.data;
                    _this.blog.id = blog.id;
                    _this.blog.title = blog.title;

                    const MarkdownIt = require("markdown-it");
                    const md = new MarkdownIt();
                    const result = md.render(blog.content);
                    _this.blog.content = result;

                })
            }
        }
    }
</script>

<style scoped>
    .mblog{
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        width: 100%;
        min-height: 700px;
        padding: 20px 15px;
    }
</style>