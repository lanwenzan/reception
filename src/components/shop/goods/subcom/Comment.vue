<template>
    <div class="tab-content" style="display: block;">
        <!--网友评论-->
        <div class="comment-box">
            <!--取得评论总数-->
            <form id="commentForm" name="commentForm" class="form-box" url="/tools/submit_ajax.ashx?action=comment_add&amp;channel_id=2&amp;article_id=98">
                <div class="avatar-box">
                    <i class="iconfont icon-user-full"></i>
                </div>
                <div class="conn-box">
                    <div class="editor">
                        <textarea id="txtContent" name="txtContent" sucmsg=" " datatype="*10-1000" nullmsg="请填写评论内容！"></textarea>
                        <span class="Validform_checktip"></span>
                    </div>
                    <div class="subcon">
                        <input id="btnSubmit" name="submit" type="submit" value="提交评论" class="submit">
                        <span class="Validform_checktip"></span>
                    </div>
                </div>
            </form>
            <ul id="commentList" class="list-box">
                <p style="margin:5px 0 15px 69px;line-height:42px;text-align:center;border:1px solid #f7f7f7;">暂无评论，快来抢沙发吧！</p>
                <li v-for="item in comments" :key="item.article_id">
                    <div class="avatar-box">
                        <i class="iconfont icon-user-full"></i>
                    </div>
                    <div class="inner-box">
                        <div class="info">
                            <span>{{item.user_name}}</span>
                            <span>{{item.add_time}}</span>
                        </div>
                        <p>{{item.content}}</p>
                    </div>
                </li>
            </ul>
            <!--放置页码-->
            <div class="page-box" style="margin:5px 0 0 62px">
                <div id="pagination" class="digg">
                    <span class="disabled">« 上一页</span>
                    <span class="current">1</span>
                    <span class="disabled">下一页 »</span>
                </div>
            </div>
            <!--/放置页码-->
        </div>

        <!--/网友评论-->
    </div>
</template>

<script>
export default {
    props:['id'],
    data(){
        return{
            comments:[]
        }
    },
    methods:{
        getComments(){
            let url = `${this.$api.commentList}goods/${this.id}?pageIndex=1&pageSize=10`
            this.$http.get(url).then(res=>{
                if(res.data.status == 0){
                    this.comments = res.data.message;
                    console.log(this.comments);
                    
                }
            })
        }
    },
    created(){
        this.getComments();
    }
};
</script>

<style scoped>

</style>