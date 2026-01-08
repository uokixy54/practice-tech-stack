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
