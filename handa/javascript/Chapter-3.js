Chapter3.js

// # 2.オブジェクトの作り方を解説
//     オブジェクトリテラルを宣言する方法
let shimabu = {
    name: "しまぶー", // プロパティ
    teachProgramming: function(){}, // メソッド
};

// あとから追加・変更もできる
shimabu.name = "しまぶーのIT大学"; // プロパティの変更
shimabu.age = 20; // 新規プロパティの追加

// # 3.プロパティやメソッドにアクセスする方法を解説
// オブジェクト構成例
let youtuber = { // オブジェクト
    list: { // オブジェクトの配列型のプロパティ
        business: { // オブジェクトの配列型のプロパティ
            youtuber: [ // オブジェクトの配列型のプロパティ
                {
                    name: "しまぶー", // プロパティ
                    sex: "man", // プロパティ
                    teachIT: function(){}, // メソッド
                },
                {
                    name: "あっちゃん", // プロパティ
                    age: 37, // プロパティ
                    teachProgramming: function(){}, // メソッド
                }
            ],
            teach: function(){}, // メソッド
        },
        entertainment: {}, // オブジェクト（プロパティ省略）
    },
    plan: function(){}, // メソッド
    uploadVideo: function(){}, // メソッド
};

//     ・ドットを用いたアクセス
youtuber.list.business.youtuber[0].name; // "しまぶー"を取得できる
youtuber.uploadVideo(); // uploadVideoが実行される
//     ・角括弧を用いたアクセス
youtuber["list"]["business"]["youtuber"][0]["name"]();
youtuber["uploadVideo"]();

// 基本的にはドットを用いたアクセスを使用する事が多い


// # 4.Window,Documentについて紹介
window.fetch(); // 外部とデータでやり取りする
window.document.getElementById("foo"); // DOM要素(HTMLなど)のid = "foo"を取得する
// windowはオブジェクト
// windowは省略できる。
fetch();
document.getElementById("foo");