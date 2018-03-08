<template>
    <div>
        <div class="section" v-for="item in listmin" :key="item.level1cateid">
            
            <!--子类-->
            <div class="main-tit">
                <h2>{{item.catetitle}}</h2>
                <p>
                    <a href="javascript:;" v-for="subitem in item.level2catelist" :key="subitem.subcateid">{{subitem.subcatetitle}}</a>
                    <a href="javascript:;">更多
                        <i>+</i>
                    </a>
                </p>
            </div>
            <!--/子类-->
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <ul class="img-list">                    
                        <li v-for="listitem in item.datas" :key="listitem.artID">
                            <router-link :to="{name:'detail', params: {id: listitem.artID}}">

                                <div class="img-box">
                                    <img :src="listitem.img_url">
                                </div>
                                <div class="info">
                                    <h3>{{listitem.artTitle}}</h3>
                                    <p class="price"> <b>¥{{listitem.sell_price}}</b>元</p>
                                    <p>
                                        <strong>库存 {{listitem.stock_quantity}}</strong>
                                        <span>市场价：
                                        <s>{{listitem.market_price}}</s>
                                        </span>
                                    </p>
                                </div>
                            </router-link>
                        </li>                   
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                listmin: []
            };
        },
        methods: {
            goodsContent() {
            this.$http.get(this.$api.goodsContent).then(res => {
                if (res.data.status == 0) {
                this.listmin = res.data.message;
                console.log(this.listmin);
                }
            });
            }
        },
        created() {
            this.goodsContent();
        }
    };
</script>

<style scoped>

</style>