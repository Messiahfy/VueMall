import {ADD_TO_CART} from "./mutaionsType";

export default {
    // 一般mutations里面只放纯粹的数据修改，如果有判断之类的逻辑，可以放到actions
    [ADD_TO_CART](state, payload) {
        state.cartList.push(payload)
        console.log(state.cartList)
    }
}