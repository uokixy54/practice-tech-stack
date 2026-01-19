// 【JavaScript入門 #5】変数を理解しよう！var, let, constの使い分けまで解説！

// JS Binについて紹介
//  HTMLやCSSなども書くことができる。
//  フロントエンドの環境を用意して何か試したいときに便利
//  →"Playground"という（他にもCodePenやJSFiddleというものがある。）

// 1.変数とは
//  データを保存しておくための箱

// 2.コードで変数について解説
const foo = document.getElementById("foo");

const fooWidth = document.foo.offsetWidth;
// offsetWidth（プロパティ）は取ってきたDOM要素の横幅を取得する。
const fooHeight = document.foo.offsetHeight;
// offsetHeight（プロパティ）は取ってきたDOM要素の縦幅を取得する。

// 変数に格納することにより、短く記載することができ、よりわかりやすくすることができる。

const fooArea = fooWidth * fooHeight; // 例：面積を求めたい時 横幅　* 高さ
// 後ほどこのように使用したいときに変数によって処理することができるようになる。

// 3.変数の宣言方法
//  どうやって変数を宣言するのか。
//  const 変数名 = 初期値;
//  let 変数名 = 初期値;
//  var 変数名 = 初期値;
//  変数名は識別子と呼ばれることもある。

const foo1 = 100,
      foo2 = 100,
      foo3 = 1000;
// 変数名は同時に宣言することもでき、カンマ区切りとすることでconstを書かずに複数宣言することもできる。
// ただアプリ開発では基本的にすべてconstで宣言することが多い。
// letやvarでも複数宣言することは可能。

let bar = 200;

var baz = 300;

// 4.変数名のルール
//  一番最初の文字には決まりがある。
const fooA = 100;
// 英文字
const _fooA = 100;
// アンダースコア
const $fooA = 100;
// ドル文字

// 2文字目以降は数字も入れることはできる。

// 5.名前をつけるときのケース(camel, snake)を紹介
const fooWidth1 = 100; // camelCase
const foo_Width = 100; // snakeCase
// JavaScriptではキャメルケースを使用するのが慣例的

// 6.変数名に予約後は使ってはいけない。
//  ifとかforとか

// 7.const宣言の特徴
//  再代入できない、再定義できない。

// const constNumber = 100;
// constNumber = 200;
// 再代入はエラーになる。

// const constNumber1 = 100;
// const constNumber1 = 200;
// 再定義はエラーになる。

// 8.constは厳密には定数ではないという話
const obj = {
    foo: 123
};

console.log(obj.foo);

obj.foo = 456;

console.log(obj.foo);

// 定数というのはオブジェクトの中身も変わらないことをいうので、厳密にはこれは変わるので定数ではないということ。

// またセミコロンはつけることがベストプラクティスになる。
// 補完されているのでなくても動くが、バグの原因になりかねないので書いておく。

// 9.let宣言の特徴
//  再代入できる、再定義できない。

let letNumber = 100;
letNumber = 200;

console.log("ok");

console.log(letNumber);
// 再代入できる

// let letNumber = 100;
// let letNumber = 200;
// 再定義はエラーになる。

// 10.var宣言の特徴
//  再代入できる、再定義できる。

var varNumber = 100;
varNumber = 200;

console.log("ok");

console.log(varNumber);
// 再代入できる

var varNumber = 100;
var varNumber = 200;

console.log("ok");

console.log(varNumber);
// 再定義できる

// 11.const,let,varの使い分けについて

//  const > let > var

//  堅牢の方がよいのでconstを主に利用し、letはどうしてもconstが使えない場合に利用する。
//  varは使ったら負けと思ったほうがよい。var自体がバグを生む温床になりかねない。（以下の内容は後ほどのChapterで解説される予定。）
//  →ブロックスコープ無視
//      constやletはブロック内でのみ有効になるが、varはブロック外でも参照できてしまうため、スコープが不明瞭になり、意図しない変数の使用や上書きを引き起こす原因になる。
//  →変数の巻き上げ(Hoisting：ホイスティング)
//      ホイスティングとは、変数や関数の宣言が、そのスコープの先頭に移動されたかのように振る舞う JavaScript の特性。
//      varの場合、変数の宣言前に参照すると、undefinedが返ってくる。
//      letやconstの場合、変数の宣言前に参照すると、ReferenceError: x is not definedが返ってくる。
//      これは、let や const がブロックスコープを持ち、巻き上げが発生しないため。この挙動によって、コードがより予測可能で安全になる。

// 12.varが存在する理由
//  constやletの方が新しく、後方互換性のため存在している。（今あるプロジェクトが動かなくなったら困るため）