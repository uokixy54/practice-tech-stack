// オブジェクトリテラルを宣言する方法
let shimabu = {
    name: "しまぶー", // プロパティ
    teachprogramming: function() {}, // メソッド
};
console.log("オブジェクトの内：", shimabu);

// 後から追加・変更が可能
shimabu.name = "しまぶーのIT大学"; // 追加
shimabu.age = 20; // 変更

console.log("shimabuオブジェクトの値を変更、追加：", shimabu);

// オブジェクトのまとまりをプロパティともいえる
// オブジェクトの入れ子構造
let youtuber = {
    list: {
        businessModel: {
            youtuber: [
                {name: "しまぶー：", age: 20},
                {name: "あっちゃん：", age: 22},
            ]
        },
        entertainmentModel: {
            youtuber: [
                {name: "ヒカキン：", age: 30},
                {name: "はじめしゃちょー：", age: 25},
            ]
        }
    },
    uploadvideo: function() {},
};

// オブジェクトのアクセス方法（基本はこっち）
console.log("youtuberの中身：", youtuber);
console.log("しまぶーの名前：", youtuber.list.businessModel.Youtuber[0].name);
console.log("メソッドの呼び出し：", youtuber.uploadvideo());

// 角括弧を使ったアクセス方法
console.log("しまぶーの名前：", youtuber["list"]["entertainmentModel"]["youtuber"][0]["name"]);
console.log("メソッドの呼び出し：", youtuber["uploadvideo"]());

// 外部とデータをやり取りする。
window.fetch();
fetch(); // windowは省略可能。

// DOM操作 ID="foo"の要素を取得
window.document.getElementById("foo");
document.getElementById("foo"); // windowは省略可能。