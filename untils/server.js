import axios from 'axios'
import { message } from 'antd'
import store from './store'
const isCline=typeof window!=="undefined"
export const baseURL = process.env.NODE_ENV === 'development'&&isCline ? '/api': 'https://www.hotelavish.com/api'
const timeout=60000

/**
 * 创建实例 并设置默认超时时间 ms
 */
const service = axios.create({
    timeout: timeout, //默认10秒
    baseURL:baseURL
})
//不需要token的
const serviceNoToken = axios.create({
    timeout: timeout, //默认10秒
    baseURL:baseURL
})
/**
 * 请求拦截器
 */
service.interceptors.request.use(
    config => {
        console.log(config)
        const token = store.get({ key: 'token' })
        if (token) {
            config.headers['Authorization'] = token
        }
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
/**
 * 响应拦截器
 */
serviceNoToken.interceptors.response.use(
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
// axios的get请求
export function getAxios2({
                             url,
                             params={}
                         }) {
    return new Promise((resolve, reject) => {
        serviceNoToken.get(url, {
            params,
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}
// axios的post请求
export function postAxios2({
                              url,
                              data={}
                          }) {
    return new Promise((resolve, reject) => {
        serviceNoToken({
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
