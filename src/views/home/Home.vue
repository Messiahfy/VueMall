<template>
    <div id="home">
        <nav-bar class="home-nav">
            <div slot="center">购物街</div>
        </nav-bar>
        <tab-control :titles="['流行','新款','潮流']" class="sticky-tab-control" @tabClick="tabClick" v-show="isTabFixed"
                     ref="stickyTabControl"/>
        <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-on-load="true"
                @pullingUp="loadMore">
            <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
            <home-recommend-view :recommends="recommends"></home-recommend-view>
            <feature-view></feature-view>
            <tab-control :titles="['流行','新款','潮流']" @tabClick="tabClick" ref="tabControl"/>
            <goods-list :goods="showGoods"></goods-list>
        </scroll>
        <back-top @click.native="backClick" v-show="isShowBackTop"/>
    </div>
</template>

<script>
    import {getHomeMultiData, getHomeGoods} from "../../network/home";

    import HomeSwiper from "./childComps/HomeSwiper";
    import HomeRecommendView from "./childComps/HomeRecommendView";
    import FeatureView from "./childComps/FeatureView";

    import NavBar from "components/common/navbar/NavBar";
    import TabControl from "components/content/tabControl/TabControl";
    import GoodsList from "components/content/goods/GoodsList";
    import Scroll from "components/common/scroll/Scroll";
    import BackTop from "components/content/backTop/BackTop";


    export default {
        name: "Home",
        components: {
            HomeSwiper,
            NavBar,
            HomeRecommendView,
            FeatureView,
            TabControl,
            GoodsList,
            Scroll,
            BackTop
        },
        data() {
            return {
                banners: [],
                recommends: [],
                goods: {
                    'pop': {page: 0, list: []},
                    'news': {page: 0, list: []},
                    'sell': {page: 0, list: []}
                },
                currentType: 'pop',
                isShowBackTop: false,
                tabOffsetTop: 0,
                isTabFixed: false
            }
        },
        created() {
            this.getHomeMultiData()

            this.getHomeGoods('pop')
            this.getHomeGoods('news')
            this.getHomeGoods('sell')
        },
        mounted() {
            this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
        },
        computed: {
            showGoods() {
                return this.goods[this.currentType].list
            }
        },
        methods: {
            getHomeMultiData() {
                getHomeMultiData().then(res => {
                    this.banners = res.data.banner.list
                    console.log(this.banners)
                    this.recommends = res.data.recommend.list
                })
            },
            // 请求商品数据
            getHomeGoods(type,) {
                const page = this.goods[type].page + 1
                getHomeGoods(type, page).then(res => {
                    this.goods[type].list.push(...res.data.list)
                    this.goods[type].page += 1
                    this.$refs.scroll.finishPullUp()
                })
            },
            tabClick(index) {
                switch (index) {
                    case 0:
                        this.currentType = 'pop'
                        break
                    case 1:
                        this.currentType = 'news'
                        break
                    case 2:
                        this.currentType = 'sell'
                        break
                }
                this.$refs.stickyTabControl.currentIndex = index
                this.$refs.tabControl.currentIndex = index
            },
            backClick() {
                this.$refs.scroll.scrollTo(0, 0)
            },
            contentScroll(position) {
                // 滚到超过500像素，就显示滚到顶部的按钮
                this.isShowBackTop = -position.y > 500

                // 滚动距离达到tab-control的位置，就让sticky-tab-control显示出来
                this.isTabFixed = (-position.y) + this.$refs.scroll.$el.offsetTop > this.tabOffsetTop
            },
            loadMore() {
                this.getHomeGoods(this.currentType)
            },
            swiperImageLoad() {
                this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
            }
        }
    }
</script>

<style scoped>
    #home {
    }

    .home-nav {
        background-color: var(--color-tint);
        color: white;
    }

    .sticky-tab-control {
        position: fixed;
        top: 44px;
        left: 0;
        right: 0;
        z-index: 9;
    }

    /*视口总高度减去home的padding-top和底部导航栏的高度（或者使用绝对定位结合top和bottom）*/
    .content {
        height: calc(100vh - 88px);
        overflow: hidden;
    }
</style>