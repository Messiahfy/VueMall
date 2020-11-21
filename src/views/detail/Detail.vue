<template>
    <div id="detail">
        <detail-nav-bar/>
        <detail-swiper :top-images="topImages"/>
        <detail-base-info :goods="goods"/>
        <detail-bottom-bar @addCart="addToCart"/>
    </div>
</template>

<script>
    import DetailNavBar from "./childComps/DetailNavBar";
    import DetailSwiper from "./childComps/DetailSwiper";
    import DetailBaseInfo from "./childComps/DetailBaseInfo";
    import DetailBottomBar from "./childComps/DetailBottomBar";
    import {getDetail, Goods, Shop} from "../../network/detail";

    export default {
        name: "Detail",
        components: {
            DetailSwiper,
            DetailNavBar,
            DetailBaseInfo,
            DetailBottomBar
        },
        data() {
            return {
                iid: null,
                topImages: [],
                goods: {},
            }
        },
        created() {
            this.iid = this.$route.params.iid

            //请求数据
            getDetail(this.iid).then(res => {
                const data = res.result
                this.topImages = data.itemInfo.topImages
                this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
            })
        },
        methods: {
            addToCart() {
                const product = {}
                // 模拟数据
                product.image = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605985234795&di=5ac6d528591c952260db49ffc07c9068&imgtype=0&src=http%3A%2F%2F2f.zol-img.com.cn%2Fproduct%2F78%2F527%2Fce1SYncpXiodk.jpg'
                product.title = '小时不识月'
                product.desc = '呼作白玉盘'
                product.price = 100
                product.iid = 1

                // 存到vuex
            }
        }
    }
</script>

<style scoped>
    #detail {
        position: relative;
        height: 100vh;
        z-index: 9;
        background-color: white;
    }
</style>