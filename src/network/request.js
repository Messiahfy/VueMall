import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })
    // 拦截响应，直接返回响应中的数据
    instance.interceptors.response.use((res) => {
        return res.data
    })
    return instance(config)
}