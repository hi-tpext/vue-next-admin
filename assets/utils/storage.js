/**
 * window.localStorage 浏览器永久缓存
 * @method set 设置永久缓存
 * @method get 获取永久缓存
 * @method remove 移除永久缓存
 * @method clear 移除全部永久缓存
 */
window.Local = {
    // 查看 v2.4.3版本更新日志
    setKey: function (key) {
        // @ts-ignore
        return "".concat('tpext-admin', ":").concat(key);
    },
    // 设置永久缓存
    set: function (key, val) {
        window.localStorage.setItem(window.Local.setKey(key), JSON.stringify(val));
    },
    // 获取永久缓存
    get: function (key) {
        var json = window.localStorage.getItem(window.Local.setKey(key));
        return JSON.parse(json);
    },
    // 移除永久缓存
    remove: function (key) {
        window.localStorage.removeItem(window.Local.setKey(key));
    },
    // 移除全部永久缓存
    clear: function () {
        window.localStorage.clear();
    },
};
/**
 * window.sessionStorage 浏览器临时缓存
 * @method set 设置临时缓存
 * @method get 获取临时缓存
 * @method remove 移除临时缓存
 * @method clear 移除全部临时缓存
 */
window.Session = {
    // 设置临时缓存
    set: function (key, val) {
        window.localStorage.setItem(window.Local.setKey(key), JSON.stringify(val));
    },
    // 获取临时缓存
    get: function (key) {
        var json = window.localStorage.getItem(window.Local.setKey(key));
        return JSON.parse(json);
    },
    // 移除临时缓存
    remove: function (key) {
        window.localStorage.removeItem(window.Local.setKey(key));
    },
    // 移除全部临时缓存
    clear: function () {
        window.localStorage.clear();
    },
};
