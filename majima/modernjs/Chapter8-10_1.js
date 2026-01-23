// named export
export const studentNum = 123;
export function study() {
    console.log("called study");
}

const studentName = "Kaito";
const doHomework = () => console.log("called doHomework");

export { studentName, doHomework };



// default export
// 識別子なしで使用可能（変数は不可、functionのみ）
// default exportは一度だけ宣言できる
export default function() {
    console.log("call anonymous function");
}

// export default studentName;



// ReExport
// 以下はすべてNamed
// 1. exportしたものをすべてそのままexportする手法
// 2. exportしたものすべてにasで名前を付けてexportする手法
// 3. exportしたものを選んでexportする手法
// 4. exportしたものを選んだものにasで名前を付けてexportする手法
// 以下はdefault exportが絡むもの
// 5. default exportしたものをdefault export
// export default student; // example1.js
// export { default } from "./example1.js"; // example2.js
// import * from "./example2.js" // index.js
// default exportしたものをimport時にdefaultという名前で受け取ることはできない

// 6. default exportしたものをNamed exportにしてexport
// export default student; // example1.js
// export { default as stu } from "./example1.js"; // example2.js
// import { stu } from "./example2.js" // index.js

// 7.Named exportしたものをdefault exportにする手法
// export { student }; // example1.js
// export { student as default } from "./example1.js"; // example2.js
// import stu from "./example2.js" // index.js
