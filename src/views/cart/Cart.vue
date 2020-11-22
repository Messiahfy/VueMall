<template>
    <div>
        <nav-bar class="nav-bar">
            <div slot="center">购物车{{getCount}}</div>
        </nav-bar>
        <cartlist/>
    </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    import Cartlist from "./childComps/Cartlist";

    export default {
        name: "Cart",
        components: {
            Cartlist,
            NavBar
        },
        computed: {
            getCount() {
                const count = this.$store.getters.cartLength
                if (count > 0) {
                    return '(' + count + ')'
                } else {
                    return ''
                }
            }
        }
    }
</script>

<style scoped>
    .nav-bar {
        background-color: var(--color-high-text);
        color: white;
        font-weight: 700;
    }
</style>