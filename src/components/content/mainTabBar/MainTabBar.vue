<template>
    <div>
        <router-view/>
        <tab-bar>
            <tab-bar-item path="/home" active-color="red">
                <img slot="item-icon" src="~assets/images/tabbar/icon01.png" alt="">
                <img slot="item-icon-active" src="~assets/images/tabbar/icon01_active.png" alt="">
                <div slot="item-name">主页</div>
            </tab-bar-item>
            <tab-bar-item path="/discuss" active-color="red">
                <img slot="item-icon" src="~assets/images/tabbar/icon02.png" alt="">
                <img slot="item-icon-active" src="~assets/images/tabbar/icon02_active.png" alt="">
                <div slot="item-name">分类</div>
            </tab-bar-item>
            <tab-bar-item path="/live" active-color="red">
                <img slot="item-icon" src="~assets/images/tabbar/icon03.png" alt="">
                <img slot="item-icon-active" src="~assets/images/tabbar/icon03_active.png" alt="">
                <div slot="item-name">购物车</div>
            </tab-bar-item>
            <tab-bar-item path="/mine" active-color="red">
                <img slot="item-icon" src="~assets/images/tabbar/icon04.png" alt="">
                <img slot="item-icon-active" src="~assets/images/tabbar/icon04_active.png" alt="">
                <div slot="item-name">我的</div>
            </tab-bar-item>
        </tab-bar>
    </div>
</template>

<script>
    import TabBar from "components/common/tabbar/TabBar";
    import TabBarItem from "components/common/tabbar/TabBarItem";

    export default {
        name: "MainTabBar",
        components: {
            TabBarItem,
            TabBar
        }
    }
</script>

<style scoped>

</style>