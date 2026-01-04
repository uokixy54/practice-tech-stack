/**
 * Chapter 3
 */

// オブジェクトリテラル
let user = {
    name: "Majima",                    // プロパティ
    teachProgramming: function(){},    // メソッド
};
console.log(user.name);
console.log(user.teachProgramming());

user.name = "Jhon";
user.teachProgramming = function(){};
console.log(user.name);
console.log(user.teachProgramming());

// 演習1 関数コンストラクタ
function Student(name) {
    this.name = name;
    this.greet = function() {
        console.log("Hello!!");
    }
}
Student.prototype.introduce = function() {
    console.log(`My name is ${this.name}.`);
}

const student1 = new Student("Kaito Majima");
const student2 = new Student("Jhon Doe");
console.log(student1.name);
console.log(student2.name);
console.log(student1.greet === student2.greet); // インスタンス毎にメソッドが作成されるためfalse
console.log(student1.introduce === student2.introduce); // 共通のメソッド宣言のためtrue

// 演習2 Object.create
// この方法はプロトタイプを自由に指定できる作り方
const a = { x: 12 };
const b = Object.create(a);
console.log("a prottype: " + Object.getPrototypeOf(a));
console.log("b prottype: " + Object.getPrototypeOf(b));
console.log(Object.getPrototypeOf(a) === Object.getPrototypeOf(b)); // 同じプロトタイプは参照していないのでfalse、プロトタイプチェーンによる参照
// 同じプロトタイプのオブジェクトを新規に作成
const c = Object.create(Object.getPrototypeOf(a));
console.log(Object.getPrototypeOf(a) === Object.getPrototypeOf(c)); // 同じプロトタイプを参照しているためtrue
console.log("c prottype: " + Object.getPrototypeOf(c));
