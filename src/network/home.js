import {request} from './request'

//请求多个数据（banner,类目）
export function getHomeMultiData() {
    return request({
        url: '/home/multidata'
    })
}