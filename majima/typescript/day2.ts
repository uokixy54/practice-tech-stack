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

// ユーザー定義型ガード
interface Animal {
    type: string;
}
interface Fish extends Animal {
    type: "fish";
    swim(): void;
}
interface Mammals extends Animal {
    type: "mammals";
    bark(): void;
}

function isFish(animal: Animal): animal is Fish {
    return animal.type === "fish" && "swim" in animal;
}

function isMammals(animal: Animal): animal is Mammals {
    return animal.type === "mammals" && "bark" in animal;
}

const printAnimalType = (animal: Animal) => {
    // この時点では型はAnimal
    //console.log(animal.swim);
    //console.log(animal.bark);
    if(isFish(animal)) {
        console.log(animal.swim);
    } else if (isMammals(animal)) {
        console.log(animal.bark);
    }
}

const fish: Fish = { type: "fish", swim: () => {} };
const mammals: Mammals = { type: "mammals", bark: () => {} };
printAnimalType(fish);
printAnimalType(mammals);

/**
 * unknown型（p55）
 * - anyとの違いはanyはほとんどの操作（呼び出し、プロパティにアクセス、被演算子にする）が許される
 * - unknownは具体的に値を絞り込まないと何もできなくて安全
 */
const x1: any = 2;
const y1: any = 2;
const z1 = x1 + y1;

const x2: unknown = 2;
const y2: unknown = 2;
let z2;
// z2 = x2 + y2; // unknownであるためエラー
if (typeof x2 === "number" && typeof y2 === "number") {
    z2 = x2 + y2;
}

/**
 * never型（pp56~57）
 * - どんな値も入れられない（nuknownの真逆）
 * - 処理上、到達不能な時にnuverになる
 */
// const never1: never = 123; // エラー

const fn2_5 = (ab: "a" | "b") => {
    if (ab === "a" || ab === "b") return;
    console.log(ab); // abはnever型
}

// const neverReturn = () => { throw "error!" ; };
// const returnedValue = neverReturn(); // returnedValueはnever型

// 複雑な型絞り込み（p58）
type User2 = { name: string };

// User2型であれば名前を返し、それ以外ではundefinedを返す
function gerUserName(maybeUser2: unknown): string | undefined {
    if (typeof maybeUser2 !== "object") return;
    // maybeUser2は object | null型
    if (maybeUser2 === null) return;
    // maybeUser2は object型
    if (!("name" in maybeUser2)) return;
    // maybeUser2は { name: unknown }型
    if (typeof maybeUser2.name !== "string") return;

    return maybeUser2.name;
}

/**
 * readonly（p59）
 * - ランタイムでは書き換え可能
 */
type Obj2_6 = {
    readonly prop: string;
};
const obj2_6: Obj2_6 = {
    prop: "hello",
};

// obj2_6.prop = "goodbye"; // エラー

/**
 * ジェネリクス（pp60~63）
 */

// 引数をそのまま返すid関数で考える
// const id = (arg) => arg;

const idBoolean = (arg: boolean): boolean => arg;
const idNumber = (arg: number): number => arg;
// 型の分だけ作るのは大変

// 型変数Tで引数の型をキャプチャ
const id = <T>(arg: T): T => arg;
const result = id<number>(123);

// 型推論に任せることも可能
const result1 = id(123);

/**
 * 演習2（pp64~69）
 */
// 問題1 記載のメソッドからSubject型を求める
type Subject = { kind: "name"; payload: string; } | { kind: "favorite_food"; payload: Array<string>; };

// 問題2 printSelfIntroduction関数でfavorite_foodのパターンを書き忘れてもエラーが出るようにする
function printSelfIntroduction(subject: Subject) {
    switch (subject.kind) {
        case "name":
            console.log(`私の名前は${subject.payload}です`);
            return;
        case "favorite_food":
            console.log(`私の好きな食べ物は${subject.payload.join("と")}です`);
            return;
        default:
            // const neverSub: never = subject;
            // return;
            // neverSub; // 回答例


            subject satisfies never; 
    }
}

// 問題3 JS -> TS
const msg3 = prompt("入力されたメッセージを大文字に変換します");
if (typeof msg3 === "string") {
    alert(msg3.toLocaleUpperCase());
}

// 問題4 ジェネリクスを使ってtriple関数作成
function triple<T>(value: T): [T, T, T] {
    return [value, value, value];
}

// 問題5 myArrayMap関数の作成
function myArrayMap<T>(array: Array<unknown>, fn: (val: unknown) => T): Array<T> {
    return array.map(v => fn(v));
}
function myArrayMap_ans<T, U>(array: Array<T>, fn: (val: T) => U): Array<U> {
    const mappedArray: Array<U> = [];
    for (const v of array) {
        mappedArray.push(fn(v));
    }
    return mappedArray;
}

/**
 * satisfiesについて
 * - 型注釈は型を上書きしてしまう
 * - satisfiesは型推論を保持することができる
 */
 // なぜ便利か
 type User1 = {
    id: number;
    name?: string;
 }

 const user1: User1 = {
    id: 1,
    name: "John",
 };
 // user1.name.toUpperCase(); // ここでuser1はUser1型に上書きされnameプロパティはstring | undefined型になる

 const user2 = {
    id: 1,
    name: "John",
 } satisfies User1;
 user2.name.toUpperCase(); // satisfiesは上書きせずに型推論を保持できる
