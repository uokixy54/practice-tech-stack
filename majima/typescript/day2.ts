/**
 * day 2 typescript
 */

/**
 * Class（pp43~45）
 * - Classは型としても利用可能
 */

// JSにない抽象クラス抽象メソッドが宣言可能
interface Flyable {
    fly(): void;
}
class Bird implements Flyable {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    fly() {
        console.log(`${this.name}「パタパタ」`);
    }
}
const bat: Bird = new Bird("コウモリ");

// interface or 型エイリアス（pp46~47）
interface Obj1 {
    prop: 123;
}
type Obj2 = {
    prop: 123;
};
const obj1: Obj1 = { prop: 123 };
const obj2: Obj2 = { prop: 123 };

// interfaceは拡張できる
interface Hoge {
    a: number;
}
interface Hoge {
    b: number;
}

// Union（p48）
type NumOrStr = string | number;
type MaybeStr = string | null | undefined;

// リテラルを使用するとenumみたいに（enum構文もあるがあまり利用されない）
type Color = "red" | "blue" | "green" | "yellow";

/**
 * Optional（pp49~52）
 * - TSではデフォルトでstrictNullChecksがデフォルトで有効
 *   - Null, undefinedを厳密に扱うオプション
 * - ?でundefinedになりうることを伝えられる
 */
interface HogeHoge {
    a?: number;
}
type Fuga = {
    b?: string;
}
function fn(c?: boolean) {
    return c;
}
type maybeNumber = number | undefined; // Unionでも同じようなことが表現できる

/**
 * 型の絞り込み（pp53~54）
 */
function fn2_1(a?: number) {
    // ここでaはnumberかundefined型
    // Math.sqrt(a); // エラー

    if (a === undefined) return;

    // ここでaはnumber型
    Math.sqrt(a); // エラーにならない
}
function fn2_2(a?: number) {
    // ここでaはnumberかundefined型
    // Math.sqrt(a); // エラー

    if(typeof a === "number") {
        // ここでaはnumber型
        Math.sqrt(a); // エラーにならない
    }
}
function fn2_3(a?: Bird) {
    // ここでaはBirdかundefined型
    // a.fly(); // エラー

    if (a instanceof Bird) {
        // ここでaはBird型
        a.fly(); // エラーにならない
    }
}
function fn2_4(a?: "hello") {
    // ここでaはhelloかundefined型
    // const letters = a.length; // エラー

    if (a === "hello") {
        // ここでaはhello型
        const letters = a.length; // エラーにならない
    }
}

// ユーザー型ガードは後ほどやる

