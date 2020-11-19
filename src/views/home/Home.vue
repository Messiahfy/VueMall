<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <home-swiper :banners="banners"></home-swiper>
        <home-recommend-view :recommends="recommends"></home-recommend-view>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import {getHomeMultiData} from "../../network/home";
    import HomeSwiper from "./childComps/HomeSwiper";
    import HomeRecommendView from "./childComps/HomeRecommendView";


    export default {
        name: "Home",
        components: {
            HomeSwiper,
            NavBar,
            HomeRecommendView
        },
        data() {
            return {
                banners: [],
                recommends: []
            }
        },
        created() {
            getHomeMultiData().then(res => {
                this.banners = res.data.banner.list;
                console.log(this.banners)
                this.recommends = res.data.recommend.list;
            })
        }
    }
</script>

<style scoped>
    .home-nav {
        background-color: var(--color-tint);
        color: white;
    }
</style>