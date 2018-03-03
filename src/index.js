const extend = require('zhf.extend');
const objRemoveQuote = require('zhf.obj-remove-quote');

/**
 * @description 面向对象继承
 * @param {Function} Super - 继承自某个超类型(这个必须传的是一个构造函数)
 * @param {Object} parameter - 子类型的参数(这个必须传的是一个对象)
 * */
function constructorInherit(Super, parameter = {}) {
    // 如果超类型不存在
    if (Object.prototype.toString.call(Super).toLowerCase().slice(8, -1) !== 'function') {
        console.log('no find Super or Super error');
        return false;
    }

    // 子类型
    function Sub(json) {
        // 子类型继承超类型的属性
        Super.call(this, extend(objRemoveQuote(parameter), json));
    }

    // 子类型继承超类型的方法
    Object.keys(Super.prototype).forEach(function (attr) {
        Sub.prototype[attr] = Super.prototype[attr];
    });

    return Sub;
}

module.exports = constructorInherit;
