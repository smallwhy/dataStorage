/**
 * 功能：
 * 定义存储页面数据对象插件
 * 介绍：
 * （ 在浏览器支持的情况下使用 sessionStorage，不支持使用对象存储，对象存储的缺点是一刷新页面就会消失，如果不想这样可以改为Cookie）
 * 适用：
 * （当在页面1跳转到页面2的时候，需要记录页面1的数据，使再次回到页面1的时候，可以取到对应的值，不会消失；）
 * 使用：
 * 参照index.html
 */

function CompatibleStorage() {
    this.storageObj = {}; // 定义对象存储
}

CompatibleStorage.prototype.setItem = function(key, value) {
    // 判断浏览器是否支持sessionStorage
    if(window.sessionStorage) {
        // 支持
        sessionStorage.setItem(key, value);
    } else {
        // 不支持
        this.storageObj[key] = value;
    }
}

CompatibleStorage.prototype.getItem = function(key) {
    // 判断浏览器是否支持sessionStorage
    if(window.sessionStorage) {
        // 支持
        return sessionStorage.getItem(key);
    } else {
        // 不支持
        return this.storageObj[key];
    }
}

CompatibleStorage.prototype.removeItem = function(key) {
    // 判断浏览器是否支持sessionStorage
    if(window.sessionStorage) {
        // 支持
        sessionStorage.removeItem(key);
    } else {
        // 不支持
        this.storageObj.hasOwnProperty(key) ? delete this.storageObj[key] : null;
    }
}

var dataStorageObj = new CompatibleStorage();