import axios from 'axios'
import { message } from 'antd'

export const baseURL = process.env.NODE_ENV === 'development' ? '/api': 'https://www.hotelavish.com/api'



/**
 * 创建实例 并设置默认超时时间 ms
 */
const service = axios.create({
    timeout: 100000, //默认10秒
    baseURL:baseURL
})

/**
 * 请求拦截器
 */
service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        Promise.reject(error)
    }
)

/**
 * 响应拦截器
 */
service.interceptors.response.use(
    (response) => {
        if (response?.data?.code !== 200) {
            message.error(response.data?.msg)
        }
        return response.data
    }, (error) => {
        message.error(error)
        return Promise.reject(error)
    }
)


// axios的get请求
export function getAxios({
    url,
    params={}
}) {
    return new Promise((resolve, reject) => {
        service.get(url, {
            params,
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}

// axios的post请求
export function postAxios({
    url,
    data
}) {
    return new Promise((resolve, reject) => {
        service({
            url,
            data,
            method: 'post',
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export default axios
