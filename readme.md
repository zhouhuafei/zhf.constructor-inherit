# 面向对象继承
* 仅适用于es5。
* 坑点：es6中使用class定义的构造函数，无法使用这个方法进行集成，会报错。
* es6中，使用class定义的构造函数。
    - 无法Suepr()直接调用。所以：
    - 也无法使用call和apply。
```
const constructorInherit = require('zhf.constructor-inherit');

function Super(opts = {}) {
    this.name = 'hello world';
    this.opts = opts;
}

Super.prototype.getAttribute = function () {
    console.log(this.name, this.opts);
};

const superType = new Super({a: 1});
superType.getAttribute(); // 'hello world' {a: 1}

const Sub = constructorInherit(Super, {b: 2});
const subType = new Sub();
subType.getAttribute(); // 'hello world' {b: 2}
```
