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
console.log(student1.greet === student2.greet);
console.log(student1.introduce === student2.introduce);

// 演習2 Object.create
