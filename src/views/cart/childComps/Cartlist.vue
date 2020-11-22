<template>
    <div class="cart-list">
        <scroll class="content">
            <cart-list-item v-for="(item, index) in cartList" :key="index" :product="item"/>
        </scroll>
    </div>
</template>

<script>
    import Scroll from "../../../components/common/scroll/Scroll";
    import CartListItem from "./CartListItem";

    export default {
        name: "Cartlist",
        components: {CartListItem, Scroll},
        computed: {
            cartList() {
                return this.$store.state.cartList
            }
        }
    }
</script>

<style scoped>
    .cart-list {
        height: calc(100vh - 49px - 44px);

    }

    .content {
        height: 100%;
        overflow: hidden;
    }
</style>