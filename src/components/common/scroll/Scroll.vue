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
        props: {
            probeType: {
                type: Number,
                default: 0
            },
            pullOnLoad: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.wrapper, {
                click: true,
                probeType: this.probeType,
                pullOnLoad: this.pullOnLoad
            })

            this.scroll.on('scroll', (position) => {
                this.$emit('scroll', position)
            })

            this.scroll.on('pullingUp', () => {
                this.$emit('pullingUp')
            })
        },
        updated() {
            // 数据发生变化，可能高度会变化，需要调用BScroll的刷新，否则高度变化后滚动会异常
            this.refresh()
        },
        methods: {
            refresh() {
                // 代理better-scroll的refresh方法
                this.scroll && this.scroll.refresh()
            },
            scrollTo(x, y, time = 300) {
                this.scroll.scrollTo(x, y, time)
            },
            finishPullUp() {
                this.scroll.finishPullUp()
            }
        }
    }
</script>

<style scoped>

</style>