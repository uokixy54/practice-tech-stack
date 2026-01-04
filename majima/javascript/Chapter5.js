/**
 * Chapter 5
 * - 簡単な内容のため演習は踏み込んだものを実施
 */

const a = 123;
let b = 456;
var c = 789;

// 演習1 varの巻き上げ
// console.log(d); // constは巻き上げられないのでエラー
// console.log(e); // letは巻き上げられないのでエラー
console.log(f); // varは巻き上げられるのでundefined
const d = 123;
let e = 234;
var f = 345;

// 演習2 varのはブロックスコープを持たない
var count = 0;
if (a) {
    var count = 1;
}
console.log(count); // varはブロックスコープを持たないためif内のcountの1がここで表示される
