/**
 * day 1 typescript
 */

/**
 * ミニ演習1（pp13~14）
 * - コンパイラの導入とビルドの確認
 * - コンパイル結果の確認
 */
const msgString1 = "Hello world";
console.log("現在のメッセージは" + msgString1.length + "文字です");

// tsで書いてみる（p20）
const msgString2 = null;
// console.log("現在のメッセージは" + msgString2.length + "文字です"); // コンパイルエラー

/**
 * ミニ演習2（p21）
 * - エラーの確認
 * - エラーの修正
 * - コンパイルの確認
 */
// const msg: string = 12345; // コンパイルエラー
const msg: string = "Hello world";
console.log("現在のメッセージは" + msg.length + "文字です");

// 型注釈（p25）
const a: string = "hoge";
let b: string;
var c: string;

function greet(name: string): string {
    return "Hello, " + name;
}

class MyClass {
    e: string = "";
}

/**
 * 自明な型推論（p27）
 * - 自明な場合は型注釈を省略
 * - 自明でない場合は型注釈を付けるとエラーが特定しやすくなる
 */
const japaneseGreeting = "こんにちは";
const number1 = 123;
const isLoading = true;

// 基本的な型一覧（p28）
const num: number = 123;
const str: string = "hoge";
const bool: boolean = true;
const sym: symbol = Symbol("fuga"); // Symbol型は同じ値でも衝突しない、またobjectのkeyとしては取得されない（専用メソッドがある）
const nullObj: null = null;
const undef: undefined = undefined;
const bigint: bigint = 9007199254740991n; // 2^53までしか扱えないのを拡張する型で末尾にnもしくはBigInt関数を利用する

// リテラル型（p29）
const oneHundred: 100 = 100;
// const oneHundredErr: 100 = 101; // コンパイルエラー
const helloMsg: "hello world" = "hello world";
// const helloMsgErr1: "hello world" = "helloworld"; // コンパイルエラー
// const helloMsgErr2: "hello world" = "Hello World"; // コンパイルエラー

const trueVal: true = true;
// const trueValErr: true = false; // コンパイルエラー
const falseVal: false = false;

// constとletにおける型推論の違い（p30）
const aa = "hello"; // 文字リテラルに推論（変更されないことが保証されている）
let bb = "hello"; // String型に推論（helloになることは保証されていない）

// オブジェクトリテラル型（p31）
const obj: { num: number; str: string } = {
    num: 12345,
    str: "piyo",
};

// 配列型（p32）
const array1: number[] = [1, 2, 3];
const array2: Array<number> = [1, 2, 3];
const array3: [number, string, true] = [123, "hello", true]; // タプル型（各要素の型、順番、個数を正確に把握している型）

// 関数型（pp33~35）
// (num: number, bool: boolean) => string こんな形で表される
// () => string 引数なし
// (num: number, bool: boolean) => void 戻り値なし
const fn1: (num: number, bool: boolean) => string =
    (num, bool) => `${num}${bool}`;

const fn2 = (num: number, bool: boolean): string => `${num}${bool}`; // アロー関数そのものに型注釈
function fn3(num: number, bool: boolean): string { // function宣言そのものに型注釈
    return `${num}${bool}`;
}

// Any型（pp36~38）
// どんな値も代入できる
// TSをとりあえず導入したい場合など限られた時に使う
const any1: any = 12345;
const any2: any = "hogehoge";
const any3: any = (a: any) => a;

// 静的型検査でおこられない
// any型を使うときは慎重に、理由ありきで使うこと
const msg1: any = null;
// console.log("現在のメッセージは" + msg1.length + "文字です"); // 実行時エラー

// 型エイリアス（p39）
type MyName = string;
const myName: MyName = "taro yamada";

type Circle = { pos: { x: number; y: number }; r: number };
const circle: Circle = { pos: { x: 1, y: 2 }, r: 3 };

/**
 * 演習1（pp41~42）
 */
// 問題1 型注釈を付ける
type User = { 
    firstName: string;
    lastName: string;
    age: number;
    favoriteFoods: Array<string>;
    hasProgrammingExperience: boolean;
};
const user: User = {
    firstName: "太郎",
    lastName: "佐藤",
    age: 24,
    favoriteFoods: ["寿司", "ラーメン", "カレー"],
    hasProgrammingExperience: true,
};

// 問題2 getSelfIntroduction関数を定義
const getSelfIntroduction: (userObj: User) => string =
    userObj => 
        `私の名前は${userObj.lastName}${userObj.firstName}です。` +
        `年齢は${userObj.age}歳です。` +
        `好きな食べ物は${userObj.favoriteFoods.join("と")}です。` +
        `プログラミングの経験${userObj.hasProgrammingExperience ? "があります。" : "はありません。"}`;

// 問題3 問題2の結果を出力
console.log(getSelfIntroduction(user));
