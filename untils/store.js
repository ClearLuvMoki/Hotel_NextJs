
import { message } from 'antd'


/**
 * @author ClearLuvMoki
 * @filename store.js
 * @date 2021-07-16 星期五
 * @description 设置本地存储
 * @todo 
 */
function localGetItem(key) {
    let val = localStorage.getItem(key)
    try {
        return JSON.parse(val)
    } catch (e) {
        return val
    }
}

function isObject(val) {
    return val !== null && typeof val === 'object'
}

/**
 * @author ClearLuvMoki
 * @filename store.js
 * @date 2021-07-16 星期五
 * @description 临时缓存
 * @todo 
 */
function getItem(key) {
    let val = sessionStorage.getItem(key)
    try {
        return JSON.parse(val)
    } catch (e) {
        return val
    }
}

function setItem(key, val) {
    if (isObject(val)) {
        sessionStorage.setItem(key, JSON.stringify(val))
    } else {
        sessionStorage.setItem(key, val)
    }
}

/**
 * @author ClearLuvMoki
 * @function 设置本地存储
 * @param {string} key 存储的键
 * @param {string} value 存储的值
 * @param {string} path 存储的路径
 */
 function set({ key, value, path = 'base'}) {
    let storage = getItem(path) || {}
    try {
        storage[key] = value
        setItem(path, storage)
    } catch {
        message.error('storage不是一个对象')
    }
}

/**
 * @author ClearLuvMoki
 * @function 获取本地存储
 * @param {string} key 存储的键
 * @param {string} path 存储的路径
 * @return {any}
 */
 function get({ key, path = 'base'}) {
    let storage = getItem(path)

    try {
        return storage[key]
    } catch {
        return storage
    }
}

export default { set, get }

