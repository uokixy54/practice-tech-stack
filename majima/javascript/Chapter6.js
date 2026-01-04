/**
 * Chapter 6
 */

// functionの記法
// 通常
const foo = {
    testMethod: function() {}
};
// 短縮記法
const hoge = {
    testMethod() {}
};

// 演習1
// ex1fn(); // 巻き上げられない

const ex1fn = function() {
    console.log("Happy New Year!!");
}

ex1fn();

// 演習2
const value = ex2fn(123); // 巻き上げ

function ex2fn(value) {
    return value * 2
}

console.log(value);
