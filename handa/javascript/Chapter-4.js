// 【JavaScript入門 #4】オブジェクトを実際にコードで書いてみよう

// 1.オブジェクトの宣言方法について
let youtuber = {
    list: {
        business: {
            youtuber: [ // 角括弧は配列を意味する
                { name: "しまぶー", age: 20, teachProgramming() {} }, // [0]番目の要素
                { name: "あっちゃん", age: 37, teachHistory() {} } // [1]番目の要素
            ],
            teach() {}
        },
        entertainment: {
            youtuber: [{ name: "ヒカキン" }, { name: "はじめしゃちょー" }],
            makeSmile() {}
        }
    },
    plan() {},
    uploadVideo() {}
};

// 2.プロパティやメソッドへのアクセス方法
youtuber.list.business.youtuber[0].teachProgramming();

youtuber.plan();

youtuber.list.entertainment.makeSmile();

// 補完の恩恵１　typo防止
    // 打ち間違いのことをtypo（タイポ）という
// 補完の恩恵２　定義元を見なくても中身を知れる
    // Chapter-4-index.jsへimportして使用

// 3.Chrome DevtoolsのConsoleタブでオブジェクトを扱う
    // 作成してみたオブジェクトをコピーしてconsoleタブに貼り付け、Enter
    // そのまま続けて取り出したい要素を記述すると表示される

// 4.Window, Documentオブジェクトを解説
    // windowというのはブラウザそのものと考えるとわかりやすい
    // windowやdocumentはあらかじめブラウザ側で用意してくれているため、javascriptで自分で定義する必要はない
window = {
    console: {
        log() {},
    },
    alert() {},
    document: {
        getElementById() {},
    }
}

window.console.log();

// windowは省略できる
console.log();

window.alert();
alert();

window.document.getElementById();
document.getElementById();

// ブラウザ上のconsoleからwindowやdocumentを利用して要素の取得ができる