/**
 * Chapter 7
 */

// 関数式と匿名関数
const isTewwtable = function(text) {
    return text.length <= 140;
}

// 高階関数とコールバック関数
function asyncfBatch(callBkFn) {
    // 非同期のバッチ処理・・・
    // バッチ処理が終了してエラーが起きたらコールバック関数を実行
    callBkFn();
}

// 演習1 ※参考になる例ではありません！
// 引数に渡した数が10以上なら任意のコールバック関数に引数を渡して実行
function checkMoreOr10(value, fn) {
    if (value >= 10) {
        return fn(value);
    }
    console.log("value is less than 10.");
    return 0
}

const doubleValue = checkMoreOr10(10, function(value){
    return value * 2
});
const value = checkMoreOr10(9, function(value){
    return value * 2
});
console.log(doubleValue);
console.log(value);
