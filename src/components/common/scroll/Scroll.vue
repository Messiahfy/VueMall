<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'

    export default {
        name: "Scroll",
        data() {
            return {
                scroll: null
            }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.wrapper, {})
        },
        updated() {
            // 数据发生变化，可能高度会变化，需要调用BScroll的刷新，否则高度变化后滚动会异常
            this.refresh()
        },
        methods: {
            refresh() {
                // 代理better-scroll的refresh方法
                this.scroll && this.scroll.refresh()
            }
        }
    }
</script>

<style scoped>

</style>