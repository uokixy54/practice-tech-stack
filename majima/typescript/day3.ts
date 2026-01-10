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
 * 関数の部分型関係（pp79~）
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
