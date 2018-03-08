<template>
<div>
    <!-- 导航栏 -->
    <div class="section">
        <div class="location">
            <span>当前位置：</span>
            <a href="/index.html">首页</a> &gt;
            <a href="/goods.html">购物商城</a>
            <a href="/goods/42/1.html">商品详情</a>
        </div>
    </div>
    <div class="section">
        <div class="wrapper">
            <div class="wrap-box">
                <!--类别菜单-->
                <div class="left-220" style="margin:0;">
                    <div class="banner-nav">
                        <ul>
                        <!--此处声明下面可重复循环-->
                        
                            <li v-for="item in top.catelist" :key="item.id">
                                <h3>
                                    <i class="iconfont icon-arrow-right"></i>
                                    <span>{{item.title}}</span>
                                    <p>
                                        <span v-for="subitem in item.subcates" :key="subitem.id">&nbsp;{{subitem.title}}</span>
                                    </p>
                                </h3>
                                <div class="item-box">
                                    <!--如有三级分类，此处可循环-->
                                    <dl>
                                        <dt><a href="/goods/40.html">{{item.title}}</a></dt>
                                        <dd>
                                            <router-link to="" v-for="subitem in item.subcates" :key="subitem.id">&nbsp;{{subitem.title}}</router-link>
                                        </dd>
                                    </dl>
                                </div>
                            </li>                      
                        </ul>
                    </div>
                </div>
                <!--/类别菜单-->
                
                <!--幻灯片-->
                <div class="left-705">
                    <div class="banner-img">
                        <template>
                            <el-carousel indicator-position="outside" style="height:100%">
                                <el-carousel-item style="height:341px" v-for="item in top.sliderlist" :key="item.id">
                                <img :src="item.img_url" alt="" height="341px">
                                </el-carousel-item>
                            </el-carousel>
                        </template>    
                    </div>
                </div>
                <!--/幻灯片-->
                
                <!-- 推荐列表 -->
                <app-aside :list="top.toplist"></app-aside>

                <!-- 商品展示列表 -->
                <app-listmin></app-listmin>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import appAside from './subcom/ComAside.vue'
    import appListmin from './subcom/ListMin.vue'
    export default {
        components:{
            appAside,
            appListmin
        },
        data(){
            return{
                top:{
                    catelist:[],
                    sliderlist:[],
                    toplist:[]
                }
            }
        },
        methods:{
            getTop(){
                this.$http.get(this.$api.goodsTop).then(res=>{             
                    if(res.data.status == 0){
                        this.top = res.data.message;
                    //    console.log(this.top);
                    }
                    
                })
            }
        },
        created(){
            this.getTop()
        }
    };
</script>

<style scoped lang="less">
      .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>