const constructorInherit = require('../dist/index.min');

test(`面向对象继承`, () => {
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

    expect(true).toEqual(true);
});
