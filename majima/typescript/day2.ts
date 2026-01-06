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
