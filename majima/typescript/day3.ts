/**
 * day 3 typescript
 */

/**
 * 部分型関係（pp70~75）
 * - サブタイプ関係、is-a関係
 */
type Animal3 = { name: string; };
type Bird3 = { name: string; wings: "つばさ"; };
type Fish3 = { name: string; scales: "うろこ"; };

// Animal is Bird or Fishの関係
const bird3: Bird3 = { name: "スズメ", wings: "つばさ" };
const animal3: Animal3 = bird3; // 代入できる！
// console.log(animal3.wings); // ただしこの場合はanimal型に上書きでエラー
console.log(`この動物は${animal3.name}です`);
// 逆はできない
// またBird = Fish型の代入もできない
// S型をT型と扱っていいときその関係は集合でS⊆Tと表せる
// 以上のときSは部分型、Tは上位型という

// 部分型関係の性質（集合と同じ）

// 反射的 Animal型はAnimal型に値を代入できる
// Animal ⊆ Animal
// Bird ⊆ Bird

// 推移的
// Pigeon ⊆ Bird ⊆ Animalならば
// Pigion ⊆ Animal

/**
 * オブジェクトの部分型関係（pp76~78）
 * - 規則1:上位型にないプロパティが部分的に存在していてもいい
 * - 規則2:共通するプロパティについても部分型関係でなければならない
 */

type Animal3_2 = { name: string; };
type Bird3_2 = { name: string; wings: "つばさ"; };
type AnimalHouse = { resident: Animal3_2; };
type BirdHouse = { resident: Bird3_2; };

const birdHouse: BirdHouse = { resident: { name: "スズメ", wings: "つばさ" } };
const animalHouse: AnimalHouse = birdHouse; // BirdHouse ⊆ AnimalHouseなので許される

// 配列の部分型関係
const birdArray: Array<Bird3_2> = [{ name: "スズメ", wings: "つばさ" }];
const animalArray: Array<Animal3_2> = birdArray; // Bird ⊆ Animal ならば　Bird[] ⊆ Animal[]である

for (const animal of animalArray) {
    console.log(animal.name);
    // console.log(animal.wings); // これはエラー
}

/**
 * 関数の部分型関係（pp79~88）
 */
type Animal3_3 = { name: string; };
type Bird3_3 = { name: string; wings: "つばさ"; };

let printBird = (bird: Bird3_3) => console.log(bird.name);

const bird: Bird3_3 = { name: "スズメ", wings: "つばさ" };
printBird(bird);

let printAnimal = (animal: Animal3_3) => console.log(animal.name);
printBird = printAnimal;
// printAnimal = printBird // (animal: Animal) => voidに(bird: Bird) => voidは割り当てられない、ここだと前者はwingsプロパティを受け取れない
// 関数と変数は逆
// 関数の引数は部分型にたいして上位型が来る分には必ず存在するプロパティが呼ばれるからOK
// 逆に上位型に対して部分型の引数を許すと上位型にないプロパティが呼ばれる可能性があり型安全でなくなる
// 変数の場合は上位型の変数に部分型を代入することは素の変数は上位型で扱われることになり共通部分のプロパティのみ呼ばれるから型安全
// その逆は、部分型として扱っていると上位型にないプロパティにアクセスできてしまうから型安全でない

let getAnimal = (): Animal3_3 => ({ name: "すずめ" }); // (): Animal型
let getBird = (): Bird3_3 => ({ name: "すずめ", wings: "つばさ" }); // (): Bird型

getAnimal = getBird; // ここは変数の考え方と同じ

// Bird ⊆ Animalのとき
// (animal: Animal) => void を (bird: Bird) => voidの値と扱っても安全
// (animal: Animal) => void ⊆ (bird: Bird) => void
// 引数に着目すると、部分型の方に、上位型のAnimalが現れている（反変）
// () => Birdの値を() => Animlの値と扱っても安全
// () => Bird ⊆ () => Animal
// 戻り値については、上位型の方に、部分型のBirdが現れている（共変）
// T1 ⊆ S1 ∧ S2 ⊆ T2 ならば (S1) => S2 ⊆ (T1) => T2

// 以上から以下の場合は代入不可
let fnAnimal = (animal: Animal3_3) => animal;
let fnBird = (bird: Bird3_3) => bird;

// fnAnimal = fnBird;
// fnBird = fnAnimal;

// 以下は可能
let fnAnimal1 = (animal: Animal3_3) => console.log("");
let fnBird1 = (bird: Bird3_3) => console.log("");

fnBird1 = fnAnimal1;

let fnAnimal2 = (): Animal3_3 => ({ name: "すずめ" });
let fnBird2 = (): Bird3_3 => ({ name: "すずめ", wings: "つばさ" });

fnAnimal2 = fnBird2;

/**
 * 型アサーション（pp92~96）
 */

// HTMLElement | null型
// const myCanvas = document.getElementById("main_canvas");
// HTMLCanvasElement型
//const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

// アップキャスト
// source as Targetのとき Source ⊆ Targetであること
// bird as Animal
// 常に安全（必要ないこともある）
const animal: Animal3_3 = bird as Animal3_3;

// ダウンキャスト
// source as Targetのとき Target ⊆ Sourceであること
// animal as Bird
// 危険（ないプロパティにアクセスする可能背がある）
// 以下のような理由があるときに基本使う
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

// 部分型関係にない型へのキャストはできない
// bird as Fish <- これはNG
// bird as Animal as Fish <- これはできる
// bird as unknown as Fish <- これはできる
// 上位型を経由して部分型関係にない型にキャストすることを愚かなキャストという
// JavaではClassCastExceptionとして認められない

/**
 * Intersection（pp97~98）
 * - 交差型
 */

type A = number & unknown; // number
type B = number & never; // never
type C = { a: number } & { b: string };
// C ⊆ { a: number } ∧ C ⊆ { b: string }であるCを考える
// したがって
// Cは{ a: number; b: string }型

/**
 * 演習3（pp99~104）
 */
// 問題1
// const numLiteral1: 123 = 123;
// const numLiteral2: 123 = (() => { throw "err"; })();
// const num1: number =  456;
// const num2: number = (() => { throw "err"; })();
// const numArray: Array<number> = [123, (() => { throw "err"; })()];

// 問題2
const obj3: { name: string } = { name: "動物" };
const obj4: { name: any } = { name: "動物" };
const obj5: { name: unknown } = { name: "動物" };
const obj6: { name: "動物" } = { name: "動物" };

// 回答例
// const obj7: any = { name: "動物" };
// const obj8: unknown = { name: "動物" };
// const obj9: {} = { name: "動物" };

// 問題3
const birds: Array<Bird3_3> = [
    { name: "スズメ", wings: "つばさ" },
    { name: "カラス", wings: "つばさ"},
];
const shouldExtract = (bird: Bird3_3): boolean => bird.name === "スズメ";
const filterBirds = (birds: Array<Bird3_3>, shouldExtract: (bird: Bird3_3) => boolean): Array<Bird3_3> => {
    const results: Array<Bird3_3> = [];
    for (const bird of birds) {
        if (shouldExtract(bird)) {
            results.push(bird);
        }
    }
    return results;
}

const shouldExtract1 = (animal: Animal3_3): boolean => animal.name === "カラス";
const shouldExtract2 = (animal: Animal3_3): true => true;

console.log("shouldExtract1: ", filterBirds(birds, shouldExtract1));
console.log("shouldExtract2: ", filterBirds(birds, shouldExtract2));

// 回答例
// const shouldExtract3 = (maybeBird: unknown): boolean =>
//     typeof maybeBird === "object" && maybeBird !== null && "name" in maybeBird
//      ? maybeBird.name === "スズメ"
//       : false;

// const shouldExtract4 = (_: Bird3_3): true => true;
// const shouldExtract5 = (_: Bird3_3): never => {
//     while (true) {}
// };

// 問題4
type D = { prop: { a: number } } & { prop: { b: string } }; // { prop: { a:number; b: string: } }型
type E = number & 12345; // number型
type F = "Love" & "peace"; // "Love" | "peace"型

// 問題5
const reNum = 123 as unknown as string;
console.log(reNum.toLowerCase());
