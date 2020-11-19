<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <home-swiper :banners="banners"></home-swiper>
        <home-recommend-view :recommends="recommends"></home-recommend-view>
        <feature-view></feature-view>
        <tab-control :titles="['流行','新款','潮流']" class="tab-control"></tab-control>
    </div>
</template>

<script>
    import {getHomeMultiData} from "../../network/home";

    import HomeSwiper from "./childComps/HomeSwiper";
    import HomeRecommendView from "./childComps/HomeRecommendView";
    import FeatureView from "./childComps/FeatureView";

    import NavBar from "components/common/navbar/NavBar";
    import TabControl from "components/content/tabControl/TabControl";


    export default {
        name: "Home",
        components: {
            HomeSwiper,
            NavBar,
            HomeRecommendView,
            FeatureView,
            TabControl
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
    #home {
        padding-top: 44px;
    }

    .home-nav {
        background-color: var(--color-tint);
        color: white;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
    }

    /*吸顶效果*/
    .tab-control {
        position: sticky;
        top: 44px;
    }
</style>