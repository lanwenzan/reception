<template>
    <!--推荐商品-->
    <div class="left-220">
        <ul class="side-img-list">
        
            <li v-for="(item, i) in list" :key="item.id">
                <div class="img-box">
                    <label>{{i+1}}</label>
                    <img :src="item.img_url">
                </div>
                <div class="txt-box">
                    <router-link :to="{name:'detail', params: {id: item.id}}">{{item.title}}</router-link>
                    <span>2015-04-20</span>
                </div>
            </li>
        </ul>
    </div>
    <!--/推荐商品-->
</template>

<script>
    export default {
        props:["list"],
    }
</script>

<style scoped>

</style>