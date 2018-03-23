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
        /*
         * 子类型继承超类型的属性
         * 注意:
         * parameter要防止对象的引用(如果不防止的话,会出现BUG)
         * 例如 wrap的默认值是'.g-wrap'
         * 第一次   var obj1=new Sub({wrap:'body'});   wrap的值是'body'
         * 第二次   var obj2=new Sub();    这里按理说wrap的值应该是默认值'.g-wrap'
         * 但是由于对象引用的原因,这里的值会变成'body'
         * 因此这里要处理掉对象的引用,所以我使用了JSON的方法进行了阻止
         * 但是JSON.stringify方法居然会过滤掉对象内部的所有函数,真是日了狗了
         * 所以我就封装了一个移除对象引用的函数
         * */
        Super.call(this, extend(objRemoveQuote(parameter), json));
    }

    // 子类型继承超类型的方法
    Object.keys(Super.prototype).forEach(function (attr) {
        Sub.prototype[attr] = Super.prototype[attr];
    });

    return Sub;
}

module.exports = constructorInherit;
